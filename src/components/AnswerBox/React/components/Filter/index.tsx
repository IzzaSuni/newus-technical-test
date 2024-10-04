import Input from "@/src/components/Input";
import Button from "../../../../Button";
import useGetProductCategories from "@/src/network/useGetProductCategories";
import AutoComplete from "@/src/components/Autocomplete";
import { FormEventHandler, useMemo } from "react";
import useFilter from "./filter.atom";

export default function Filter() {
  const [filter, setFilter] = useFilter();
  const { data, isLoading } = useGetProductCategories();

  const onSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const searchElement = form["search"] as HTMLInputElement;

    setFilter((v) => {
      v.search = searchElement?.value;
    });
  };

  const changeCategory = (opt: string) =>
    setFilter((v) => {
      v.category = opt;
    });

  const filteredCategory = useMemo(
    () =>
      data?.filter(
        (option) =>
          !filter?.category ||
          option.toLowerCase().includes(filter?.category.toLowerCase())
      ),
    [data, filter?.category]
  );

  return (
    <div className="flex justify-between mb-4 sticky top-0 bg-light-bg dark:bg-dark-bg pt-8 flex-col lg:flex-row gap-8">
      <form onSubmit={onSearch} className="flex w-full gap-4">
        <Input
          value={filter?.search}
          placeholder="Search Product"
          onReset={() =>
            setFilter((v) => {
              v.search = "";
            })
          }
          name="search"
          className="w-4/5 px-4 py-3 mr-auto"
        />
        <Button type="submit">Search</Button>
      </form>
      <AutoComplete
        options={filteredCategory}
        isLoading={isLoading}
        onClickOption={changeCategory}
        onChangeKey={changeCategory}
      />
    </div>
  );
}
