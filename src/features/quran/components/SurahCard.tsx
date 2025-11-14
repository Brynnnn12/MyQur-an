import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Surah } from "../types";

interface SurahCardProps {
  surah: Surah;
}

const SurahCardComponent = ({ surah }: SurahCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      className="flex flex-col rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-lg shadow-emerald-100"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
            Surah {surah.nomor}
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-900">
            {surah.namaLatin}
          </h3>
          <p className="text-sm text-slate-500">{surah.arti}</p>
        </div>
        <div className="text-right">
          <p className="text-emerald-600 text-sm font-semibold">
            {surah.tempatTurun}
          </p>
          <p className="mt-1 text-3xl font-arabic text-slate-900" dir="rtl">
            {surah.nama}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between rounded-2xl bg-slate-50/80 px-4 py-3 text-sm font-semibold text-slate-600">
        <span>{surah.jumlahAyat} Ayat</span>
        <span>{surah.deskripsi?.slice(0, 36) ?? ""}...</span>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          to={`/detail/${surah.nomor}`}
          className="flex-1 rounded-2xl bg-linear-to-r from-emerald-600 to-teal-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-400/30"
        >
          Baca Surah
        </Link>
        <Link
          to={`/tafsir/${surah.nomor}`}
          className="flex-1 rounded-2xl border border-emerald-100 px-4 py-3 text-center text-sm font-semibold text-emerald-700"
        >
          Tafsir
        </Link>
      </div>
    </motion.div>
  );
};

export const SurahCard = memo(SurahCardComponent);
SurahCard.displayName = "SurahCard";
