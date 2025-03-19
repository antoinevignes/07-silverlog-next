"use client";

import { useState } from "react";

interface CollapsibleTextProps {
  text: string;
  maxLength?: number;
  className?: string;
}

export default function CollapsibleText({
  text,
  maxLength = 200,
  className = "",
}: CollapsibleTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldShowButton = text.length > maxLength;

  return (
    <div className={className}>
      <p>{isExpanded ? text : `${text.slice(0, maxLength)}...`}</p>
      {shouldShowButton && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 hover:underline text-neutral-400"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
}
