import { twMerge } from "tailwind-merge";

export function Separator({ className }: { className?: string }) {
  return <div className={twMerge("mx-1 h-4 w-px bg-neutral-800", className)} />;
}
