import { Container } from "@/components/ui/container";
import { GlowOrb } from "@/components/ui/glow-orb";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";

export function Vision() {
  return (
    <section id="visao" className="relative overflow-hidden py-32 md:py-48">
      <GlowOrb
        variant="green"
        className="left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
      />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 text-center">
          <Reveal>
            <Eyebrow>Visão</Eyebrow>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="text-balance text-5xl font-semibold leading-[1.0] tracking-[-0.045em] text-white md:text-7xl lg:text-8xl">
              Construindo o futuro,{" "}
              <span className="text-gradient-brand">um produto por vez.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="max-w-2xl text-pretty text-xl leading-relaxed text-white/60 md:text-2xl">
              Acreditamos que pequenas equipes potencializadas por
              inteligência artificial podem criar soluções capazes de
              transformar mercados inteiros.{" "}
              <span className="text-white">
                A S7 existe para construir essas soluções.
              </span>
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
