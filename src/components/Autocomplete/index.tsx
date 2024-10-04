import { useEffect, useRef, useState } from "react";
import Input from "../Input";

export default function AutoComplete({
  options = [],
  isLoading,
  onClickOption,
  onChangeKey,
}: {
  options?: string[];
  isLoading: boolean;
  onClickOption: (opt: string) => void;
  onChangeKey: (key: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const optionsRef = useRef<HTMLDivElement | null>(null);

  const [focused, setFocused] = useState(false);

  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    setValue(inputValue);
    onChangeKey(inputValue);
  };

  useEffect(() => {
    const onMouseDownHandler = (e: MouseEvent) => {
      const isFocused = ![inputRef, optionsRef].every(
        (v) => v?.current && !v?.current?.contains(e.target as Node)
      );

      if (isFocused) return;

      setFocused(false);
    };

    document.addEventListener("click", onMouseDownHandler, true);

    return () => {
      document.removeEventListener("click", onMouseDownHandler, true);
    };
  }, [inputRef, optionsRef]);

  return (
    <div className="relative">
      <Input
        ref={inputRef}
        value={value}
        onChange={handleChange}
        placeholder={value || "Select Category"}
        className="px-4 py-2"
        onFocus={() => setFocused(true)}
        onReset={() => {
          setValue("");
          onChangeKey("");
        }}
      />

      {focused && (
        <div
          ref={optionsRef}
          className="absolute bg-dark-surface dark:bg-light-surface p-2 w-full flex flex-col gap-2 rounded-md top-[100%] max-h-[300px] overflow-auto z-20"
        >
          {options?.length > 0 ? (
            options?.map((option, index) => (
              <div
                key={index}
                onClick={() => {
                  setFocused(false);
                  setValue(option);
                  onClickOption(option);
                }}
                className="text-white dark:text-black cursor-pointer"
              >
                {option}
              </div>
            ))
          ) : (
            <div className="text-white dark:text-black cursor-pointer">
              {isLoading ? "Loading..." : "No data"}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
