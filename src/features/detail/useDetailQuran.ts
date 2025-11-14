import { fetchDetailSurah } from "./detailQuranApi";
import type { DetailSurah } from "./types";
import { useQuery } from "@tanstack/react-query";

export const useGetDetailSurah = (nomor: number) => {
  return useQuery<DetailSurah, Error>({
    queryKey: ["detailSurah", nomor],
    queryFn: () => fetchDetailSurah(nomor),
    enabled: !!nomor, // hanya fetch jika nomor ada
  });
};
