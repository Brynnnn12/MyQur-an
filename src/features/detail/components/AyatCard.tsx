import { motion } from "framer-motion";
import type { Ayat } from "../types";

interface AyatCardProps {
  ayat: Ayat;
}

export const AyatCard = ({ ayat }: AyatCardProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-slate-100 bg-white/90 px-6 py-6 shadow-lg shadow-emerald-50"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
          Ayat {ayat.nomorAyat}
        </p>
        <div className="rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold text-emerald-600">
          Audio
        </div>
      </div>
      <p
        className="mt-4 text-right text-3xl font-arabic leading-relaxed text-slate-900"
        dir="rtl"
      >
        {ayat.teksArab}
      </p>
      <p className="mt-4 text-base italic text-slate-500">{ayat.teksLatin}</p>
      <p className="mt-2 text-sm text-slate-600">{ayat.teksIndonesia}</p>
      <audio controls src={ayat.audio["05"]} className="mt-5 w-full">
        Browser tidak mendukung audio.
      </audio>
    </motion.li>
  );
};
