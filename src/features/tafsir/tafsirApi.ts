import api from "../../utils/api";
import type { TafsirData, TafsirApiResponse } from "./types";

export const fetchTafsir = async (nomor: number): Promise<TafsirData> => {
  const response = await api.get<TafsirApiResponse>(`/tafsir/${nomor}`);
  const result = response.data; // body dari API: { code, message, data }

  if (!result || result.code !== 200) {
    throw new Error("Gagal mengambil tafsir dari API Quran.");
  }

  return result.data;
};