import ListSkeleton from "@/components/shadcn/skeletons/list-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col items-center mt-10 gap-10 min-h-[82vh]">
      <Skeleton className="h-12 w-60" />
      <ListSkeleton width={200} height={300} />
      <Skeleton className="h-12 w-80" />
    </div>
  );
}
