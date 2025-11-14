// src/features/tafsir/types.ts

// Represent one tafsir entry inside the API payload
export type TafsirItem = {
  ayat: number;
  teks: string;
};

// Convenience alias for the tafsir array
export type Tafsir = TafsirItem[];

export type TafsirSurahReference = {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
};

// The API returns a rich object that contains metadata + tafsir array
export type TafsirData = {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: Record<string, string>;
  tafsir: Tafsir;
  suratSelanjutnya: TafsirSurahReference | false;
  suratSebelumnya: TafsirSurahReference | false;
};

// Full API envelope
export type TafsirApiResponse = {
  code: number;
  message: string;
  data: TafsirData;
};