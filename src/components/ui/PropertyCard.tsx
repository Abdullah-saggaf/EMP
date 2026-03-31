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

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link href={`/properties/${property.slug}` as any} className="block group focus:outline-none">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
        className="relative bg-charcoal-800 rounded-2xl overflow-hidden border border-charcoal-700/50 group-hover:border-gold-500/30 transition-all duration-500 gold-glow-hover block"
      >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        {property.images.length > 0 ? (
          <Image
            src={property.images[0]}
            alt={property.title || `${property.type} in ${property.city}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-charcoal-700 to-charcoal-800 flex items-center justify-center">
            <MapPin className="w-12 h-12 text-charcoal-600" />
          </div>
        )}

        {/* Price Badge */}
        <div className="absolute top-4 start-4 bg-charcoal-900/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-gold-500/20">
          <span className="text-gold-400 font-heading font-bold text-lg">
            {formatPrice(property.price, property.currency)}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Type & Location */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-heading font-semibold tracking-wider uppercase text-gold-500">
            {property.type}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-charcoal-400">
            <MapPin className="w-3 h-3" />
            {property.city}
          </span>
        </div>

        {/* Title */}
        {property.title && (
          <h3 className="font-heading text-lg font-semibold text-cream-100 mb-4 line-clamp-1">
            {property.title}
          </h3>
        )}

        {/* Divider */}
        <div className="gold-line mb-4" />

        {/* Stats */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {property.bedrooms > 0 && (
              <div className="flex items-center gap-1.5 text-sm text-charcoal-400">
                <Bed className="w-4 h-4 text-gold-500/70" />
                <span>{property.bedrooms} {t("bed")}</span>
              </div>
            )}
            {property.bathrooms > 0 && (
              <div className="flex items-center gap-1.5 text-sm text-charcoal-400">
                <Bath className="w-4 h-4 text-gold-500/70" />
                <span>{property.bathrooms} {t("bath")}</span>
              </div>
            )}
            {property.size > 0 && (
              <div className="flex items-center gap-1.5 text-sm text-charcoal-400">
                <Maximize className="w-4 h-4 text-gold-500/70" />
                <span>{property.size} {t("sqm")}</span>
              </div>
            )}
          </div>

          {/* View Details */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 text-gold-500 hover:text-gold-400 transition-colors text-sm font-medium"
          >
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
      </motion.div>
    </Link>
  );
}
