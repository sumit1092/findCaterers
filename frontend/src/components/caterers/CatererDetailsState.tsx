"use client";

import BackbtnIcon from "@/assets/svg/BackbtnIcon";
import { useRouter } from "next/navigation";

interface CatererDetailsStateProps {
  isLoading: boolean;
  error: string | null;
}

const CatererDetailsState = ({ isLoading, error }: CatererDetailsStateProps) => {
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="space-y-6 max-w-sm mx-auto">
        <div className="h-96 animate-pulse rounded-2xl bg-slate-200" />
        <div className="space-y-4 rounded-2xl bg-white p-8 shadow-card">
          <div className="h-10 w-3/4 animate-pulse rounded bg-slate-200" />
          <div className="h-6 w-1/2 animate-pulse rounded bg-slate-200" />
          <div className="h-6 w-2/3 animate-pulse rounded bg-slate-200" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
        <p className="text-lg font-semibold text-red-700">{error}</p>
        <button
          onClick={() => router.back()}
          className="mt-4 rounded-lg bg-red-600 px-6 py-2 font-semibold text-white transition hover:bg-red-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  return null;
};

export default CatererDetailsState;
