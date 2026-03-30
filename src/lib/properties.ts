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
    const filePath = path.join(process.cwd(), "property.xml");
    const xml = await fs.readFile(filePath, "utf-8");
    const data = parser.parse(xml);

    const rawProperties = data?.properties?.property ?? data?.feed?.property ?? [];

    return rawProperties.map((p: Record<string, unknown>, index: number) => ({
      id: String(p.id ?? p["@_id"] ?? index),
      url: typeof p.url === "string" ? p.url : undefined,
      title: String(p.title ?? p.name ?? ""),
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
    }));
  } catch (error) {
    console.error("[XML Feed] Failed to read or parse local property.xml:", error);
    return [];
  }
}

export async function getPropertyById(id: string): Promise<Property | null> {
  const allProperties = await getProperties();
  return allProperties.find((p) => p.id === id) || null;
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
