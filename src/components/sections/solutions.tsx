import { BrainCircuit, Code2, Layers } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";

const solutions = [
  {
    icon: Code2,
    title: "Desenvolvimento de Software",
    description:
      "Criamos aplicações web, plataformas SaaS e sistemas sob medida.",
  },
  {
    icon: BrainCircuit,
    title: "Inteligência Artificial",
    description:
      "Implementamos agentes, automações e fluxos inteligentes.",
  },
  {
    icon: Layers,
    title: "Produtos Digitais",
    description: "Desenvolvemos e operamos nossos próprios produtos.",
  },
];

export function Solutions() {
  return (
    <section id="solucoes" className="relative py-28 md:py-36">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="O que fazemos"
          title="Da ideia ao produto em produção."
          description="Unimos engenharia de software, inteligência artificial e visão de produto para entregar resultado de ponta a ponta."
        />

        <Stagger className="grid gap-6 md:grid-cols-3">
          {solutions.map(({ icon: Icon, title, description }) => (
            <StaggerItem key={title}>
              <div className="card-surface group relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/20">
                <div className="bg-gradient-brand absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />
                <div className="relative z-10 flex h-full flex-col gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-accent-blue/40 group-hover:bg-white/10">
                    <Icon className="h-6 w-6 text-accent-blue transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {title}
                  </h3>
                  <p className="leading-relaxed text-white/55">
                    {description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
