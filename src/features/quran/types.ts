// src/features/quran/types.ts

// Interface untuk objek audioFull
export interface AudioFull {
  "01": string;
  "02": string;
  "03": string;
  "04": string;
  "05": string;
}

// Interface untuk satu Surah
export interface Surah {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: AudioFull;
}

// Interface untuk respons API secara keseluruhan
export interface SurahApiResponse {
  code: number;
  message: string;
  data: Surah[];
}
