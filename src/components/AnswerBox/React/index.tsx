import useGetProducts, {
  useGetProduct,
  useGetProductByCategory,
} from "@/src/network/useGetProducts";
import Filter from "./components/Filter";
import { useMemo } from "react";
import Show from "../../Show";
import useFilter from "./components/Filter/filter.atom";

import "react-loading-skeleton/dist/skeleton.css";
import LoadingState from "./components/LoadingState";

export default function ReactSection() {
  const [filter] = useFilter();

  const {
    data: allProducts,
    error: isErrorAll,
    isLoading: isFetchingProducts,
  } = useGetProducts(21);

  const {
    data: searchedProduct,
    error: isErrorSearch,
    isLoading: isFetchingProduct,
  } = useGetProduct();
  const {
    data: productByCategory,
    error: isErrorCategory,
    isLoading: isFetchingCategory,
  } = useGetProductByCategory();

  const isFetching =
    isFetchingCategory || isFetchingProduct || isFetchingProducts;
  const isError = isErrorAll || isErrorCategory || isErrorSearch;

  const filteredData = useMemo(
    () => [
      ...[
        ...(searchedProduct?.products.filter((e) =>
          e.category.toLowerCase().includes(filter?.category.toLowerCase())
        ) || []),
        ...(productByCategory?.products?.filter((e) =>
          e.title.toLowerCase().includes(filter?.search.toLowerCase())
        ) || []),
      ],
    ],
    [
      filter?.category,
      filter?.search,
      productByCategory?.products,
      searchedProduct?.products,
    ]
  );

  const renderedData = useMemo(
    () =>
      filter?.category || filter?.search
        ? filteredData?.filter(
            (obj, index, self) =>
              index === self.findIndex((t) => t.id === obj.id)
          )
        : allProducts?.products,
    [filter, filteredData, allProducts]
  );

  return (
    <div className="flex flex-col aligns-center mt-10">
      <Filter />
      <Show when={isFetching}>
        <LoadingState />
      </Show>
      <Show when={isError}>
        <p>Maaf terjadi kesalahan</p>
      </Show>
      <Show when={!isError && !isFetching && !!renderedData?.length}>
        <div className="flex gap-4 flex-wrap">
          {renderedData?.map((product) => (
            <div
              key={product?.id}
              className="flex w-[320px] align-center bg-light-surface dark:bg-dark-surface p-4 rounded-md shadow-md dark:shadow-gray-700"
            >
              <img
                src={product?.images[0]}
                className="w-[100px] h-[100px] object-contain self-center rounded-xl"
                alt={product?.description}
              />
              <div className="flex flex-col ml-4">
                <p className="text-l">{product?.title}</p>
                <p className="text-xl">${product?.price}</p>
                <p className="text-md">{product?.category}</p>
              </div>
            </div>
          ))}
        </div>
      </Show>
      <Show when={!isError && !isFetching && !renderedData?.length}>
        <p>Maaf data kosong, silahkan mencari dengan kata kunci lain</p>
      </Show>
    </div>
  );
}
