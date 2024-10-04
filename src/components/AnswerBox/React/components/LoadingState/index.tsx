import Skeleton from "react-loading-skeleton";

export default function LoadingState() {
  return (
    <div className="flex gap-4 flex-wrap">
      {Array(12)
        .fill("")
        .map((e) => (
          <Skeleton
            containerClassName="w-full lg:w-[320px]"
            height={132}
            key={e}
            baseColor="gray"
          />
        ))}
    </div>
  );
}
