import { memo } from "react";
import type { Surah } from "../types";
import { SurahCard } from "./SurahCard";

interface SurahGridProps {
  surahList: Surah[];
}

const SurahGridComponent = ({ surahList }: SurahGridProps) => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {surahList.map((surah) => (
        <SurahCard key={surah.nomor} surah={surah} />
      ))}
    </div>
  );
};

export const SurahGrid = memo(SurahGridComponent);
SurahGrid.displayName = "SurahGrid";
