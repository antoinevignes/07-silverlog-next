"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Movies</NavigationMenuTrigger>
          <NavigationMenuContent>
            <h3 className="pt-2 text-center font-bold text-lg">Movies</h3>
            <ul className="flex flex-col gap-2 text-center p-4 w-[200px]">
              <NavigationMenuLink asChild>
                <Link
                  href="/movies/popular"
                  className="text-sm font-medium leading-none"
                >
                  Popular
                </Link>
              </NavigationMenuLink>
              <Separator />
              <NavigationMenuLink asChild>
                <Link
                  href="/movies/top-rated"
                  className="text-sm font-medium leading-none"
                >
                  Top Rated
                </Link>
              </NavigationMenuLink>
              <Separator />
              <NavigationMenuLink asChild>
                <Link
                  href="/movies/upcoming"
                  className="text-sm font-medium leading-none"
                >
                  Upcoming
                </Link>
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>TV Shows</NavigationMenuTrigger>
          <NavigationMenuContent>
            <h3 className="pt-2 text-center font-bold text-lg">TV Shows</h3>
            <ul className="flex flex-col gap-2 text-center p-4 w-[200px]">
              <NavigationMenuLink asChild>
                <Link
                  href="/movies/popular"
                  className="text-sm font-medium leading-none"
                >
                  Popular
                </Link>
              </NavigationMenuLink>
              <Separator />
              <NavigationMenuLink asChild>
                <Link
                  href="/movies/top-rated"
                  className="text-sm font-medium leading-none"
                >
                  Top Rated
                </Link>
              </NavigationMenuLink>
              <Separator />
              <NavigationMenuLink asChild>
                <Link
                  href="/movies/upcoming"
                  className="text-sm font-medium leading-none"
                >
                  Upcoming
                </Link>
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
