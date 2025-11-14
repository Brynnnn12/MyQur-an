import { useParams } from "react-router-dom";
import { useGetTafsir } from "./useTafsir";
import { LoadingSpinner } from "../../components/shared/LoadingSpinner";
import { TafsirHeader } from "./components/TafsirHeader";
import { TafsirItem } from "./components/TafsirItem";

export function TafsirPage() {
  const { nomor } = useParams<{ nomor: string }>();
  const nomorInt = nomor ? parseInt(nomor, 10) : 0;
  const { data: tafsirData, error, isLoading } = useGetTafsir(nomorInt);

  if (isLoading) {
    return <LoadingSpinner fullscreen label="Memuat tafsir" />;
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
