import { lazy, Suspense, type ComponentType } from "react";
import {
  SkeletonCard,
  SkeletonAyatCard,
  SkeletonTafsirItem,
  SkeletonDetailHeader,
  SkeletonTafsirHeader,
  SkeletonHeroSection,
  SkeletonContentSection,
} from "../components/shared/Skeleton";
import { SurahPageHeader } from "../features/quran/components/SurahPageHeader";
import { SurahFilterBar } from "../features/quran/components/SurahFilterBar";

// Constants
const SKELETON_COUNTS = {
  SURAH_CARDS: 12,
  AYAT_CARDS: 5,
  TAFSIR_ITEMS: 5,
} as const;

const DELAY = {
  HOME: 400,
  DEFAULT: 500,
} as const;

// Helper untuk menambahkan delay pada lazy loading
const lazyWithDelay = <T extends ComponentType<unknown>>(
  importFn: () => Promise<{ default: T }>,
  delay: number = DELAY.DEFAULT
) =>
  lazy(() =>
    Promise.all([
      importFn(),
      new Promise((resolve) => setTimeout(resolve, delay)),
    ]).then(([module]) => module)
  );

// Lazy loaded pages
const HomePage = lazyWithDelay(
  () => import("../pages/HomePage").then((mod) => ({ default: mod.HomePage })),
  DELAY.HOME
);

const QuranPage = lazyWithDelay(() =>
  import("../features/quran/quranPage").then((mod) => ({
    default: mod.QuranPage,
  }))
);

const DetailQuranPage = lazyWithDelay(() =>
  import("../features/detail/detailQuranPage").then((mod) => ({
    default: mod.DetailQuranPage,
  }))
);

const TafsirPage = lazyWithDelay(() =>
  import("../features/tafsir/tafsirPage").then((mod) => ({
    default: mod.TafsirPage,
  }))
);

// Skeleton Lists
const SkeletonCardList = ({ count }: { count: number }) => (
  <>
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </>
);

const SkeletonAyatList = ({ count }: { count: number }) => (
  <div className="space-y-6">
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonAyatCard key={i} />
    ))}
  </div>
);

const SkeletonTafsirList = ({ count }: { count: number }) => (
  <div className="space-y-6">
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonTafsirItem key={i} />
    ))}
  </div>
);

// Page Wrappers
export const QuranPageWrapper = () => (
  <Suspense
    fallback={
      <section>
        <SurahPageHeader totalSurah={0} />
        <SurahFilterBar query="" onChange={() => {}} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <SkeletonCardList count={SKELETON_COUNTS.SURAH_CARDS} />
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
        <SkeletonDetailHeader variant="emerald" />
        <SkeletonAyatList count={SKELETON_COUNTS.AYAT_CARDS} />
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
        <SkeletonTafsirHeader />
        <SkeletonTafsirList count={SKELETON_COUNTS.TAFSIR_ITEMS} />
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
        <SkeletonHeroSection />
        <SkeletonContentSection />
        <SkeletonContentSection centered />
      </div>
    }
  >
    <HomePage />
  </Suspense>
);
