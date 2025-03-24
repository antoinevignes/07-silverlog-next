import Link from "next/link";
import { ModeToggle } from "../shadcn/mode-toggle";
import Search from "../search/search";

import { Lusitana } from "next/font/google";
import { DropdownMenuDemo } from "../profile/avatar-dropdown";
import { NavigationMenuComp } from "../shadcn/navigation-menu/navigation-menu";

const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <nav className="p-6 grid grid-cols-3 items-center">
      <Link href="/" className={`${lusitana.className} font-bold text-5xl`}>
        Silverlog
      </Link>

      <div className="flex justify-center">
        <NavigationMenuComp />
      </div>

      <div className="flex gap-5 items-center justify-end">
        <div className="flex gap-2">
          <Search />
          <ModeToggle />
        </div>
        <DropdownMenuDemo />
      </div>
    </nav>
  );
}
