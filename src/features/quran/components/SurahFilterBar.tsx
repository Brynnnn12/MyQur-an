import { motion } from "framer-motion";
import { memo, type ChangeEvent } from "react";

interface SurahFilterBarProps {
  query: string;
  onChange: (value: string) => void;
}

const SurahFilterBarView = ({ query, onChange }: SurahFilterBarProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <motion.div
      className="mt-8 rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-lg shadow-emerald-50"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <label className="block text-sm font-semibold text-slate-500">
        Cari Surah
      </label>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Ketik nama surah atau arti..."
        className="mt-2 w-full rounded-xl border border-slate-200 bg-white/60 px-4 py-3 text-sm text-slate-700 focus:border-emerald-400 focus:outline-none"
      />
    </motion.div>
  );
};

const MemoizedSurahFilterBar = memo(SurahFilterBarView);
MemoizedSurahFilterBar.displayName = "SurahFilterBar";

export const SurahFilterBar = (props: SurahFilterBarProps) => (
  <MemoizedSurahFilterBar {...props} />
);
