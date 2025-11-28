import { useParams } from "react-router-dom";
import { useGetTafsir } from "./useTafsir";
import { SkeletonText } from "../../components/shared/Skeleton";
import { TafsirHeader } from "./components/TafsirHeader";
import { TafsirItem } from "./components/TafsirItem";

export function TafsirPage() {
  const { nomor } = useParams<{ nomor: string }>();
  const nomorInt = nomor ? parseInt(nomor, 10) : 0;
  const { data: tafsirData, error, isLoading } = useGetTafsir(nomorInt);

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="rounded-3xl bg-linear-to-r from-purple-600 via-indigo-600 to-blue-600 px-8 py-10 text-white shadow-[0_20px_60px_rgba(79,70,229,0.35)]">
          <div className="animate-pulse bg-white/20 rounded h-4 w-12 mb-4"></div>
          <div className="animate-pulse bg-white/20 rounded h-10 w-48 mb-2"></div>
          <div className="animate-pulse bg-white/20 rounded h-4 w-32"></div>
        </div>
        <div className="space-y-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="rounded-3xl border border-slate-100 bg-white/95 px-6 py-6 shadow-lg shadow-indigo-50">
              <div className="animate-pulse bg-indigo-200 rounded h-4 w-16 mb-4"></div>
              <SkeletonText lines={3} />
            </div>
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

  if (!tafsirData || tafsirData.tafsir.length === 0) {
    return (
      <div className="rounded-3xl bg-yellow-50 px-6 py-10 text-center text-yellow-700">
        Tafsir tidak ditemukan.
      </div>
    );
  }

  return (
    <section>
      <TafsirHeader
        surahNumber={tafsirData.nomor}
        surahName={tafsirData.namaLatin}
        totalAyat={tafsirData.jumlahAyat}
        tempatTurun={tafsirData.tempatTurun}
      />
      <ul className="mt-10 space-y-6">
        {tafsirData.tafsir.map((item) => (
          <TafsirItem key={item.ayat} item={item} />
        ))}
      </ul>
    </section>
  );
}
