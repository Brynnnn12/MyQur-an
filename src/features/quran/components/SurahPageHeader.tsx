import { motion } from "framer-motion";

interface SurahPageHeaderProps {
  totalSurah: number;
}

export const SurahPageHeader = ({ totalSurah }: SurahPageHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl bg-linear-to-r from-emerald-600 via-teal-500 to-blue-600 px-8 py-10 text-white shadow-[0_20px_60px_rgba(6,95,70,0.35)]"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70">
        Koleksi Surah Lengkap
      </p>
      <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-4xl font-bold">Daftar Surah</h1>
          <p className="mt-2 max-w-xl text-white/80">
            Jelajahi bacaan setiap surah lengkap dengan arti, jumlah ayat, audio
            murottal, dan tautan cepat ke tafsir.
          </p>
        </div>
        <div className="rounded-2xl bg-white/15 px-6 py-4 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">
            Jumlah Surah
          </p>
          <p className="text-4xl font-bold">{totalSurah}</p>
        </div>
      </div>
    </motion.div>
  );
};
