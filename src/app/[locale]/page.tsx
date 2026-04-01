import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import MissionSection from "@/components/sections/MissionSection";
import AcademyCTA from "@/components/sections/AcademyCTA";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Hero />
      <MissionSection />
      <FeaturedProperties />
      <ServicesSection />
      <TestimonialsSection />
      <AcademyCTA locale={locale} />
    </main>
  );
}
