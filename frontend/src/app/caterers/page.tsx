"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { getCaterers } from "@/services/catererService";
import Header from "@/components/layout/Header";
import FilterBar from "@/components/caterers/FilterBar";
import CatererCard from "@/components/caterers/CatererCard";
import SortCaterers from "@/components/caterers/SortCaterers";
import type { Caterer, CatererFilters } from "@/types/caterer";
import FeatureAbout from "@/components/caterers/FeatureAbout";

type SortOption = "rating-desc" | "price-asc" | "price-desc";

const CaterersPage = () => {
  const [caterers, setCaterers] = useState<Caterer[]>([]);
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("1000");
  const [appliedFilters, setAppliedFilters] = useState<CatererFilters>({
    search: "",
    minPrice: 0,
    maxPrice: 1000,
  });
  const [sortBy, setSortBy] = useState<SortOption>("rating-desc");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCaterers = useCallback(async () => {
    setIsLoading(true);
    setError("");

    try {
      const data = await getCaterers(appliedFilters);
      setCaterers(data);
    } catch (requestError) {
      const message = axios.isAxiosError(requestError)
        ? requestError.response?.data?.message ?? requestError.message
        : "Unable to fetch data"

      setError(message)
      setCaterers([])
    } finally {
      setIsLoading(false)
    }
  }, [appliedFilters])

  useEffect(() => {
    fetchCaterers()
  }, [fetchCaterers])

  const sortedCaterers = useMemo(() => {
    return [...caterers].sort((first, second) => {
      if (sortBy === "price-asc") {
        return first.pricePerPlate - second.pricePerPlate;
      }

      if (sortBy === "price-desc") {
        return second.pricePerPlate - first.pricePerPlate;
      }

      return second.rating - first.rating;
    });
  }, [caterers, sortBy]);

  const applyFilters = () => {
    setAppliedFilters({
      search: search.trim(),
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
    });
  };

  const clearFilters = () => {
    setSearch("");
    setMinPrice("0");
    setMaxPrice("1000");
    setAppliedFilters({
      search: "",
      minPrice: 0,
      maxPrice: 1000,
    });
  };

  return (
    <main className="min-h-screen">
      <Header />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.55fr]">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl">
              Find the best caterers
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Discover top-rated caterers for your events and celebrations.
            </p>
          </div>
        </div>

        <div className="-mt-1">
          <FilterBar
            search={search}
            minPrice={minPrice}
            maxPrice={maxPrice}
            isLoading={isLoading}
            onSearchChange={setSearch}
            onMinPriceChange={setMinPrice}
            onMaxPriceChange={setMaxPrice}
            onApplyFilters={applyFilters}
            onClearFilters={clearFilters}
          />
        </div>

          <SortCaterers
            isLoading={isLoading}
            sortedCaterers={sortedCaterers}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

        {error && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm font-semibold text-red-700">
            {error}
          </div>
        )}

        {!error && isLoading && (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-[29rem] animate-pulse rounded-2xl bg-white shadow-card ring-1 ring-slate-200/70"
              />
            ))}
          </div>
        )}

        {!error && !isLoading && sortedCaterers.length === 0 && (
          <div className="mt-6 rounded-2xl bg-white p-10 text-center shadow-card ring-1 ring-slate-200/70">
            <h2 className="mt-4 text-2xl font-extrabold text-brand-dark">No caterers found</h2>
            <p className="mx-auto mt-2 max-w-md text-slate-600">
              Try another caterer name
            </p>
          </div>
        )}

        {!error && !isLoading && sortedCaterers.length > 0 && (
          <div id="caterer-list" className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {sortedCaterers.map((caterer, index) => (
              <CatererCard
                key={caterer._id ?? caterer.id ?? `${caterer.name}-${caterer.location}`}
                caterer={caterer}
                imageIndex={index}
              />
            ))}
          </div>
        )}

        <div id="about" className="sr-only">
          Find Caterers helps people discover verified caterers.
        </div>

        <div id="saved" className="mt-14">
          <FeatureAbout />
        </div>
      </section>
    </main>
  );
}

export default CaterersPage;