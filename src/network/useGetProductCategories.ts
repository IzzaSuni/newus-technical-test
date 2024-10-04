import useSWR from "swr";
import request from "./request";

export default function useGetProductCategories() {
  return useSWR<string[]>("/categories", () =>
    request<string[]>({
      url: "https://dummyjson.com/products/category-list",
    })
  );
}
