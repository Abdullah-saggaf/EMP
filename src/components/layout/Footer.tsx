"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

/* Inline SVG social icons */
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
  { icon: FacebookIcon, href: "https://www.facebook.com/amp.empire", label: "Facebook" },
  { icon: InstagramIcon, href: "https://www.instagram.com/amp.empire", label: "Instagram" },
  { icon: XIcon, href: "https://x.com/AMP23822869", label: "X" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/amprealestate", label: "LinkedIn" },
];

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact");

  const quickLinks = [
    { label: tNav.raw ? tNav.raw("home") : tNav("home"), href: "/" as const },
    { label: tNav.raw ? tNav.raw("properties") : tNav("properties"), href: "/properties" as const },
    { label: tNav.raw ? tNav.raw("services") : tNav("services"), href: "/services" as const },
    { label: tNav.raw ? tNav.raw("courses") : tNav("courses"), href: "/courses" as const },
    { label: tNav.raw ? tNav.raw("about") : tNav("about"), href: "/about" as const },
    { label: tNav.raw ? tNav.raw("contact") : tNav("contact"), href: "/contact" as const },
    { label: t.raw ? t.raw("privacyPolicy") : "Privacy Policy", href: "/" as const },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-black">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-8 transition-transform hover:scale-105 duration-300">
              <img src="/logo.png" alt="AMP Empire Logo" className="h-[80px] w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-6 font-medium">
              {t.raw ? t.raw("description") : t("description")}
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
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase text-white mb-6">
              {t.raw ? t.raw("quickLinks") : "Quick Links"}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm font-semibold text-white/50 hover:text-primary transition-colors duration-300 flex items-center gap-1 group"
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
            <h4 className="font-bold text-sm tracking-widest uppercase text-white mb-6">
              {t.raw ? t.raw("courses") : "Academy"}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/courses"
                  className="text-sm font-semibold text-white/50 hover:text-primary transition-colors duration-300 flex items-center gap-1 group"
                >
                  {t.raw ? t.raw("coursesLink") : "Real Estate Broker Course"}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase text-white mb-6">
              {t.raw ? t.raw("contactInfo") : "Contact Info"}
            </h4>
            <ul className="space-y-3 text-sm font-medium text-white/50">
              <li>
                <a
                  href={`mailto:${tContact.raw ? tContact.raw("email") : tContact("email")}`}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {tContact.raw ? tContact.raw("email") : tContact("email")}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${(tContact.raw ? tContact.raw("phone") as string : tContact("phone")).replace(/\s/g, "")}`}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {tContact.raw ? tContact.raw("phone") : tContact("phone")}
                </a>
              </li>
              <li>NIP: {tContact.raw ? tContact.raw("nip") : tContact("nip")}</li>
              <li>{tContact.raw ? tContact.raw("address") : tContact("address")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-semibold text-white/30 uppercase tracking-wider">
            {t.raw ? t.raw("copyright") : t("copyright")}
          </p>
          <p className="text-xs font-semibold text-white/30 uppercase tracking-wider">
            {t.raw ? t.raw("allRightsReserved") : t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}
