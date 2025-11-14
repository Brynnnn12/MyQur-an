// src/features/quran/types.ts

// Tipe untuk objek audioFull
export type AudioFull = {
  "01": string;
  "02": string;
  "03": string;
  "04": string;
  "05": string;
};

// Tipe untuk satu Surah
export type Surah = {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: AudioFull;
};

// Tipe untuk respons API secara keseluruhan
export type SurahApiResponse = {
  code: number;
  message: string;
  data: Surah[]; // Data adalah sebuah array dari Surah
};
