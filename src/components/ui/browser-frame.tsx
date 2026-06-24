import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BrowserFrameProps {
  children: ReactNode;
  className?: string;
}

export function BrowserFrame({ children, className }: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-white/10 bg-base-black/70",
        className
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-white/8 bg-white/[0.02] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <div className="ml-3 h-5 max-w-[55%] flex-1 rounded-full bg-white/5" />
      </div>
      <div className="relative p-5">{children}</div>
    </div>
  );
}
