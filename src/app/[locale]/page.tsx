import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import HomePreview from "@/components/sections/HomePreview";
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
      <HomePreview />
      <Testimonials />
    </>
  );
}
