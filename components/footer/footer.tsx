"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="flex justify-center items-center py-4 my-8">
      <p>
        &copy; {year} Silverlog. All rights reserved. Movie data from{" "}
        <Link href={"https://www.themoviedb.org"} className="hover:underline">
          TMDB
        </Link>
      </p>
    </footer>
  );
}
