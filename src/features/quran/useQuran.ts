import { fetchAllSurah } from "./quranApi";
import type { Surah } from "./types";
import { useQuery } from "@tanstack/react-query";

export const useGetAllSurah = () => {
  return useQuery<Surah[], Error>({
    queryKey: ["allSurah"],
    queryFn: fetchAllSurah,
  });
};