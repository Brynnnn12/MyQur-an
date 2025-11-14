import { motion } from "framer-motion";
import type { DetailSurah } from "../types";

interface SurahDetailHeaderProps {
  detail: DetailSurah;
}

export const SurahDetailHeader = ({ detail }: SurahDetailHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl bg-linear-to-r from-emerald-600 via-teal-500 to-blue-600 px-8 py-10 text-white shadow-[0_20px_60px_rgba(6,95,70,0.35)]"
    >
      <p className="text-sm uppercase tracking-[0.4em] text-white/70">
        Surah {detail.nomor}
      </p>
      <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            {detail.namaLatin}
            <span className="ml-3 text-white/70 text-3xl">({detail.nama})</span>
          </h1>
          <p className="mt-2 text-white/80">{detail.arti}</p>
          <p className="mt-4 text-sm text-white/70">
            {detail.tempatTurun} • {detail.jumlahAyat} ayat
          </p>
        </div>
        <div className="rounded-2xl bg-white/15 px-6 py-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
            Audio
          </p>
          <audio controls src={detail.audioFull["05"]} className="mt-3 w-56">
            Browser tidak mendukung audio.
          </audio>
        </div>
      </div>
    </motion.div>
  );
};
