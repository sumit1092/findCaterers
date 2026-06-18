export type Caterer = {
  _id?: string;
  id?: string;
  name: string;
  description?: string;
  imageUrl?: string;
  location: string;
  pricePerPlate: number;
  cuisines: string[];
  rating: number;
};

export type CatererFilters = {
  search?: string;
  minPrice?: number;
  maxPrice?: number;
};

export type ApiListResponse<T> = {
  success: boolean;
  count: number;
  data: T[];
};

export type ApiSingleResponse<T> = {
  success: boolean;
  message?: string;
  data: T;
};

export type CatererCardProps = {
  caterer: Caterer;
  imageIndex: number;
  serviceName?: string;
};

export type CreateCatererPayload = Omit<Caterer, "_id" | "id">;

export const fallbackImages = [
  "url('https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80')",
];

export function getDescription(caterer: Caterer) {
  if (caterer.description) {
    return caterer.description;
  }

  return `${caterer.cuisines.slice(0, 2).join(" and ")} delicacies.`;
}

export type SortProps = {
  isLoading: boolean;
  sortedCaterers: any[];
  sortBy: "rating-desc" | "price-asc" | "price-desc";
  setSortBy: (sortOption: "rating-desc" | "price-asc" | "price-desc") => void;
}
