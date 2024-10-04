import { useAtom } from "jotai";
import { atomWithImmer } from "jotai-immer";

const filterAtom = atomWithImmer({ search: "", category: "" });

export default function useFilter() {
  return useAtom(filterAtom);
}
