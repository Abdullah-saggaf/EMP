"use client";

import { motion } from "framer-motion";
import { Bed, Bath, Maximize, MapPin, ArrowUpRight } from "lucide-react";
import { Property } from "@/lib/types";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

interface PropertyCardProps {
  property: Property;
  index: number;
}

export default function PropertyCard({ property, index }: PropertyCardProps) {
  const t = useTranslations("properties");

  const localizedType = localizePropertyType(property.type, t);
  const generatedTitle = resolveMessage(t, "fallbackTitle", { type: localizedType, city: property.city })
    ?? `${localizedType} in ${property.city}`;
  const displayTitle = shouldUseOriginalTitle(property.title)
    ? property.title!
    : generatedTitle;

  return (
    <Link href={`/properties/${property.id}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: "easeOut" }}
        className="group relative bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/8 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(212,175,55,0.2)] hover:-translate-y-1"
      >
        {/* Image Area */}
        <div className="relative h-56 overflow-hidden">
          {property.images && property.images.length > 0 ? (
            <Image
              src={property.images[0]}
              alt={displayTitle}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-white/[0.03] flex items-center justify-center">
              <MapPin className="w-10 h-10 text-white/10" />
            </div>
          )}

          {/* Price Badge */}
          <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-primary/30">
            <span className="text-primary font-black text-sm tracking-tight">
              {property.currency} {property.price.toLocaleString()}
            </span>
          </div>

          {/* Type badge */}
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
            <span className="text-[9px] font-black tracking-[0.2em] uppercase text-white/60">
              {localizedType}
            </span>
          </div>

          {/* Bottom overlay */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>

        {/* Content Area */}
        <div className="p-5">
          {/* Location Row */}
          <div className="flex items-center gap-1.5 mb-2">
            <MapPin className="w-3.5 h-3.5 text-primary/60" />
            <span className="text-xs font-semibold text-white/40 truncate">
              {[property.neighborhood, property.city, property.country].filter(Boolean).join(", ")}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-black text-base text-white tracking-tight mb-4 line-clamp-1 group-hover:text-primary transition-colors duration-300">
            {displayTitle}
          </h3>

          {/* Divider */}
          <div className="w-full h-px bg-white/8 mb-4" />

          {/* Stats + Arrow */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {property.bedrooms > 0 && (
                <div className="flex items-center gap-1.5 text-xs text-white/50 font-semibold">
                  <Bed className="w-3.5 h-3.5 text-primary/60" />
                  <span>{property.bedrooms}</span>
                </div>
              )}
              {property.bathrooms > 0 && (
                <div className="flex items-center gap-1.5 text-xs text-white/50 font-semibold">
                  <Bath className="w-3.5 h-3.5 text-primary/60" />
                  <span>{property.bathrooms}</span>
                </div>
              )}
              {property.size > 0 && (
                <div className="flex items-center gap-1.5 text-xs text-white/50 font-semibold">
                  <Maximize className="w-3.5 h-3.5 text-primary/60" />
                  <span>{property.size} {t("sqm")}</span>
                </div>
              )}
            </div>

            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 text-primary group-hover:text-black transition-colors" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

function shouldUseOriginalTitle(title?: string): boolean {
  if (!title) return false;
  const generatedPrefixes = [
    "premium",
    "breathtaking waterfront",
    "ultra-luxury",
    "tranquil scenic",
    "spectacular luxury",
    "exquisite",
    "brand new premium",
  ];

  const normalized = title.toLowerCase().trim();
  const looksGenerated = generatedPrefixes.some((prefix) => normalized.startsWith(prefix)) && normalized.includes(" in ");
  return !looksGenerated;
}

type Translator = (key: string, values?: Record<string, string | number>) => string;

function resolveMessage(t: Translator, key: string, values?: Record<string, string | number>): string | null {
  const translated = t(key, values);
  if (!translated) return null;
  if (translated === key) return null;
  if (translated.includes(`properties.${key}`)) return null;
  return translated;
}

function localizePropertyType(rawType: string, t: Translator): string {
  const normalized = rawType.toLowerCase().trim();
  const singular = normalized.endsWith("s") ? normalized.slice(0, -1) : normalized;

  const aliases: Record<string, string> = {
    apartments: "apartment",
    apartment: "apartment",
    villas: "villa",
    villa: "villa",
    house: "house",
    houses: "house",
    townhouse: "townhouse",
    townhouses: "townhouse",
    penthouse: "penthouse",
    penthouses: "penthouse",
    studio: "studio",
    studios: "studio",
    duplex: "duplex",
    duplexes: "duplex",
    office: "office",
    offices: "office",
    commercial: "commercial",
    mansion: "mansion",
    mansions: "mansion",
    land: "land",
    plot: "land",
    plots: "land",
    hotel: "hotel",
    hotels: "hotel",
  };

  const key = aliases[normalized] ?? aliases[singular];
  if (!key) return rawType;

  const messageKey = `types.${key}`;
  return resolveMessage(t, messageKey) ?? rawType;
}
