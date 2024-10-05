import useTheme, { Theme } from "@/src/hooks/useTheme";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ForwardedRef, forwardRef } from "react";

type InputProps = JSX.IntrinsicElements["input"] & {
  onReset?: () => void;
  value?: string;
};
const Input = forwardRef(
  (
    { className, onReset, value, ...rest }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const showReset = !!onReset && !!value;
    const { theme } = useTheme();

    return (
      <div className="relative w-full">
        <input
          ref={ref}
          className={`w-full rounded-xl bg-light-surface dark:bg-dark-surface text-black dark:text-white border border-dark-bg dark:border-light-bg pr-8 ${className}`}
          {...rest}
        />
        {showReset && (
          <FontAwesomeIcon
            onClick={onReset}
            icon={faClose}
            color={theme == Theme.light ? "black" : "white"}
            className="absolute right-3 top-1/3 cursor-pointer"
          />
        )}
      </div>
    );
  }
);

export default Input;
