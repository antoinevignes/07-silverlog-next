import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <div className="flex justify-center items-center gap-10 h-full ">
          <Skeleton className="w-[400px] h-[600px]" />
          <div className="flex flex-col gap-4 max-w-[50vw]">
            <Skeleton className="h-15 w-[500px]" />
            <Skeleton className="h-50 w-[600px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
