import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, Locale } from "@/i18n/routing";
import { Inter, Outfit } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
});



export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  
  return {
    title: {
      default: "AMP Empire | Architects of Global Capital Corridors",
      template: `%s | AMP Empire`
    },
    description: "High-authority advisory hub bridging international capital and premium real estate.",
    keywords: ["real estate", "investment", "advisory", "capital corridors", "warsaw", "dubai", "riyadh"],
    authors: [{ name: "AMP Empire" }],
    viewport: "width=device-width, initial-scale=1",
    robots: "index, follow",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  return (
    <html
      lang={locale}
      dir="ltr"
      className={`${inter.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#0D0D0D" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased font-[var(--font-inter)]">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
