"use client";

import { useTranslations } from "next-intl";
import { Property } from "@/lib/types";
import PropertyCard from "@/components/ui/PropertyCard";
import { motion } from "framer-motion";

interface SimilarPropertiesProps {
  currentPropertyId: string;
  properties: Property[];
  type?: string;
  city?: string;
}

export default function SimilarProperties({ currentPropertyId, properties, type, city }: SimilarPropertiesProps) {
  const t = useTranslations("properties");

  // Filter properties with same type or city, exclude current
  const similar = properties
    .filter((p) => p.id !== currentPropertyId)
    .filter((p) => (type && p.type === type) || (city && p.city === city))
    .slice(0, 4);

  if (similar.length === 0) return null;

  return (
    <section className="mt-24 border-t border-charcoal-800/50 pt-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-heading font-bold text-cream-100">Similar to this property</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {similar.map((property, idx) => (
          <PropertyCard key={property.id} property={property} index={idx} />
        ))}
      </div>
    </section>
  );
}
