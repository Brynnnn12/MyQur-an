import { motion } from "framer-motion";

interface TafsirHeaderProps {
  surahNumber: number;
  surahName?: string;
  totalAyat?: number;
  tempatTurun?: string;
}

export const TafsirHeader = ({
  surahNumber,
  surahName,
  totalAyat,
  tempatTurun,
}: TafsirHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl bg-linear-to-r from-purple-600 via-indigo-600 to-blue-600 px-8 py-10 text-white shadow-[0_20px_60px_rgba(79,70,229,0.35)]"
    >
      <p className="text-sm uppercase tracking-[0.4em] text-white/70">Tafsir</p>
      <h1 className="mt-4 text-4xl font-bold">
        Surah {surahNumber}
        {surahName ? ` · ${surahName}` : ""}
      </h1>
      {(totalAyat || tempatTurun) && (
        <p className="mt-1 text-sm font-medium text-white/80">
          {totalAyat ? `${totalAyat} ayat` : ""}
          {totalAyat && tempatTurun ? " • " : ""}
          {tempatTurun ? `Turun di ${tempatTurun}` : ""}
        </p>
      )}
      <p className="mt-2 text-white/80">
        Baca penjelasan ayat demi ayat untuk memperdalam pemahamanmu tentang
        makna Al-Quran.
      </p>
    </motion.div>
  );
};
