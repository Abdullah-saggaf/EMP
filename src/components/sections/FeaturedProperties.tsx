import { getProperties } from "@/lib/properties";
import PropertyCard from "@/components/ui/PropertyCard";
import Button from "@/components/ui/Button";

export default async function FeaturedProperties() {
  const properties = await getProperties();
  const featured = properties.slice(0, 6);

  if (featured.length === 0) return null;

  return (
    <section className="section-padding relative overflow-hidden bg-charcoal-950/40">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900/30 to-charcoal-950/30" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-heading font-semibold tracking-[0.3em] uppercase text-gold-500 mb-4">
            — Premium Collection —
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-cream-100 mb-4">
            Featured Properties
          </h2>
          <div className="gold-line max-w-24 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        <div className="mt-24 text-center">
          <Button href="/properties" size="lg" className="min-w-[200px]">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
}
