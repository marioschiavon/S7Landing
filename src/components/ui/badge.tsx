import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Badge({ icon, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/80",
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
}
