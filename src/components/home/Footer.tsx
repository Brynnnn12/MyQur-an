import { FaGithub, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaEnvelope, href: "mailto:info@myquran.com", label: "Email" },
];

const Footer = () => {
  return (
    <motion.footer
      className="relative mt-20 overflow-hidden rounded-t-3xl bg-slate-950 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.25),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-400">
              MyQuran
            </p>
            <h3 className="mt-3 text-3xl font-bold">Tilawah lebih bermakna</h3>
            <p className="mt-4 text-sm text-slate-300">
              Kurasi fitur terbaik untuk menemani ibadah harianmu: dari hafalan,
              tadabbur, hingga berbagi inspirasi.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 p-2 text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                  Navigasi
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li>
                    <Link to="/" className="transition hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#surah-list"
                      className="transition hover:text-white"
                    >
                      Daftar Surah
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="transition hover:text-white">
                      Tentang Kami
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                  Fitur
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li>Audio Qari</li>
                  <li>Tafsir Tematik</li>
                  <li>Bookmark & Catatan</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                  Kontak
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li>info@myquran.com</li>
                  <li>support@myquran.com</li>
                  <li>+62 812-3456-7890</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} MyQuran. Dibangun dengan ketenangan
            hati.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
