import { useAtom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

const menuIndexAtom = atomWithStorage(
  "NavbarMenus",
  0,
  createJSONStorage(() => localStorage)
);

export default function useMenuIndex() {
  return useAtom(menuIndexAtom);
}
