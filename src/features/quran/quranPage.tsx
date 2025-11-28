import { useCallback, useEffect, useMemo, useState } from "react";
import { useGetAllSurah } from "./useQuran";
import { SkeletonCard } from "../../components/shared/Skeleton";
import { SurahPageHeader } from "./components/SurahPageHeader";
import { SurahFilterBar } from "./components/SurahFilterBar";
import { SurahGrid } from "./components/SurahGrid";

const INITIAL_VISIBLE_SURAH = 12;
const LOAD_MORE_STEP = 12;

export function QuranPage() {
  const { data: allSurah = [], error, isLoading } = useGetAllSurah();
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_SURAH);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_SURAH);
  }, [query, allSurah.length]);

  const filteredSurah = useMemo(() => {
    if (!query) return allSurah;
    return allSurah.filter((surah) => {
      const keyword = query.toLowerCase();
      return (
        surah.namaLatin.toLowerCase().includes(keyword) ||
        surah.nama.toLowerCase().includes(keyword) ||
        surah.arti.toLowerCase().includes(keyword)
      );
    });
  }, [allSurah, query]);

  const visibleSurah = useMemo(() => {
    return filteredSurah.slice(0, visibleCount);
  }, [filteredSurah, visibleCount]);

  const handleQueryChange = useCallback((value: string) => {
    setQuery(value);
  }, []);

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => {
      const next = prev + LOAD_MORE_STEP;
      return next > filteredSurah.length ? filteredSurah.length : next;
    });
  }, [filteredSurah.length]);

  const hasMore = visibleCount < filteredSurah.length;

  if (isLoading) {
    return (
      <section>
        <SurahPageHeader totalSurah={0} />
        <SurahFilterBar query="" onChange={() => {}} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <div className="rounded-3xl bg-red-50 px-6 py-10 text-center text-red-700">
        Terjadi kesalahan: {error.message}
      </div>
    );
  }

  return (
    <section>
      <SurahPageHeader totalSurah={allSurah.length} />
      <SurahFilterBar query={query} onChange={handleQueryChange} />
      <SurahGrid surahList={visibleSurah} />
      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={handleLoadMore}
            className="rounded-full bg-linear-to-r from-emerald-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-400/40 transition hover:-translate-y-0.5"
          >
            Muat lebih banyak
          </button>
        </div>
      )}
    </section>
  );
}
