"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/ui/social-links";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

const EASE = [0.32, 0.72, 0, 1] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("resize", close);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", close);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:pt-5">
      {/* Full-screen mobile overlay — rendered first so the pill stays on top */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 bg-black/85 backdrop-blur-3xl md:hidden"
          >
            <nav className="flex h-full flex-col justify-center gap-2 px-8">
              {siteConfig.nav.map((item, i) => (
                <div key={item.href} className="overflow-hidden">
                  <motion.a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ y: 48, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.08 + i * 0.06, ease: EASE }}
                    className="block py-2 text-4xl font-semibold tracking-tight text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </motion.a>
                </div>
              ))}
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
                className="mt-10 flex flex-col gap-8"
              >
                <Button
                  href={siteConfig.cta.contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                  className="w-full justify-between"
                  onClick={() => setOpen(false)}
                >
                  {siteConfig.cta.contact.label}
                </Button>
                <SocialLinks onNavigate={() => setOpen(false)} />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={cn(
          "relative mx-auto flex max-w-5xl items-center justify-between rounded-full border py-2 pl-5 pr-2 transition-[background-color,border-color,box-shadow] duration-500",
          scrolled || open
            ? "glass-strong border-white/10 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.9)]"
            : "border-white/[0.06] bg-white/[0.02] backdrop-blur-md"
        )}
      >
        <a href="#top" aria-label={`${siteConfig.name} — início`}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/60 transition-colors hover:bg-white/[0.05] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            href={siteConfig.cta.contact.href}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="md"
            className="h-10 pl-5 text-[13px]"
          >
            {siteConfig.cta.contact.label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-11 w-11 items-center justify-center rounded-full md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
        >
          <span
            className={cn(
              "absolute h-[1.5px] w-5 rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
              open ? "rotate-45" : "-translate-y-[4px]"
            )}
          />
          <span
            className={cn(
              "absolute h-[1.5px] w-5 rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
              open ? "-rotate-45" : "translate-y-[4px]"
            )}
          />
        </button>
      </div>
    </header>
  );
}
