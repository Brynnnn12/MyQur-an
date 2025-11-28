import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useGetAllSurah } from "../../features/quran/useQuran";
import { SkeletonCard } from "../shared/Skeleton";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export const QuranCard = () => {
  const { data: allSurah, error, isLoading } = useGetAllSurah();

  if (isLoading) {
    return (
      <section
        id="surah-list"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Daftar Surah Al-Quran
            </h2>
            <p className="text-lg text-gray-600">
              Pilih surah yang ingin Anda baca
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="surah-list"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto rounded-2xl bg-red-50 px-6 py-10 text-center text-red-700">
          Terjadi kesalahan: {error.message}
        </div>
      </section>
    );
  }

  return (
    <section id="surah-list" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Daftar Surah Al-Quran
          </h2>
          <p className="text-lg text-gray-600">
            Pilih surah yang ingin Anda baca
          </p>
        </div>

        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          modules={[EffectCoverflow, Pagination, Autoplay]}
          coverflowEffect={{
            rotate: 0,
            stretch: 20,
            depth: 120,
            modifier: 2.5,
            slideShadows: false,
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1.1, spaceBetween: 12 },
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="pb-16"
        >
          {allSurah?.slice(0, 10).map((surah) => (
            <SwiperSlide key={surah.nomor}>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full">
                <div className="bg-linear-to-r from-emerald-600 to-blue-600 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-white">
                      <div className="text-2xl font-bold">{surah.nomor}</div>
                    </div>
                    <div className="text-right text-white">
                      <div className="text-2xl font-arabic mb-1">
                        {surah.nama}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {surah.namaLatin}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{surah.arti}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{surah.jumlahAyat} Ayat</span>
                    <span>{surah.tempatTurun}</span>
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <Link
                      to={`/detail/${surah.nomor}`}
                      className="flex-1 bg-linear-to-r from-emerald-600 to-blue-600 text-white text-center py-2 rounded-lg hover:from-emerald-700 hover:to-blue-700 transition-all font-medium"
                    >
                      Baca
                    </Link>
                    <Link
                      to={`/tafsir/${surah.nomor}`}
                      className="flex-1 border-2 border-emerald-600 text-emerald-600 text-center py-2 rounded-lg hover:bg-emerald-50 transition-all font-medium"
                    >
                      Tafsir
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-8">
          <Link
            to="/quran"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-all font-medium"
          >
            Lihat Semua Surah
          </Link>
        </div>
      </div>
    </section>
  );
};
