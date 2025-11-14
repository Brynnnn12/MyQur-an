import { fetchTafsir } from "./tafsirApi";
import type { TafsirData } from "./types";
import { useQuery } from "@tanstack/react-query";

export const useGetTafsir = (nomor: number) => {
  return useQuery<TafsirData, Error>({
    queryKey: ["tafsir", nomor],
    queryFn: () => fetchTafsir(nomor),
    enabled: !!nomor, // hanya fetch jika nomor ada
  });
};