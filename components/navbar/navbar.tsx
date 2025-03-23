import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "../shadcn/mode-toggle";
import Search from "../search/search";
import { NavigationMenuDemo } from "../shadcn/navigation-menu/navigation-menu";

export default function Navbar() {
  return (
    <nav className="p-6 grid grid-cols-3 items-center">
      <Link href="/" className="font-bold text-4xl">
        Silverlog
      </Link>

      <div className="flex justify-center">
        <NavigationMenuDemo />
      </div>

      <div className="flex gap-5 items-center justify-end">
        <div className="flex gap-2">
          <Search />
          <ModeToggle />
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
