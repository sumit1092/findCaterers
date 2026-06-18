"use client";

import { SortProps } from "@/types/caterer";

const SortCaterers = ({
  isLoading,
  sortedCaterers,
  sortBy,
  setSortBy,
}: SortProps) => {
  return (
    <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <p className="text-base font-medium text-brand-dark">
        {isLoading ? "Loading..." : `Showing ${sortedCaterers.length} caterers`}
      </p>

      <label className="flex items-center gap-3 self-start sm:self-auto">
        <span className="font-bold text-brand-dark">Sort by:</span>

        <select
          value={sortBy}
          onChange={(event) =>
            setSortBy(event.target.value as "rating-desc" | "price-asc" | "price-desc")
          }
          className="h-12 rounded-lg border border-slate-300 bg-white px-4 text-brand-dark outline-none transition focus:border-brand-orange focus:ring-4 focus:ring-orange-100"
        >
          <option value="rating-desc">Rating: High to Low</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </label>
    </div>
  );
};

export default SortCaterers;