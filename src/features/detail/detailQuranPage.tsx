import { useParams } from "react-router-dom";
import { useGetDetailSurah } from "./useDetailQuran";
import { LoadingSpinner } from "../../components/shared/LoadingSpinner";
import { SurahDetailHeader } from "./components/SurahDetailHeader";
import { AyatCard } from "./components/AyatCard";
import { SurahNavigation } from "./components/SurahNavigation";

export function DetailQuranPage() {
  const { nomor } = useParams<{ nomor: string }>();
  const nomorInt = nomor ? parseInt(nomor, 10) : 0;
  const { data: detailSurah, error, isLoading } = useGetDetailSurah(nomorInt);

  if (isLoading) {
    return <LoadingSpinner fullscreen label="Memuat detail surah" />;
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
