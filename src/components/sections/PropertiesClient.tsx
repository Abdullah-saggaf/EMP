"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Filter, ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import PropertyCard from "@/components/ui/PropertyCard";
import { Property } from "@/lib/types";

interface PropertiesClientProps {
  properties: Property[];
}

export default function PropertiesClient({ properties }: PropertiesClientProps) {
  const t = useTranslations("properties");

  const [searchQuery, setSearchQuery] = useState("");
  const [filterCountry, setFilterCountry] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [sortOption, setSortOption] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  const countries = useMemo(() => {
    return Array.from(new Set(properties.map((p) => p.country).filter(Boolean)));
  }, [properties]);

  const types = useMemo(() => {
    return Array.from(new Set(properties.map((p) => p.type).filter(Boolean)));
  }, [properties]);

  const filteredAndSorted = useMemo(() => {
    let result = [...properties];

    // Search filter — matches on title, city, country, type, neighborhood
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((p) =>
        [p.title, p.city, p.country, p.type, p.neighborhood, p.district]
          .filter(Boolean)
          .some((field) => field!.toLowerCase().includes(q))
      );
    }

    if (filterCountry !== "all") {
      result = result.filter((p) => p.country === filterCountry);
    }
    if (filterType !== "all") {
      result = result.filter((p) => p.type === filterType);
    }

    if (sortOption === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "oldest") {
      result.reverse();
    }

    return result;
  }, [properties, searchQuery, filterCountry, filterType, sortOption]);

  const totalPages = Math.ceil(filteredAndSorted.length / itemsPerPage);
  const paginatedProperties = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredAndSorted.slice(start, start + itemsPerPage);
  }, [filteredAndSorted, currentPage]);

  const handleFilterChange = (setter: (val: string) => void, value: string) => {
    setter(value);
    setCurrentPage(1);
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const clearAll = () => {
    setSearchQuery("");
    setFilterCountry("all");
    setFilterType("all");
    setSortOption("newest");
    setCurrentPage(1);
  };

  const scrollToTop = () => {
    const element = document.getElementById("properties");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    setTimeout(scrollToTop, 100);
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    filterCountry !== "all" ||
    filterType !== "all" ||
    sortOption !== "newest";

  return (
    <section id="properties" className="py-24 relative overflow-hidden bg-black">
      {/* Background ambient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/4 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
              {t.raw ? t.raw("sectionLabel") : "Premium Portfolio"}
            </span>
            <div className="w-8 h-px bg-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-[1.05]">
            {t.raw ? t.raw("headline") : "Exclusive Real Estate Portfolio"}
          </h1>
          <p className="text-white/40 text-lg font-medium max-w-xl mx-auto leading-relaxed">
            {t.raw ? t.raw("subtitle") : "Discover handpicked investment opportunities across global markets."}
          </p>
        </motion.div>

        {/* ── SEARCH BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-6"
        >
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder={t("client.searchPlaceholder")}
              className="w-full bg-white/[0.03] border border-white/10 text-white placeholder:text-white/25 rounded-2xl pl-14 pr-14 py-5 text-sm font-medium focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all duration-300 hover:border-white/20"
            />
            {searchQuery && (
              <button
                onClick={() => handleSearch("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-3.5 h-3.5 text-white/60" />
              </button>
            )}
          </div>
        </motion.div>

        {/* ── FILTER BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-12"
        >
          <div className="bg-white/[0.02] border border-white/8 rounded-2xl p-4 flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-2.5 px-2 flex-shrink-0">
              <Filter className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{t("client.filterLabel")}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full flex-1">
              {/* Country */}
              <select
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 appearance-none font-medium text-sm transition-colors cursor-pointer hover:bg-white/8"
                value={filterCountry}
                onChange={(e) => handleFilterChange(setFilterCountry, e.target.value)}
              >
                <option value="all" className="bg-black">{t("client.allCountries")}</option>
                {countries.map((c) => (
                  <option key={c} value={c} className="bg-black">{c}</option>
                ))}
              </select>

              {/* Type */}
              <select
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 appearance-none font-medium text-sm transition-colors cursor-pointer hover:bg-white/8"
                value={filterType}
                onChange={(e) => handleFilterChange(setFilterType, e.target.value)}
              >
                <option value="all" className="bg-black">{t("client.allTypes")}</option>
                {types.map((type) => (
                  <option key={type} value={type} className="bg-black">{type}</option>
                ))}
              </select>

              {/* Sort */}
              <select
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 appearance-none font-medium text-sm transition-colors cursor-pointer hover:bg-white/8"
                value={sortOption}
                onChange={(e) => handleFilterChange(setSortOption, e.target.value)}
              >
                <option value="newest" className="bg-black">{t("client.sort.newest")}</option>
                <option value="oldest" className="bg-black">{t("client.sort.oldest")}</option>
                <option value="price-desc" className="bg-black">{t("client.sort.priceDesc")}</option>
                <option value="price-asc" className="bg-black">{t("client.sort.priceAsc")}</option>
              </select>
            </div>

            {/* Clear button — only visible when filters are active */}
            <AnimatePresence>
              {hasActiveFilters && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={clearAll}
                  className="flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-white/20 text-xs font-bold uppercase tracking-widest transition-all"
                >
                  <X className="w-3.5 h-3.5" />
                  {t("client.clearBtn")}
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Results count */}
          <div className="mt-3 px-2 flex items-center justify-between">
            <span className="text-xs font-semibold text-white/30">
              {filteredAndSorted.length === 1 
                ? t("client.resultFound", { count: filteredAndSorted.length })
                : t("client.resultsFound", { count: filteredAndSorted.length })
              }
            </span>
            {searchQuery && (
              <span className="text-xs font-semibold text-primary/70">
                {t("client.resultsFor", { query: searchQuery })}
              </span>
            )}
          </div>
        </motion.div>

        {/* ── RESULTS GRID ── */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {paginatedProperties.length > 0 ? (
              <motion.div
                key={`${currentPage}-${searchQuery}-${filterCountry}-${filterType}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              >
                {paginatedProperties.map((property, index) => (
                  <PropertyCard key={property.id} property={property} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-32 border border-white/5 rounded-3xl bg-white/[0.01]"
              >
                <Search className="w-12 h-12 text-white/10 mx-auto mb-6" />
                <p className="text-lg text-white/40 font-medium mb-6">
                  {t("noProperties")}
                </p>
                <button
                  onClick={clearAll}
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                >
                  {t("client.clearAllFilters")}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── PAGINATION ── */}
        {totalPages > 1 && (
          <div className="mt-20 flex items-center justify-center gap-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-3 rounded-xl border border-white/10 text-white/50 hover:text-primary hover:border-primary/50 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mx-4">
              {[...Array(totalPages)].map((_, i) => {
                const page = i + 1;
                if (totalPages > 7 && page !== 1 && page !== totalPages && Math.abs(page - currentPage) > 1) {
                  if (Math.abs(page - currentPage) === 2) return <span key={page} className="text-white/30">…</span>;
                  return null;
                }
                return (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${
                      currentPage === page
                        ? "bg-primary text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                        : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-3 rounded-xl border border-white/10 text-white/50 hover:text-primary hover:border-primary/50 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
