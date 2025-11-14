import { ClipLoader } from "react-spinners";
import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  label?: string;
  fullscreen?: boolean;
}

export const LoadingSpinner = ({
  label = "Memuat data...",
  fullscreen,
}: LoadingSpinnerProps) => {
  return (
    <div
      className={`flex w-full items-center justify-center ${
        fullscreen ? "min-h-[50vh]" : "py-12"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center gap-4 rounded-2xl border border-emerald-100 bg-white/80 px-8 py-6 shadow-xl shadow-emerald-500/20"
      >
        <ClipLoader size={48} color="#059669" speedMultiplier={0.8} />
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
          {label}
        </p>
      </motion.div>
    </div>
  );
};
