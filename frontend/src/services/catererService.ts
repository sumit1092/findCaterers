import { api } from "@/lib/api";
import type {
  ApiListResponse,
  ApiSingleResponse,
  Caterer,
  CatererFilters,
  CreateCatererPayload,
} from "@/types/caterer";

export async function getCaterers(filters: CatererFilters = {}) {
  const { data } = await api.get<ApiListResponse<Caterer>>("/caterers", {
    params: {
      search: filters.search || undefined,
      minPrice: filters.minPrice ?? undefined,
      maxPrice: filters.maxPrice ?? undefined,
    },
  });

  return data.data;
}

export async function getCatererById(catererId: string) {
  const { data } = await api.get<ApiSingleResponse<Caterer>>(`/caterers/${catererId}`);
  return data.data;
}

export async function createCaterer(payload: CreateCatererPayload) {
  const { data } = await api.post<ApiSingleResponse<Caterer>>("/caterers", payload);
  return data.data;
}
