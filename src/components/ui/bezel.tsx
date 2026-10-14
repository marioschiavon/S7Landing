import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BezelProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  spotlight?: boolean;
}

/** Double-bezel card: outer hairline tray + inner glass core with concentric radius. */
export function Bezel({
  children,
  className,
  innerClassName,
  spotlight = true,
}: BezelProps) {
  return (
    <div
      data-spotlight={spotlight || undefined}
      className={cn("bezel-shell group h-full rounded-[2rem] p-1.5", className)}
    >
      <div
        className={cn(
          "bezel-core relative h-full overflow-hidden rounded-[calc(2rem-0.375rem)]",
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
