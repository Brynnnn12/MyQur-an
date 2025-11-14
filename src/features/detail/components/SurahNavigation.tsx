import { Link } from "react-router-dom";
import type { DetailSurah } from "../types";

interface SurahNavigationProps {
  detail: DetailSurah;
}

export const SurahNavigation = ({ detail }: SurahNavigationProps) => {
  const prevLink = detail.suratSebelumnya
    ? `/detail/${detail.suratSebelumnya.nomor}`
    : "#";
  const nextLink = detail.suratSelanjutnya
    ? `/detail/${detail.suratSelanjutnya.nomor}`
    : "#";

  const prevClass = detail.suratSebelumnya
    ? "border-emerald-100 text-emerald-700 hover:border-emerald-300"
    : "pointer-events-none border-slate-100 text-slate-400";
  const nextClass = detail.suratSelanjutnya
    ? "border-emerald-100 text-emerald-700 hover:border-emerald-300"
    : "pointer-events-none border-slate-100 text-slate-400";

  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Link
        to={prevLink}
        className={`rounded-2xl border px-5 py-4 text-left ${prevClass}`}
      >
        <p className="text-xs uppercase tracking-[0.3em]">Sebelumnya</p>
        <p className="text-lg font-semibold">
          {detail.suratSebelumnya
            ? detail.suratSebelumnya.namaLatin
            : "Tidak ada"}
        </p>
      </Link>
      <Link
        to={nextLink}
        className={`rounded-2xl border px-5 py-4 text-right ${nextClass}`}
      >
        <p className="text-xs uppercase tracking-[0.3em]">Selanjutnya</p>
        <p className="text-lg font-semibold">
          {detail.suratSelanjutnya
            ? detail.suratSelanjutnya.namaLatin
            : "Tidak ada"}
        </p>
      </Link>
    </div>
  );
};
