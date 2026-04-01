import { XMLParser } from "fast-xml-parser";
import { Property } from "./types";

const parser = new XMLParser({
  isArray: (name: string) => ["property", "image"].includes(name),
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
});

import fs from "fs/promises";
import path from "path";

export async function getProperties(): Promise<Property[]> {
  try {
    const filePath = path.join(process.cwd(), "public", "property.xml");
    const xml = await fs.readFile(filePath, "utf-8");
    const data = parser.parse(xml);

    const rawProperties = data?.properties?.property ?? data?.feed?.property ?? [];

    return rawProperties.map((p: Record<string, unknown>, index: number) => {
      const generatedTitle = generateCreativeTitle(p);
      const rawId = String(p.id ?? p["@_id"] ?? index).trim();
      const baseSlug = generatedTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const slug = `${baseSlug}-${index}`;

      return {
        id: rawId,
        slug,
        url: typeof p.url === "string" ? p.url : undefined,
        title: generatedTitle,
        description: String(p.description ?? p.desc ?? ""),
      price: Number(p.price ?? 0),
      currency: String(p.currency ?? p.price_currency ?? "EUR"),
      price_eur: Number(p.price_eur ?? 0),
      type: String(p.type ?? p.property_type ?? ""),
      subtype: typeof p.subtype === "string" ? p.subtype : undefined,
      city: String(p.city ?? p.location ?? ""),
      district: typeof p.district === "string" ? p.district : undefined,
      neighborhood: typeof p.neighborhood === "string" ? p.neighborhood : undefined,
      address: typeof p.address === "string" ? p.address : undefined,
      country: String(p.country ?? ""),
      bedrooms: Number(p.bedrooms ?? p.beds ?? 0),
      bathrooms: Number(p.bathrooms ?? p.baths ?? 0),
      rooms: Number(p.rooms ?? 0),
      size: Number(p.size ?? p.area ?? p.surface ?? 0),
      land: Number(p.land ?? 0),
      floor: p.floor,
      totalfloors: p.totalfloors,
      storeys: Number(p.storeys ?? 0),
      balcony: Number(p.balcony ?? 0),
      constructionyear: p.constructionyear,
      features: extractFeatures(p),
      images: extractImages(p),
      };
    });
  } catch (error) {
    console.error("[XML Feed] Failed to read or parse local property.xml:", error);
    return [];
  }
}

export async function getPropertyById(id: string): Promise<Property | null> {
  const allProperties = await getProperties();
  if (!id) return null;
  const safeId = decodeURIComponent(id).trim();
  const property = allProperties.find((p) => String(p.id).trim() === safeId || p.slug === safeId);
  if (!property) {
    console.warn(`[Property Not Found] Requested ID/Slug: "${id}" (decoded: "${safeId}")`);
  }
  return property || null;
}

function generateCreativeTitle(p: Record<string, unknown>): string {
  // If a strong explicit title exists, use it
  if (p.title && String(p.title).length > 10) return String(p.title);
  
  const type = String(p.type ?? p.property_type ?? "Property");
  const subtype = typeof p.subtype === "string" ? p.subtype : "";
  const location = [p.neighborhood, p.district, p.city, p.country].filter(Boolean)[0] || "Prime Location";
  
  const features = extractFeatures(p).map(f => f.toLowerCase());
  const price = Number(p.price ?? 0);
  
  let adjective = "Exclusive";
  if (features.some(f => f.includes("sea") || f.includes("waterfront") || f.includes("beach"))) {
    adjective = "Breathtaking Waterfront";
  } else if (features.includes("penthouse") || subtype.toLowerCase().includes("penthouse")) {
    adjective = "Ultra-Luxury";
  } else if (features.some(f => f.includes("nature") || f.includes("golf"))) {
    adjective = "Tranquil Scenic";
  } else if (price > 5000000) {
    adjective = "Spectacular Luxury";
  } else if (type.toLowerCase() === "villa" || type.toLowerCase() === "mansion") {
    adjective = "Exquisite";
  } else if (subtype.toLowerCase().includes("brand new")) {
    adjective = "Brand New Premium";
  } else {
    adjective = "Premium";
  }

  const typeDisplay = subtype && !subtype.toLowerCase().includes("floor") 
    ? `${subtype} ${type}` 
    : type;
    
  return `${adjective} ${typeDisplay} in ${location}`;
}

function extractFeatures(p: Record<string, unknown>): string[] {
  const f = p.features as Record<string, unknown> | undefined;
  if (!f || !f.feature) return [];
  if (Array.isArray(f.feature)) return f.feature.map(String);
  if (typeof f.feature === "string") return [f.feature];
  return [];
}

function extractImages(p: Record<string, unknown>): string[] {
  // Handle various XML image structures
  const imageNode = p.images ?? p.photos ?? p.pictures;

  if (!imageNode) {
    // Try direct image field
    if (typeof p.image === "string") return [p.image];
    if (Array.isArray(p.image)) return p.image.map(String);
    return [];
  }

  if (typeof imageNode === "object" && imageNode !== null) {
    const node = imageNode as Record<string, unknown>;
    const imgs = node.image ?? node.photo ?? node.url;
    if (Array.isArray(imgs)) return imgs.map(String);
    if (typeof imgs === "string") return [imgs];
  }

  return [];
}
