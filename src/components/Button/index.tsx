export default function Button({
  children,
  className,
  ...rest
}: JSX.IntrinsicElements["button"]) {
  return (
    <button
      className={`bg-dark-surface dark:bg-light-surface text-white dark:text-black ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
