import { cn } from "@/lib/utils";

interface GlowOrbProps {
  className?: string;
  variant?: "blue" | "green";
}

export function GlowOrb({ className, variant = "blue" }: GlowOrbProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-[110px]",
        variant === "blue" ? "bg-accent-blue/25" : "bg-accent-green/25",
        className
      )}
    />
  );
}
