import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AMP Empire — Global Investment Advisory & Premium Real Estate",
  description:
    "AMP Empire connects capital with real investment opportunities across European and Middle Eastern markets. Premium real estate advisory, investment consulting, and training courses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
