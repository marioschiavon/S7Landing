import { BrainCircuit, Check, Code2, Workflow } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { Bezel } from "@/components/ui/bezel";
import { cn } from "@/lib/utils";

const solutions = [
  {
    icon: Code2,
    title: "Desenvolvimento de Software",
    description:
      "Aplicações web, plataformas SaaS e sistemas sob medida, do protótipo à produção.",
    points: [
      "Plataformas multitenant e SaaS",
      "Integrações com ERPs, CRMs e APIs",
      "Arquitetura pronta para escalar",
    ],
    featured: true,
  },
  {
    icon: BrainCircuit,
    title: "Inteligência Artificial",
    description:
      "Agentes e fluxos inteligentes que qualificam, respondem e decidem com contexto do seu negócio.",
  },
  {
    icon: Workflow,
    title: "Automação",
    description:
      "Eliminamos trabalho manual conectando WhatsApp, planilhas e sistemas internos.",
  },
];

export function Solutions() {
  return (
    <section id="solucoes" className="relative py-28 md:pt-40 md:pb-36">
      <Container className="flex flex-col gap-16 md:gap-20">
        <SectionHeading
          eyebrow="O que fazemos"
          title="Da ideia ao produto em produção."
          description="Unimos engenharia de software, inteligência artificial e visão de produto para entregar resultado de ponta a ponta."
        />

        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr]">
          {solutions.map(({ icon: Icon, title, description, points, featured }) => (
            <StaggerItem
              key={title}
              className={cn("h-full", featured && "md:col-span-2 lg:col-span-1 lg:row-span-2")}
            >
              <Bezel className="hover:border-white/15" innerClassName={cn("p-8", featured && "md:p-10")}>
                <div className="bg-gradient-brand absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-20" />
                {featured && (
                  <div className="absolute inset-0 bg-dot-grid opacity-[0.15] mask-fade-bottom" />
                )}
                <div className="relative z-10 flex h-full flex-col gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors duration-500 group-hover:border-accent-blue/40">
                    <Icon
                      strokeWidth={1.5}
                      className="h-6 w-6 text-accent-blue transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3
                    className={cn(
                      "text-balance font-semibold tracking-[-0.02em] text-white",
                      featured ? "text-3xl md:text-[2.75rem] md:leading-[1.05]" : "text-2xl"
                    )}
                  >
                    {title}
                  </h3>
                  <p
                    className={cn(
                      "max-w-md leading-relaxed text-white/60",
                      featured && "text-lg"
                    )}
                  >
                    {description}
                  </p>
                  {points && (
                    <ul className="mt-auto flex flex-col gap-3 pt-6">
                      {points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-3 border-t border-white/[0.06] pt-3 text-sm text-white/70"
                        >
                          <Check size={14} strokeWidth={1.75} className="text-accent-green" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Bezel>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
