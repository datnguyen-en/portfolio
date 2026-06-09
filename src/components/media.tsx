"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Renders a gradient backdrop with an optional image layered on top.
 * If the image is missing or fails to load, the gradient remains visible —
 * so the UI always looks intentional even before real assets are added.
 */
export function GradientMedia({
  gradient,
  image,
  alt = "",
  className,
  kenburns = false,
}: {
  gradient: string;
  image?: string;
  alt?: string;
  className?: string;
  kenburns?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br",
        gradient,
        className
      )}
    >
      {image && !failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            loaded ? "opacity-100" : "opacity-0",
            kenburns && "animate-kenburns"
          )}
        />
      )}
    </div>
  );
}
