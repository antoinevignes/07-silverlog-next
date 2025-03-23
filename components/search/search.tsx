"use client";

import { Suspense } from "react";
import ClientSearch from "./client-search";

export default function Search() {
  return (
    <Suspense>
      <ClientSearch />
    </Suspense>
  );
}
