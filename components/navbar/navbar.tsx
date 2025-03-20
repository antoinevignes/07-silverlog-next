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

export default function Navbar() {
  return (
    <nav className="p-4 grid grid-cols-3 items-center">
      <Link href="/" className="font-bold text-4xl">
        Silverlog
      </Link>

      <div className="flex justify-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Movies</NavigationMenuTrigger>

              <NavigationMenuContent>
                <Link href="/movies/popular" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Popular
                  </NavigationMenuLink>
                </Link>

                <Link href="/movies/top-rated" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Top Rated
                  </NavigationMenuLink>
                </Link>

                <Link href="/movies/upcoming" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Upcoming
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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
