"use client";

import { motion } from "framer-motion";
import React from "react";
import { Link } from "@/i18n/navigation";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-heading font-semibold tracking-wider uppercase transition-all duration-300 overflow-hidden group";

  const variants = {
    primary:
      "bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-charcoal-900 hover:from-gold-500 hover:via-gold-400 hover:to-gold-300 shadow-lg hover:shadow-gold-500/25",
    secondary:
      "bg-charcoal-700 text-cream-100 hover:bg-charcoal-600 border border-charcoal-600 hover:border-gold-500/30",
    outline:
      "bg-transparent text-gold-500 border-2 border-gold-500 hover:bg-gold-500 hover:text-charcoal-900",
    ghost:
      "bg-transparent text-gold-400 hover:text-gold-300 hover:bg-charcoal-800/50",
  };

  const sizes = {
    sm: "px-8 py-3 text-sm rounded-lg",
    md: "px-10 py-4 text-base rounded-xl",
    lg: "px-14 py-6 text-xl rounded-xl",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href as any} className="inline-block rounded-xl focus:outline-none">
        <motion.div
          className={combinedStyles}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          {content}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      className={combinedStyles}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {content}
    </motion.button>
  );
}
