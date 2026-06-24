import { Container } from "@/components/ui/container";
import { GlowOrb } from "@/components/ui/glow-orb";
import { Reveal } from "@/components/ui/reveal";

export function Vision() {
  return (
    <section id="visao" className="relative overflow-hidden py-28 md:py-36">
      <GlowOrb
        variant="green"
        className="left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
      />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
              Visão
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl">
              Construindo o futuro,{" "}
              <span className="text-gradient-brand">um produto por vez.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-xl leading-relaxed text-white/55 md:text-2xl">
              Acreditamos que pequenas equipes potencializadas por
              inteligência artificial podem criar soluções capazes de
              transformar mercados inteiros.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="text-lg font-medium text-white/80">
              A S7 existe para construir essas soluções.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
