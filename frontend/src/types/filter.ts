export type FilterBarProps = {
  search: string;
  minPrice: string;
  maxPrice: string;
  isLoading: boolean;
  onSearchChange: (value: string) => void;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
  onApplyFilters: () => void;
  onClearFilters: () => void;
};

export function onlyDigits(value: string) {
  return value.replace(/[^\d]/g, "");
}