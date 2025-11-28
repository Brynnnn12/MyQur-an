import { useParams } from "react-router-dom";
import { useGetDetailSurah } from "./useDetailQuran";
import { SkeletonAyatCard } from "../../components/shared/Skeleton";
import { SurahDetailHeader } from "./components/SurahDetailHeader";
import { AyatCard } from "./components/AyatCard";
import { SurahNavigation } from "./components/SurahNavigation";

export function DetailQuranPage() {
  const { nomor } = useParams<{ nomor: string }>();
  const nomorInt = nomor ? parseInt(nomor, 10) : 0;
  const { data: detailSurah, error, isLoading } = useGetDetailSurah(nomorInt);

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="rounded-3xl bg-linear-to-r from-emerald-600 via-teal-500 to-blue-600 px-8 py-10 text-white shadow-[0_20px_60px_rgba(6,95,70,0.35)]">
          <div className="animate-pulse bg-white/20 rounded h-4 w-20 mb-4"></div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="animate-pulse bg-white/20 rounded h-10 w-48 mb-2"></div>
              <div className="animate-pulse bg-white/20 rounded h-4 w-32 mb-4"></div>
              <div className="animate-pulse bg-white/20 rounded h-4 w-40"></div>
            </div>
            <div className="rounded-2xl bg-white/15 px-6 py-4 text-center">
              <div className="animate-pulse bg-white/20 rounded h-4 w-16 mb-2"></div>
              <div className="animate-pulse bg-white/20 rounded h-8 w-20"></div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonAyatCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-3xl bg-red-50 px-6 py-10 text-center text-red-700">
        Terjadi kesalahan: {error.message}
      </div>
    );
  }

  if (!detailSurah) {
    return (
      <div className="rounded-3xl bg-yellow-50 px-6 py-10 text-center text-yellow-700">
        Surah tidak ditemukan.
      </div>
    );
  }

  return (
    <section>
      <SurahDetailHeader detail={detailSurah} />
      <div className="mt-10 rounded-3xl border border-slate-100 bg-white/90 p-8 text-slate-600 shadow-lg shadow-emerald-50">
        <div
          className="leading-relaxed"
          dangerouslySetInnerHTML={{ __html: detailSurah.deskripsi }}
        />
      </div>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900">Ayat</h2>
      <ul className="mt-6 space-y-6">
        {detailSurah.ayat.map((ayat) => (
          <AyatCard key={ayat.nomorAyat} ayat={ayat} />
        ))}
      </ul>

      <SurahNavigation detail={detailSurah} />
    </section>
  );
}
