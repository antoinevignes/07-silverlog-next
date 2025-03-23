import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[84vh]">
      <h2 className="text-2xl font-bold">404 - Page Not Found</h2>
      <Button>
        <Link href={"/"}>Go Back</Link>
      </Button>
    </div>
  );
}
