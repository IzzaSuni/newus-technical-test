import classNames from "classnames";

type Props = {
  menu: string;
  isSelected: boolean;
  onClick: () => void;
};

export default function PilledItem({ menu, isSelected, onClick }: Props) {
  const cn = classNames(
    !isSelected && "hover:bg-light-surface hover:bg-opacity-50",
    isSelected &&
      "bg-dark-surface delay-100 dark:bg-light-surface bg-opacity-100 text-white dark:text-black bg-opacity-100"
  );

  return (
    <p
      className={`text-md cursor-pointer p-2 rounded-full transition-all duration-300 bg-opacity-0 ${cn}`}
      onClick={onClick}
    >
      {menu}
    </p>
  );
}
