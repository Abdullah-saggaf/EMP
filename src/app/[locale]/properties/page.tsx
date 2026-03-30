import { setRequestLocale } from "next-intl/server";
import Properties from "@/components/sections/Properties";

export default async function PropertiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <Properties />;
}
