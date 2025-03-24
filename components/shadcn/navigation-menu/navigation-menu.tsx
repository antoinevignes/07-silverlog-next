"use client";

import * as React from "react";
import Link from "next/link";

export function NavigationMenuComp() {
  return (
    <div className="flex gap-4">
      <Link
        href="/movies/popular"
        className="text-md font-medium leading-none hover:underline"
      >
        Popular
      </Link>
      <Link
        href="/movies/upcoming"
        className="text-md font-medium leading-none hover:underline"
      >
        Upcoming
      </Link>
      <Link
        href="/movies/top-rated"
        className="text-md font-medium leading-none hover:underline"
      >
        Top Rated
      </Link>
    </div>
  );
}
