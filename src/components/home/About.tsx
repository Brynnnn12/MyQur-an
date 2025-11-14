import { FaBook, FaHeadphones, FaLanguage, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaBook className="h-6 w-6" />,
    title: "114 Surah Lengkap",
    description:
      "Akses semua surah dengan teks Arab, latin, serta terjemahan Indonesia yang akurat",
    accent: "from-emerald-200/80 to-emerald-100/40",
  },
  {
    icon: <FaHeadphones className="h-6 w-6" />,
    title: "Audio Murottal",
    description:
      "Streaming pilihan qari terkenal dunia dengan kualitas audio tinggi",
    accent: "from-cyan-200/80 to-cyan-100/30",
  },
  {
    icon: <FaLanguage className="h-6 w-6" />,
    title: "Tafsir Kontekstual",
    description:
      "Permudah pemahaman ayat melalui tafsir terpercaya dalam bahasa Indonesia",
    accent: "from-blue-200/70 to-blue-100/30",
  },
  {
    icon: <FaMobileAlt className="h-6 w-6" />,
    title: "Experience Responsif",
    description:
      "Optimasi UI untuk desktop, tablet, dan smartphone tanpa kompromi",
    accent: "from-purple-200/60 to-purple-100/30",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <motion.p
          className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Semua dalam satu aplikasi
        </motion.p>
        <motion.h2
          className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tentang MyQuran
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-slate-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Platform modern untuk menemani perjalanan spiritualmu. Dari tilawah
          harian hingga pendalaman tafsir.
        </motion.p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className={`rounded-2xl border border-white/70 bg-white/90 p-6 shadow-lg shadow-emerald-200/40 backdrop-blur-xl bg-linear-to-br ${feature.accent}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="mb-5 inline-flex rounded-2xl bg-white/70 p-3 text-emerald-600 shadow-inner shadow-white/60">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
