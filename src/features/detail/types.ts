// src/features/detail/types.ts

import type { AudioFull, Surah } from "../quran/types";

// Tipe untuk satu Ayat
export type Ayat = {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
  audio: AudioFull;
};

// Tipe untuk detail Surah
export type DetailSurah = {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: AudioFull;
  ayat: Ayat[];
  suratSelanjutnya: Surah | false;
  suratSebelumnya: Surah | false;
};

// Tipe untuk respons API detail Surah
export type DetailSurahApiResponse = {
  code: number;
  message: string;
  data: DetailSurah;
};
