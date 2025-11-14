import { motion } from "framer-motion";

const heroStats = [
  { label: "Surah", value: "114", sub: "Lengkap" },
  { label: "Audio", value: "30+", sub: "Qari" },
  { label: "Tafsir", value: "Juz 30", sub: "Komplit" },
];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-emerald-50 via-white to-cyan-50 px-4 py-8 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <p className="inline-flex items-center rounded-full bg-white/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Inspirasikan Tilawah Harian
          </p>
          <h1 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl lg:text-6xl">
            Temukan khusyuk
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-emerald-600 via-teal-500 to-blue-600">
              dengan Al-Quran Digital
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 sm:text-xl">
            Akses bacaan, tafsir, audio murottal, dan referensi penting lain
            dalam satu tempat yang cepat dan responsif.
          </p>
          <motion.div
            className="mt-8 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="#surah-list"
              className="inline-flex items-center justify-center rounded-2xl bg-linear-to-r from-emerald-600 via-teal-500 to-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-400/40 transition-transform hover:-translate-y-0.5"
            >
              Mulai Membaca
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-2xl border border-emerald-200/80 bg-white/80 px-8 py-3 text-base font-semibold text-emerald-600 shadow-inner shadow-white/60"
            >
              Eksplor Fitur
            </a>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 gap-3 rounded-2xl border border-white/60 bg-white/70 p-4 text-center shadow-lg shadow-emerald-200/50">
            {heroStats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-3xl font-bold text-slate-900">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-emerald-600">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-500">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto w-full max-w-md"
        >
          <div className="relative rounded-3xl border border-white/60 bg-white p-6 shadow-[0_20px_60px_rgba(15,118,110,0.15)]">
            <div className="rounded-2xl bg-slate-900/95 p-6 text-left text-white">
              <p className="text-sm text-emerald-200">Last Read</p>
              <p className="mt-2 text-2xl font-semibold">Surah Al-Mulk</p>
              <p className="text-sm text-white/70">Ayat 15-20</p>
              <div className="mt-6 space-y-4 text-sm text-white/70">
                <p>
                  هُوَ ٱلَّذِى جَعَلَ لَكُمُ ٱلۡأَرۡضَ ذَلُولً۬ا فَٱمۡشُواْ فِى
                  مَنَاكِبِهَا وَكُلُواْ مِن رِّزۡقِهِۦۖ وَإِلَيۡهِ ٱلنُّشُورُ
                </p>
                <p className="text-xs text-white/60">
                  Dia-lah yang menjadikan bumi untuk kamu yang mudah
                  dijelajahi...
                </p>
              </div>
              <button className="mt-6 w-full rounded-xl bg-white/15 py-2 text-sm font-semibold text-white backdrop-blur-lg">
                Lanjutkan Tilawah
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
