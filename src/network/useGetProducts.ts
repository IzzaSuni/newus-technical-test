import useSWR from "swr";
import request from "./request";
import useFilter from "../components/AnswerBox/React/components/Filter/filter.atom";

export type TProducts = {
  products: {
    category: string;
    description: string;
    id: number;
    images: string[];
    thumbnail: string;
    price: number;
    rating: { rate: number; count: number };
    title: string;
  }[];
};

export function useGetProductByCategory() {
  const [filter] = useFilter();

  return useSWR(
    `/products/category/${filter?.category}`,
    filter?.category
      ? () =>
          request<TProducts>({
            url: `https://dummyjson.com/products/category/${filter?.category}`,
          })
      : null
  );
}

export function useGetProduct() {
  const [filter] = useFilter();

  return useSWR(
    `/products/search/${filter?.search}`,
    filter?.search
      ? () =>
          request<TProducts>({
            url: "https://dummyjson.com/products/search",
            params: { q: filter?.search },
          })
      : null
  );
}

export default function useGetProducts(limit = 10) {
  return useSWR("/products", () =>
    request<TProducts>({
      url: "https://dummyjson.com/products",
      params: { limit },
    })
  );
}
