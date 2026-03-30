"use client";

import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-charcoal-900">
      <div className="text-center px-6">
        <h1 className="font-heading text-8xl font-bold text-gradient-gold mb-4">
          404
        </h1>
        <p className="text-charcoal-400 text-lg mb-8">
          Page not found
        </p>
        <Button href="/" variant="outline">
          Return Home
        </Button>
      </div>
    </div>
  );
}
