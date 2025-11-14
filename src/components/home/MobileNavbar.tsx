import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

interface NavLinkItem {
  label: string;
  href: string;
  isAnchor?: boolean;
}

interface MobileNavbarProps {
  isOpen: boolean;
  links: NavLinkItem[];
  onNavigate: () => void;
}

export const MobileNavbar = ({
  isOpen,
  links,
  onNavigate,
}: MobileNavbarProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="md:hidden px-4"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="mt-3 rounded-2xl border border-white/25 bg-white shadow-xl shadow-emerald-500/10"
            initial={{ scale: 0.98 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.98 }}
          >
            <div className="flex flex-col divide-y divide-slate-100">
              {links.map((link) => (
                <div key={link.href} className="px-5 py-3">
                  {link.isAnchor ? (
                    <a
                      href={link.href}
                      onClick={onNavigate}
                      className="block text-base font-semibold text-slate-600 hover:text-emerald-600"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={onNavigate}
                      className="block text-base font-semibold text-slate-600 hover:text-emerald-600"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
