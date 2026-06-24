import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md";
}

export function Logo({ className, iconOnly = false, size = "md" }: LogoProps) {
  const tile = size === "sm" ? "h-7" : "h-8";

  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <Image
        src="/s7-logo-mark.png"
        alt="S7"
        width={339}
        height={378}
        priority
        className={cn("w-auto shrink-0", tile)}
      />
      {!iconOnly && (
        <span className="text-[15px] font-semibold tracking-tight text-white">
          S7
        </span>
      )}
    </span>
  );
}
