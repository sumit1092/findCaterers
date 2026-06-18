
import SearchIcon from "@/assets/svg/SearchIcon";
import { onlyDigits } from "@/types/filter";
import type { FilterBarProps } from "@/types/filter";

const FilterBar = ({
  search,
  minPrice,
  maxPrice,
  isLoading,
  onSearchChange,
  onMinPriceChange,
  onMaxPriceChange,
  onApplyFilters,
  onClearFilters,
}: FilterBarProps) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-filter md:p-5">
      <div className="grid gap-4 lg:grid-cols-[1.5fr_0.7fr_0.7fr_auto_auto] lg:items-end">
        <label className="block">
          <span className="sr-only">Search by caterer name</span>
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search by caterer name..."
              className="h-14 w-full rounded-lg border border-slate-300 bg-white pl-12 pr-4 text-base text-brand-dark outline-none transition placeholder:text-slate-500 focus:border-brand-orange focus:ring-4 focus:ring-orange-100"
            />
          </div>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-brand-dark">Min Price</span>
          <input
            value={minPrice}
            inputMode="numeric"
            onChange={(event) => onMinPriceChange(onlyDigits(event.target.value))}
            placeholder="0"
            className="h-12 w-full rounded-lg border border-slate-300 px-4 text-brand-dark outline-none transition focus:border-brand-orange focus:ring-4 focus:ring-orange-100"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-brand-dark">Max Price</span>
          <input
            value={maxPrice}
            inputMode="numeric"
            onChange={(event) => onMaxPriceChange(onlyDigits(event.target.value))}
            placeholder="1000"
            className="h-12 w-full rounded-lg border border-slate-300 px-4 text-brand-dark outline-none transition focus:border-brand-orange focus:ring-4 focus:ring-orange-100"
          />
        </label>

        <button
          type="button"
          onClick={onApplyFilters}
          disabled={isLoading}
          className="h-12 rounded-lg bg-brand-orange px-7 text-base font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Apply Filters
        </button>

        <button
          type="button"
          onClick={onClearFilters}
          disabled={isLoading}
          className="h-12 rounded-lg bg-slate-100 px-7 text-base font-semibold text-slate-600 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Clear Filters
        </button>
      </div>
    </section>
  );
}

export default FilterBar