"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

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
    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "glass-strong py-3.5"
          : "border-b border-transparent bg-transparent py-6"
      )}
    >
      <div className="mx-auto flex w-full max-w-[88rem] items-center justify-between px-6 md:px-10">
        <a href="#top" className="relative z-10" aria-label={`${siteConfig.name} — início`}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={siteConfig.cta.secondary.href} variant="outline" size="md" icon={false}>
            {siteConfig.cta.secondary.label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-white md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/8 bg-base-black md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <Button
                href={siteConfig.cta.secondary.href}
                variant="outline"
                className="mt-3 w-full"
                icon={false}
                onClick={() => setOpen(false)}
              >
                {siteConfig.cta.secondary.label}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
