import { motion } from "framer-motion";
import type { TafsirItem as TafsirItemType } from "../types";

interface TafsirItemProps {
  item: TafsirItemType;
}

export const TafsirItem = ({ item }: TafsirItemProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-slate-100 bg-white/95 px-6 py-6 shadow-lg shadow-indigo-50"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-indigo-500">
        Ayat {item.ayat}
      </p>
      <div
        className="mt-4 text-sm leading-relaxed text-slate-600"
        dangerouslySetInnerHTML={{ __html: item.teks }}
      />
    </motion.li>
  );
};
