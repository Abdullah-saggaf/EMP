"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  index = 0,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
  index?: number;
}) => (
  <motion.div
    key={name}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-3xl cursor-pointer",
      "bg-white/[0.02] border border-white/8 hover:border-primary/40",
      "shadow-[0_0_0_1px_rgba(255,255,255,0.04),inset_0_1px_0_0_rgba(255,255,255,0.03)]",
      "hover:shadow-[0_0_60px_-10px_rgba(212,175,55,0.15)] transition-all duration-500",
      className,
    )}
  >
    {/* Background layer */}
    <div className="absolute inset-0 overflow-hidden">
      {background}
      {/* shine on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_30%_20%,rgba(212,175,55,0.06)_0%,transparent_60%)]" />
    </div>

    {/* Content */}
    <div className="pointer-events-none relative z-10 flex transform-gpu flex-col gap-3 p-8 pt-10 transition-all duration-300 group-hover:-translate-y-2">
      <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-2 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-black text-white tracking-tight group-hover:text-primary transition-colors duration-300">
        {name}
      </h3>
      <p className="text-sm text-white/40 leading-relaxed font-medium max-w-sm">{description}</p>
    </div>

    {/* CTA — slides up on hover */}
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-6 pb-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
      <Link
        href={href as any}
        className="pointer-events-auto inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-primary hover:text-white transition-colors"
      >
        {cta}
        <ArrowRightIcon className="h-3.5 w-3.5" />
      </Link>
    </div>

    {/* Bottom gradient fill for deep look */}
    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

    {/* Subtle border beam on hover */}
    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 [background:linear-gradient(var(--color-primary),var(--color-primary))_padding-box,conic-gradient(from_90deg,transparent_0%,rgba(212,175,55,0.15)_25%,transparent_50%)_border-box] border border-transparent pointer-events-none" />
  </motion.div>
);

export { BentoCard, BentoGrid };
