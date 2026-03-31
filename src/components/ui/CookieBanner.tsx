"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Small delay so it sweeps in smoothly after the page loads
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed bottom-0 start-0 z-[100] p-4 sm:p-6 w-full sm:max-w-[420px] pointer-events-none"
        >
          <div className="glass pointer-events-auto bg-charcoal-950/95 border border-charcoal-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl p-6 relative overflow-hidden backdrop-blur-xl">
            {/* Ambient glow */}
            <div className="absolute top-0 end-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 end-4 text-charcoal-400 hover:text-gold-500 transition-colors bg-charcoal-900/50 p-1.5 rounded-lg border border-charcoal-700/50"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-500/10 to-gold-500/5 flex items-center justify-center flex-shrink-0 border border-gold-500/20 shadow-inner">
                <Cookie className="w-5 h-5 text-gold-500" />
              </div>
              <div>
                <h3 className="text-[15px] font-heading font-bold text-cream-100 mb-1.5">Your Privacy</h3>
                <p className="text-xs text-charcoal-400 leading-relaxed pr-6">
                  We use cookies to enhance your browsing experience and analyze site traffic. By continuing to use our site, you consent to our 
                  <Link href="/contact" className="text-gold-500 hover:text-gold-400 font-medium decoration-gold-500/30 underline-offset-2 ml-1 transition-colors">
                    Cookie Policy
                  </Link>.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={handleAccept}
                className="w-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-charcoal-900 text-xs font-heading font-bold uppercase tracking-widest py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-gold-500/25 hover:from-gold-500 hover:to-gold-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-charcoal-950"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
