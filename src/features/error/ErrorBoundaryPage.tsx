import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import { motion } from "framer-motion";

export const ErrorBoundaryPage = () => {
  const error = useRouteError();
  const status = isRouteErrorResponse(error) ? error.status : 500;
  const statusText = isRouteErrorResponse(error)
    ? error.statusText
    : (error as Error)?.message ?? "Terjadi kesalahan";

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 py-24 text-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex w-full max-w-xl flex-col items-center rounded-3xl border border-white/15 bg-linear-to-br from-slate-900/80 via-slate-900/60 to-emerald-900/40 p-10 text-center shadow-[0_30px_60px_rgba(15,118,110,0.35)]"
      >
        <p className="text-sm uppercase tracking-[0.4em] text-emerald-300">
          Oops!
        </p>
        <h1 className="mt-4 text-5xl font-bold text-white">{status}</h1>
        <p className="mt-2 text-lg text-emerald-100">{statusText}</p>
        <p className="mt-6 text-sm text-white/70">
          Halaman yang Anda tuju tidak ditemukan atau sedang bermasalah. Silakan
          kembali ke beranda untuk melanjutkan.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-2xl bg-linear-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/40"
          >
            Kembali ke Beranda
          </Link>
          <Link
            to="/quran"
            className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/90"
          >
            Jelajahi Surah
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
