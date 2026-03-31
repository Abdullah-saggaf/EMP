import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import HomePreview from "@/components/sections/HomePreview";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import Testimonials from "@/components/sections/Testimonials";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <FeaturedProperties />
      <HomePreview />
      <Testimonials />
    </>
  );
}
