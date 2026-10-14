import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "gradient" | "outline" | "ghost";
type Size = "md" | "lg";

const baseClasses =
  "group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full font-semibold transition-[transform,box-shadow,background-color,border-color,filter] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/60 focus-visible:ring-offset-2 focus-visible:ring-offset-base-black";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-white text-black shadow-[inset_0_-2px_0_rgba(0,0,0,0.08)] hover:shadow-glow-blue",
  gradient:
    "bg-gradient-brand text-white shadow-glow-blue hover:brightness-110",
  outline:
    "glass text-white hover:border-white/25 hover:bg-white/[0.06]",
  ghost: "text-white/70 hover:text-white",
};

// Trailing icon lives in its own circular "island" inside the pill.
const iconWrapClasses: Record<Variant, string> = {
  primary: "bg-black/[0.07] text-black",
  gradient: "bg-white/20 text-white",
  outline: "bg-white/10 text-white",
  ghost: "bg-white/10 text-white",
};

const sizeClasses: Record<Size, { plain: string; icon: string; wrap: string }> = {
  md: { plain: "h-12 px-6 text-sm", icon: "h-12 pl-6 pr-2 text-sm", wrap: "h-8 w-8" },
  lg: { plain: "h-14 px-8 text-[15px]", icon: "h-14 pl-8 pr-2.5 text-[15px]", wrap: "h-9 w-9" },
};

interface SharedProps {
  variant?: Variant;
  size?: Size;
  icon?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonAsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({
  variant = "primary",
  size = "md",
  icon = true,
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    icon ? sizeClasses[size].icon : sizeClasses[size].plain,
    className
  );

  const content = (
    <>
      {children}
      {icon && (
        <span
          className={cn(
            "flex shrink-0 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:scale-105",
            sizeClasses[size].wrap,
            iconWrapClasses[variant]
          )}
        >
          <ArrowUpRight size={16} strokeWidth={1.75} />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
