import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-4 border p-4 rounded-xl bg-white shadow-sm">
      <Skeleton className="h-[180px] w-full rounded-xl bg-gray-200" />
      
      <div className="space-y-2">
        <Skeleton className="h-4 w-full bg-gray-200" />
        <Skeleton className="h-4 w-[80%] bg-gray-200" />
      </div>

      <div className="flex items-center justify-between pt-4">
        <Skeleton className="h-6 w-16 bg-gray-200" />
        <Skeleton className="h-9 w-24 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}