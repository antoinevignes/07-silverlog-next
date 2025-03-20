import ListSkeleton from "@/components/shadcn/skeletons/list-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-[79vh] flex justify-center gap-10 mt-20">
      <div>
        <Skeleton className="h-8 w-[120px] mb-2" />
        <Skeleton className="h-12 w-[250px] mb-8" />
        <ListSkeleton width={130} height={190} />
      </div>
      <div className="mt-32">
        <Skeleton className="h-[450px] w-[300px] mb-2" />

        <Skeleton className="h-3 w-[300px] mb-1" />
        <Skeleton className="h-3 w-[300px] mb-1" />
        <Skeleton className="h-3 w-[300px] mb-1" />
        <Skeleton className="h-3 w-[300px] mb-1" />
        <Skeleton className="h-3 w-[200px] mb-1" />
        <Skeleton className="h-3 w-[100px]" />
      </div>
    </div>
  );
}
