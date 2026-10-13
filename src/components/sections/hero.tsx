import type { CSSProperties } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { GlowOrb } from "@/components/ui/glow-orb";
import { HeroNetworkBackground } from "@/components/sections/hero-network-background";
import { siteConfig } from "@/lib/site-config";

// CSS-driven entrance so the hero paints before hydration (keeps LCP fast).
const delay = (seconds: number): CSSProperties => ({
  animationDelay: `${seconds}s`,
});

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-28 pb-20"
    >
      <div className="absolute inset-0 bg-dot-grid mask-fade-bottom opacity-40" />
      <GlowOrb variant="blue" className="-left-40 top-10 h-[28rem] w-[28rem] opacity-30" />
      <GlowOrb variant="green" className="-right-40 bottom-0 h-[30rem] w-[30rem] opacity-25" />
      <HeroNetworkBackground />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
          <div className="animate-fade-up">
            <Badge icon={<Sparkles size={14} className="text-accent-blue" />}>
              Software · Inteligência Artificial · Automação
            </Badge>
          </div>

          <h1
            style={delay(0.08)}
            className="animate-fade-up text-balance text-5xl font-bold leading-[1.08] tracking-tight text-white md:text-7xl"
          >
            Construímos software que{" "}
            <span className="text-gradient-brand">transforma negócios.</span>
          </h1>

          <p
            style={delay(0.16)}
            className="animate-fade-up max-w-2xl text-pretty text-lg leading-relaxed text-white/60 md:text-xl"
          >
            Desenvolvemos soluções digitais, automações inteligentes e
            produtos SaaS para empresas que querem crescer mais rápido.
          </p>

          <div
            style={delay(0.26)}
            className="animate-fade-up flex flex-col gap-4 pt-2 sm:flex-row"
          >
            <Button
              href={siteConfig.cta.contact.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              {siteConfig.cta.contact.label}
            </Button>
            <Button
              href={siteConfig.cta.projects.href}
              variant="outline"
              size="lg"
              icon={false}
            >
              {siteConfig.cta.projects.label}
            </Button>
          </div>
        </div>
      </Container>

      <div
        style={delay(0.8)}
        className="animate-fade-in absolute inset-x-0 bottom-8 hidden justify-center md:flex"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/15 p-1">
          <div className="animate-scroll-dot h-1.5 w-1.5 rounded-full bg-gradient-brand" />
        </div>
      </div>
    </section>
  );
}
