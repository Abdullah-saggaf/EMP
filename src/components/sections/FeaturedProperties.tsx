import { getProperties } from "@/lib/properties";
import PropertyCard from "@/components/ui/PropertyCard";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function FeaturedProperties() {
  const t = useTranslations("featuredProperties");

  // Load properties inside the effect or move it to server component wrapping it, 
  // Wait, `getProperties` is from a `public/property.xml`. Let's keep it async. But wait, we can't use `useTranslations` inside an async server component without passing locale, unless we use `await getTranslations()`.
  
  // Ah! Next-intl server components use `await getTranslations()`!
  // It's currently `export default async function FeaturedProperties()`.
  return <FeaturedPropertiesServer />;
}

async function FeaturedPropertiesServer() {
  const { getTranslations } = await import("next-intl/server");
  const t = await getTranslations("featuredProperties");
  const properties = await getProperties();
  const featured = properties.slice(0, 6);

  if (featured.length === 0) return null;

  return (
    <section id="properties" className="py-32 bg-black relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/4 rounded-full blur-[250px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
                {t("sectionLabel")}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.05]">
              {t.rich("headline", {
                highlight: (chunks) => <span className="text-primary italic">{chunks}</span>
              })}
            </h2>
          </div>
          <p className="text-white/40 font-medium text-lg max-w-xs leading-relaxed md:pb-2">
            {t("subtitle")}
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 flex items-center justify-center">
          <Link
            href="/properties"
            className="group inline-flex items-center gap-4 px-10 py-5 bg-white/5 border border-white/10 rounded-full text-white font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-black hover:border-primary transition-all duration-500 hover:scale-105 active:scale-95"
          >
            {t("cta")}
            <span className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-black/20 flex items-center justify-center transition-colors">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
