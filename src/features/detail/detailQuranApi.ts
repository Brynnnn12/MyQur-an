import api from "../../utils/api";
import type { DetailSurah, DetailSurahApiResponse } from "./types";

export const fetchDetailSurah = async (nomor: number): Promise<DetailSurah> => {
  const response = await api.get<DetailSurahApiResponse>(`/surat/${nomor}`);
  const result = response.data; // body dari API: { code, message, data }

  if (!result || result.code !== 200) {
    throw new Error("Gagal mengambil detail Surah dari API Quran.");
  }

  return result.data;
};
