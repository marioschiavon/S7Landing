import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-5",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl",
            titleClassName
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p className="text-lg leading-relaxed text-white/55">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
