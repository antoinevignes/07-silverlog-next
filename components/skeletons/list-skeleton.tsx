import { Skeleton } from "../ui/skeleton";

export default function ListSkeleton() {
  return (
    <div className="grid grid-cols-4 gap-5">
      {Array.from({ length: 20 }).map((_, index) => (
        <Skeleton
          key={index}
          className="w-[200px] h-[300px] hover:border rounded-md"
        />
      ))}
    </div>
  );
}
