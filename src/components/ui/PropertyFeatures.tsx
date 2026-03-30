"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Dumbbell, Car, Trees, Box, Waves, Building } from "lucide-react";

interface PropertyFeaturesProps {
  features: string[];
}

export default function PropertyFeatures({ features }: PropertyFeaturesProps) {
  if (!features || features.length === 0) return null;

  // Simple hardcoded mapping for luxury/common real estate terms to icons
  // Unmatched will fallback to CheckCircle2
  const getIconForFeature = (feature: string) => {
    const f = feature.toLowerCase();
    if (f.includes("pool") || f.includes("sea")) return Waves;
    if (f.includes("gym") || f.includes("fitness")) return Dumbbell;
    if (f.includes("car") || f.includes("park") || f.includes("garage")) return Car;
    if (f.includes("security") || f.includes("cctv")) return ShieldCheck;
    if (f.includes("garden") || f.includes("nature") || f.includes("park")) return Trees;
    if (f.includes("storage") || f.includes("wardrobe")) return Box;
    if (f.includes("complex") || f.includes("lift")) return Building;
    return CheckCircle2;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {features.map((feature, idx) => {
        const Icon = getIconForFeature(feature);

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="flex items-center gap-3 p-4 rounded-xl bg-charcoal-800/40 border border-charcoal-700/30 hover:border-gold-500/30 transition-colors"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-charcoal-900/50 flex items-center justify-center border border-charcoal-700/50">
              <Icon className="w-5 h-5 text-gold-500" />
            </div>
            <span className="text-sm font-heading font-medium text-cream-100 flex-1">
              {feature}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
