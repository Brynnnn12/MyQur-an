import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import { motion } from "framer-motion";
import errorIllustration from "../../assets/error.gif";

export const ErrorBoundaryPage = () => {
  const error = useRouteError();
  const status = isRouteErrorResponse(error) ? error.status : 500;
  const statusText = isRouteErrorResponse(error)
    ? error.statusText
    : (error as Error)?.message ?? "Terjadi kesalahan";

  return (
    <motion.section
      className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex w-full max-w-6xl flex-col items-center gap-10 text-center lg:grid lg:grid-cols-[1.1fr_auto_1fr] lg:items-center lg:gap-14 lg:text-left">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-500">
            Kamu tersesat?
          </p>
          <h1 className="text-4xl font-bold text-slate-900">
            "Maka ingatlah Allah sebanyak-banyaknya agar kamu mendapat petunjuk"
          </h1>
          <p className="text-base text-slate-600">
            Jika langkahmu terhenti di tengah halaman, mari kembali menapaki
            ayat-Nya.
          </p>
        </motion.div>

        <motion.img
          src={errorIllustration}
          alt="Ilustrasi orang berjalan"
          className="h-56 w-56 sm:h-72 sm:w-72"
          initial={{ scale: 0.85, rotate: -4, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl border border-slate-200 bg-white/95 px-8 py-10 text-slate-900 shadow-[0_30px_80px_rgba(15,118,110,0.12)] backdrop-blur"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-500">
            Error {status}
          </p>
          <p className="mt-3 text-base text-slate-600">
            {statusText ||
              "Halaman yang kamu tuju tidak ditemukan. Seperti musafir yang tersesat, kembalilah kepada Tuhanmu lewat ayat-ayat-Nya."}
          </p>

          <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/70 px-5 py-4 text-sm text-emerald-900">
            "Dan apabila kamu tersesat, maka kembalilah kepada Allah dan
            Rasul-Nya" (Q.S. An-Nisa: 59)
          </div>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                to="/"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-linear-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/40"
              >
                Kembali ke Beranda
              </Link>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                to="/quran"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-emerald-100 bg-white px-6 py-3 text-sm font-semibold text-emerald-700"
              >
                Jelajahi Surah
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
