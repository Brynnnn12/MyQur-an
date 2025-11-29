import api from "../../utils/api";
import type { Surah, SurahApiResponse } from "./types";

export const fetchAllSurah = async (): Promise<Surah[]> => {
  const response = await api.get<SurahApiResponse>("/surat");
  const result = response.data;
  if (!result || result.code !== 200) {
    throw new Error("Gagal mengambil data Surah dari API Quran.");
  }

  return result.data;
};
