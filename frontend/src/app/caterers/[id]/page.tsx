"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { getCatererById } from "@/services/catererService";
import type { Caterer } from "@/types/caterer";
import Header from "@/components/layout/Header";
import CatererCard from "@/components/caterers/CatererCard";
import CatererDetailsState from "@/components/caterers/CatererDetailsState";
import BackbtnIcon from "@/assets/svg/BackbtnIcon";
import { getDescription } from "@/types/caterer";

const CatererDetailsPage = () => {
    const params = useParams();
    const router = useRouter();
    const catererId = params.id as string;

    const [caterer, setCaterer] = useState<Caterer | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCaterer = async () => {
            setIsLoading(true);
            setError(null);

            try {
                if (!catererId) {
                    setError("Caterer ID not found");
                    return;
                }

                const data = await getCatererById(catererId);
                setCaterer(data);
            } catch (requestError) {
                const message = axios.isAxiosError(requestError)
                    ? requestError.response?.data?.message ?? requestError.message
                    : "Unable to load data";

                setError(message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCaterer();
    }, [catererId]);

    return (
        <main className="min-h-screen bg-slate-50">
            <Header />

            <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
                <button
                    onClick={() => router.back()}
                    className="mb-8 flex items-center gap-2 text-sm font-semibold text-brand-orange transition hover:gap-3"
                >
                    <BackbtnIcon />
                    Back to Caterers
                </button>

                <CatererDetailsState isLoading={isLoading} error={error} />

                {!isLoading && !error && caterer && (
                    <div className="max-w-md mx-auto">
                        <CatererCard
                            caterer={caterer}
                            imageIndex={0}
                            serviceName="Coming Soon"
                        />
                        <div className="mt-8 rounded-2xl bg-white p-6 shadow-card">
                            <h2>About Caterer</h2>
                            <strong>{caterer.description || getDescription(caterer)}</strong>
                        </div>
                    </div>

                )}
            </div>
        </main>
    );
}

export default CatererDetailsPage;