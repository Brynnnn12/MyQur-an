import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaArrowLeft } from "react-icons/fa";

export const ErrorBoundaryPage = () => {
  const error = useRouteError();
  const status = isRouteErrorResponse(error) ? error.status : 500;

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      {/* Background decorative */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-12 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative text-center"
      >
        {/* Big Status Code */}
        <h1 className="text-[150px] sm:text-[200px] font-bold leading-none text-transparent bg-clip-text bg-linear-to-r from-emerald-600 via-teal-500 to-blue-600">
          {status}
        </h1>

        <p className="mt-2 text-xl text-slate-600 sm:text-2xl">
          {status === 404 ? "Halaman tidak ditemukan" : "Terjadi kesalahan"}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-200/80 bg-white/80 px-6 py-3 text-sm font-semibold text-emerald-600 transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <FaArrowLeft className="h-4 w-4" />
            Kembali
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-emerald-600 via-teal-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-400/40 transition-all hover:-translate-y-0.5"
          >
            <FaHome className="h-4 w-4" />
            Beranda
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
