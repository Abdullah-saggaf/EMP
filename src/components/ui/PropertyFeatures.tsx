"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Dumbbell, Car, Trees, Wind, Utensils, Zap } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface PropertyFeaturesProps {
  features: string[];
}

export default function PropertyFeatures({ features }: PropertyFeaturesProps) {
  const t = useTranslations("propertyDetails.featuresGroups");
  const tDetails = useTranslations("propertyDetails");
  const locale = useLocale();
  const isRtl = locale === "ar";

  if (!features || features.length === 0) return null;

  // 1. Filter out redundant/unnecessary direction labels and duplicates
  const ignoreList = ['west', 'east', 'north', 'south', 'north-west', 'north-east', 'south-west', 'south-east'];
  const cleanFeatures = Array.from(new Set(features)).filter(f => !ignoreList.includes(f.toLowerCase().trim()));

  // 2. Define categories with match keywords and an icon
  const categories = [
    {
      id: "comfort",
      titleKey: "climate",
      text: t("climate"),
      icon: Wind,
      keywords: ["air conditioning", "smart-home", "underfloor", "heating", "generator", "jacuzzi", "blinds"]
    },
    {
      id: "leisure",
      titleKey: "leisure",
      text: t("leisure"),
      icon: Dumbbell,
      keywords: ["pool", "sauna", "spa", "fitness", "gym", "turkish bath", "social club", "game room", "barbeque", "solarium"]
    },
    {
      id: "security",
      titleKey: "security",
      text: t("security"),
      icon: ShieldCheck,
      keywords: ["security", "cctv", "camera", "concierge", "lift", "complex", "wheelchair"]
    },
    {
      id: "kitchen",
      titleKey: "kitchen",
      text: t("kitchen"),
      icon: Utensils,
      keywords: ["kitchen", "white goods", "appliances", "wardrobe", "dressing", "storage", "laundry", "cellar", "en-suite", "satellite"]
    },
    {
      id: "outdoor",
      titleKey: "outdoor",
      text: t("outdoor"),
      icon: Trees,
      keywords: ["balcony", "terrace", "garden", "nature", "sea", "view", "forest", "mountain", "beach", "city view", "lake", "airport", "stores", "restaurants", "bus"]
    },
    {
      id: "parking",
      titleKey: "parking",
      text: t("parking"),
      icon: Car,
      keywords: ["car", "park", "garage", "ev charge", "metro"]
    }
  ];

  // 3. Group features into categories dynamically
  const groupedFeatures: Record<string, string[]> = {};
  const uncategorized: string[] = [];

  cleanFeatures.forEach(feature => {
    const fLower = feature.toLowerCase();
    let assigned = false;
    for (const cat of categories) {
      if (cat.keywords.some(kw => fLower.includes(kw))) {
        if (!groupedFeatures[cat.titleKey]) groupedFeatures[cat.titleKey] = [];
        groupedFeatures[cat.titleKey].push(feature);
        assigned = true;
        break; // Apply to the first matched category
      }
    }
    if (!assigned) {
      uncategorized.push(feature);
    }
  });

  return (
    <div className="space-y-6">
      {categories.map((cat, groupIdx) => {
        const items = groupedFeatures[cat.titleKey];
        if (!items || items.length === 0) return null;
        
        return (
          <motion.div 
            key={cat.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
            className="bg-charcoal-900/40 border border-charcoal-800/60 rounded-2xl p-6 hover:border-gold-500/20 transition-colors duration-500"
          >
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-charcoal-800/60">
              <div className="w-10 h-10 rounded-xl bg-charcoal-800/80 flex items-center justify-center text-gold-500 border border-charcoal-700/50 shadow-inner">
                <cat.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-cream-100">{cat.text}</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "flex items-start gap-3 group",
                    isRtl && "flex-row-reverse text-right"
                  )}
                >
                  <CheckCircle2 className="w-5 h-5 text-gold-500/60 group-hover:text-gold-400 transition-colors flex-shrink-0" />
                  <span className="text-charcoal-300 group-hover:text-cream-200 transition-colors text-sm font-medium leading-tight pt-0.5">
                    {localizeFeatureLabel(item, tDetails)}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        );
      })}

      {/* Uncategorized items at the end */}
      {uncategorized.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-charcoal-900/40 border border-charcoal-800/60 rounded-2xl p-6"
        >
          <div className="flex items-center gap-4 mb-6 pb-4 border-b border-charcoal-800/60">
            <div className="w-10 h-10 rounded-xl bg-charcoal-800/80 flex items-center justify-center text-gold-500 border border-charcoal-700/50 shadow-inner">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-cream-100">{t("other")}</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
            {uncategorized.map((item, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex items-start gap-3 group",
                  isRtl && "flex-row-reverse text-right"
                )}
              >
                <CheckCircle2 className="w-5 h-5 text-gold-500/60 group-hover:text-gold-400 transition-colors flex-shrink-0" />
                <span className="text-charcoal-300 group-hover:text-cream-200 transition-colors text-sm font-medium leading-tight pt-0.5">
                  {localizeFeatureLabel(item, tDetails)}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

function normalizeFeatureKey(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

type Translator = (key: string) => string;

function localizeFeatureLabel(label: string, tDetails: Translator): string {
  const key = normalizeFeatureKey(label);
  const candidate = tDetails(`features.${key}`);

  // next-intl fallback may return the key path when missing.
  if (!candidate || candidate === `features.${key}` || candidate.includes(`propertyDetails.features.${key}`)) {
    return label;
  }

  return candidate;
}
