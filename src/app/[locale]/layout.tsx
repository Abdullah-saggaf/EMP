import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, Locale } from "@/i18n/routing";
import { Inter, Outfit, Noto_Sans_Arabic } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
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
  const dir = locale === "ar" ? "rtl" : "ltr";
  const isArabic = locale === "ar";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${outfit.variable} ${notoArabic.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#0D0D0D" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`antialiased ${isArabic ? "font-[var(--font-noto-arabic)]" : "font-[var(--font-inter)]"}`}
        style={{
          fontFamily: isArabic
            ? "var(--font-noto-arabic), sans-serif"
            : "var(--font-inter), sans-serif",
        }}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
