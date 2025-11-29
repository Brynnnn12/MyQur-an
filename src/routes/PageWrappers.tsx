import { lazy, Suspense } from "react";
import {
  SkeletonCard,
  SkeletonAyatCard,
  SkeletonText,
} from "../components/shared/Skeleton";
import { SurahPageHeader } from "../features/quran/components/SurahPageHeader";
import { SurahFilterBar } from "../features/quran/components/SurahFilterBar";

const HomePage = lazy(() =>
  import("../pages/HomePage").then((mod) => ({ default: mod.HomePage }))
);
const QuranPage = lazy(() =>
  import("../features/quran/quranPage").then((mod) => ({
    default: mod.QuranPage,
  }))
);
const DetailQuranPage = lazy(() =>
  import("../features/detail/detailQuranPage").then((mod) => ({
    default: mod.DetailQuranPage,
  }))
);
const TafsirPage = lazy(() =>
  import("../features/tafsir/tafsirPage").then((mod) => ({
    default: mod.TafsirPage,
  }))
);

export const QuranPageWrapper = () => (
  <Suspense
    fallback={
      <section>
        <SurahPageHeader totalSurah={0} />
        <SurahFilterBar query="" onChange={() => {}} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </section>
    }
  >
    <QuranPage />
  </Suspense>
);

export const DetailQuranPageWrapper = () => (
  <Suspense
    fallback={
      <div className="space-y-8">
        <div className="rounded-3xl bg-linear-to-r from-emerald-600 via-teal-500 to-blue-600 px-8 py-10 text-white shadow-[0_20px_60px_rgba(6,95,70,0.35)]">
          <div className="animate-pulse bg-white/20 rounded h-4 w-20 mb-4"></div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="animate-pulse bg-white/20 rounded h-10 w-48 mb-2"></div>
              <div className="animate-pulse bg-white/20 rounded h-4 w-32 mb-4"></div>
              <div className="animate-pulse bg-white/20 rounded h-4 w-40"></div>
            </div>
            <div className="rounded-2xl bg-white/15 px-6 py-4 text-center">
              <div className="animate-pulse bg-white/20 rounded h-4 w-16 mb-2"></div>
              <div className="animate-pulse bg-white/20 rounded h-8 w-20"></div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonAyatCard key={i} />
          ))}
        </div>
      </div>
    }
  >
    <DetailQuranPage />
  </Suspense>
);

export const TafsirPageWrapper = () => (
  <Suspense
    fallback={
      <div className="space-y-8">
        <div className="rounded-3xl bg-linear-to-r from-purple-600 via-indigo-600 to-blue-600 px-8 py-10 text-white shadow-[0_20px_60px_rgba(79,70,229,0.35)]">
          <div className="animate-pulse bg-white/20 rounded h-4 w-12 mb-4"></div>
          <div className="animate-pulse bg-white/20 rounded h-10 w-48 mb-2"></div>
          <div className="animate-pulse bg-white/20 rounded h-4 w-32"></div>
        </div>
        <div className="space-y-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="rounded-3xl border border-slate-100 bg-white/95 px-6 py-6 shadow-lg shadow-indigo-50"
            >
              <div className="animate-pulse bg-indigo-200 rounded h-4 w-16 mb-4"></div>
              <SkeletonText lines={3} />
            </div>
          ))}
        </div>
      </div>
    }
  >
    <TafsirPage />
  </Suspense>
);

export const HomePageWrapper = () => (
  <Suspense
    fallback={
      <div className="space-y-16">
        {/* Hero skeleton */}
        <div className="rounded-3xl bg-linear-to-r from-emerald-600 via-teal-500 to-blue-600 px-8 py-16 text-white shadow-[0_20px_60px_rgba(6,95,70,0.35)] text-center">
          <div className="animate-pulse bg-white/20 rounded h-12 w-96 mx-auto mb-6"></div>
          <div className="animate-pulse bg-white/20 rounded h-6 w-64 mx-auto mb-8"></div>
          <div className="animate-pulse bg-white/20 rounded h-12 w-48 mx-auto"></div>
        </div>
        {/* About skeleton */}
        <div className="rounded-3xl bg-white/90 px-8 py-12 shadow-lg shadow-emerald-100">
          <div className="animate-pulse bg-gray-300 rounded h-8 w-48 mb-6"></div>
          <SkeletonText lines={4} className="mb-8" />
          <div className="animate-pulse bg-gray-300 rounded h-12 w-40"></div>
        </div>
        {/* QuranCard skeleton */}
        <div className="rounded-3xl bg-white/90 px-8 py-12 shadow-lg shadow-emerald-100 text-center">
          <div className="animate-pulse bg-gray-300 rounded h-8 w-56 mb-6"></div>
          <SkeletonText lines={2} className="mb-8" />
          <div className="animate-pulse bg-gray-300 rounded h-12 w-48 mx-auto"></div>
        </div>
      </div>
    }
  >
    <HomePage />
  </Suspense>
);
