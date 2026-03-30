"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

/* Inline SVG social icons — Lucide doesn't ship branded icons */
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
);

const socialLinks = [
  {
    icon: FacebookIcon,
    href: "https://www.facebook.com/amp.empire",
    label: "Facebook",
  },
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/amp.empire",
    label: "Instagram",
  },
  {
    icon: XIcon,
    href: "https://x.com/AMP23822869",
    label: "X",
  },
  {
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/amprealestate",
    label: "LinkedIn",
  },
];

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact");

  const quickLinks = [
    { label: tNav("home"), href: "/" as const },
    { label: tNav("about"), href: "/about" as const },
    { label: tNav("services"), href: "/services" as const },
    { label: tNav("courses"), href: "/courses" as const },
    { label: tNav("contact"), href: "/contact" as const },
    { label: t("privacyPolicy"), href: "/" as const },
  ];

  return (
    <footer className="relative bg-charcoal-950 border-t border-charcoal-800/50">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
                <span className="font-heading font-bold text-charcoal-900 text-sm">
                  AE
                </span>
              </div>
              <span className="font-heading text-lg font-bold tracking-wide">
                <span className="text-cream-100">AMP</span>{" "}
                <span className="text-gold-500">Empire</span>
              </span>
            </div>
            <p className="text-sm text-charcoal-400 leading-relaxed mb-6">
              {t("description")}
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-charcoal-800/60 border border-charcoal-700/30 flex items-center justify-center text-charcoal-400 hover:text-gold-500 hover:border-gold-500/30 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold tracking-wider uppercase text-cream-200 mb-6">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-charcoal-400 hover:text-gold-400 transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-heading text-sm font-semibold tracking-wider uppercase text-cream-200 mb-6">
              {t("courses")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/courses"
                  className="text-sm text-charcoal-400 hover:text-gold-400 transition-colors duration-300 flex items-center gap-1 group"
                >
                  {t("coursesLink")}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-sm font-semibold tracking-wider uppercase text-cream-200 mb-6">
              {t("contactInfo")}
            </h4>
            <ul className="space-y-3 text-sm text-charcoal-400">
              <li>
                <a
                  href={`mailto:${tContact("email")}`}
                  className="hover:text-gold-400 transition-colors duration-300"
                >
                  {tContact("email")}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${tContact("phone").replace(/\s/g, "")}`}
                  className="hover:text-gold-400 transition-colors duration-300"
                >
                  {tContact("phone")}
                </a>
              </li>
              <li>{tContact("nip")}</li>
              <li>{tContact("location")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-800/50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-500">
            {t("copyright")}
          </p>
          <p className="text-xs text-charcoal-600">
            {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}
