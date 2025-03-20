import { Skeleton } from "@/components/ui/skeleton";

interface ListSkeletonProps {
  width: number;
  height: number;
}

export default function ListSkeleton({ width, height }: ListSkeletonProps) {
  return (
    <div className="grid grid-cols-4 gap-5">
      {Array.from({ length: 20 }).map((_, index) => (
        <Skeleton
          key={index}
          className={`w-[${width}px] h-[${height}px] hover:border rounded-md`}
        />
      ))}
    </div>
  );
}
