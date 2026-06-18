"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import type { CatererCardProps } from "@/types/caterer";
import { fallbackImages } from "@/types/caterer";
import { getDescription } from "@/types/caterer";
import LocationIcon from "@/assets/svg/LocationIcon";
import RupeeIcon from "@/assets/svg/RupeeIcon";
import TopRatedIcon from "@/assets/svg/TopRatedIcon";

const CatererCard = ({ caterer, imageIndex, serviceName }: CatererCardProps) => {
  const catererId = caterer._id ?? caterer.id
  const cardImage = caterer.imageUrl
    ? `url('${caterer.imageUrl}')`
    : fallbackImages[imageIndex % fallbackImages.length]

  const isComingSoon = serviceName === "Coming Soon"
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-200/70 transition duration-300 hover:shadow-xl">
      <div
        className="food-card-image relative h-44 bg-cover bg-center"
        style={{ "--card-image": cardImage } as CSSProperties}
      >
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-extrabold leading-tight text-brand-dark">{caterer.name}</h3>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-600">
              <LocationIcon />
              {caterer.location}
            </p>
          </div>
          <p className="flex items-center gap-1 text-sm font-semibold text-brand-dark">
            <span className="text-amber-400"><TopRatedIcon /></span>
            {caterer.rating.toFixed(1)}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {caterer.cuisines.map((cuisine) => (
            <span
              key={cuisine}
              className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-medium text-amber-900"
            >
              {cuisine}
            </span>
          ))}
        </div>

        <p className="flex items-center gap-1 text-lg font-extrabold text-green-600">
          <RupeeIcon className="h-5 w-5 shrink-0" />
          <span>{caterer.pricePerPlate}</span>
          <span className="text-sm font-medium text-slate-700">/ plate</span>
        </p>

        <p className="min-h-12 text-sm leading-6 text-slate-600">{getDescription(caterer)}</p>
        {isComingSoon ? (
          <button
            disabled
            className="block w-full rounded-lg bg-slate-300 px-4 py-3 text-center text-sm font-bold text-slate-700 cursor-not-allowed"
          >
            {serviceName}
          </button>
        ) : (
          <Link
            href={`/caterers/${catererId}`}
            className="block w-full rounded-lg border border-brand-orange px-4 py-3 text-center text-sm font-bold text-brand-orange transition hover:bg-brand-orange hover:text-white"
          >
            {serviceName || "View Details"}
          </Link>
        )}
      </div>
    </article>
  );
}

export default CatererCard;