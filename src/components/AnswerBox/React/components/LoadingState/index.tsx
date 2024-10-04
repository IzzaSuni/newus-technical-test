import Skeleton from "react-loading-skeleton";

export default function LoadingState() {
  return (
    <div className="flex gap-4 flex-wrap">
      {Array(12)
        .fill("")
        .map((e) => (
          <Skeleton key={e} width={330} height={132} baseColor="gray" />
        ))}
    </div>
  );
}
