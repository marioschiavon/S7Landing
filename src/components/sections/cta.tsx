import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GlowOrb } from "@/components/ui/glow-orb";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";

export function Cta() {
  return (
    <section id="contato" className="relative py-28 md:py-36">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-base-dark/60 px-8 py-20 text-center md:px-16 md:py-28">
            <GlowOrb
              variant="blue"
              className="-left-20 -top-20 h-72 w-72 opacity-40"
            />
            <GlowOrb
              variant="green"
              className="-bottom-24 -right-20 h-80 w-80 opacity-35"
            />
            <div className="absolute inset-0 bg-dot-grid opacity-20" />

            <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-8">
              <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl">
                Vamos construir algo{" "}
                <span className="text-gradient-brand">extraordinário?</span>
              </h2>
              <p className="text-lg text-white/55 md:text-xl">
                Conte sua ideia. Nós cuidamos da estratégia, do produto e da
                execução.
              </p>
              <Button href={siteConfig.cta.final.href} variant="gradient" size="lg">
                {siteConfig.cta.final.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
