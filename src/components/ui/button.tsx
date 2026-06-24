import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "gradient" | "outline" | "ghost";
type Size = "md" | "lg";

const baseClasses =
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/60 focus-visible:ring-offset-2 focus-visible:ring-offset-base-black";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-white text-black hover:-translate-y-0.5 hover:shadow-glow-blue",
  gradient:
    "bg-gradient-brand text-white hover:-translate-y-0.5 hover:brightness-110 shadow-glow-blue",
  outline:
    "glass text-white hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06]",
  ghost: "text-white/70 hover:text-white",
};

const sizeClasses: Record<Size, string> = {
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-[15px]",
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
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {children}
      {icon && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
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
