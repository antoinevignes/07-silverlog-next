"use client";

import { SearchIcon, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Search() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.delete("page");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`/search?${params.toString()}`);
  }, 300);

  const handleClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  };

  return (
    <div className="flex items-center gap-1">
      <Input
        placeholder="Search..."
        defaultValue={searchParams.get("query")?.toString()}
        className={`transition-all duration-300 ease-in-out ${
          isExpanded ? "w-60 opacity-100" : "w-0 opacity-0 p-0"
        }`}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        ref={(input) => {
          if (isExpanded && input) {
            input.focus();
          }
        }}
      />
      <Button variant={"ghost"} onClick={handleClick}>
        {isExpanded ? <X /> : <SearchIcon className="h-4 w-4" />}
      </Button>
    </div>
  );
}
