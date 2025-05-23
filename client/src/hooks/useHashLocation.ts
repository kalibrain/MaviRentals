import { useState, useEffect } from "react";
import type { Hook } from "wouter";

export const useHashLocation: Hook = () => {
  const [loc, setLoc] = useState(() => window.location.hash.replace(/^#/, "") || "/");

  useEffect(() => {
    const handler = () => setLoc(window.location.hash.replace(/^#/, "") || "/");
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  return [
    loc,
    (to: string) => {
      window.location.hash = to;
    },
  ];
}; 