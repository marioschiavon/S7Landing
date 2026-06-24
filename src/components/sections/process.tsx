import { Compass, Rocket, Target, Workflow, Wrench, Zap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Descoberta",
    description: "Mapeamos o problema, o público e o potencial do produto.",
  },
  {
    number: "02",
    icon: Target,
    title: "Estratégia",
    description: "Definimos arquitetura, prioridades e plano de execução.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Construção",
    description: "Construímos o produto em ciclos curtos e objetivos.",
  },
  {
    number: "04",
    icon: Workflow,
    title: "Automação",
    description: "Conectamos IA e automações para eliminar trabalho manual.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Escala",
    description: "Monitoramos, otimizamos e escalamos com dados reais.",
  },
];

export function Process() {
  return (
    <section id="processo" className="relative py-28 md:py-36">
      <Container className="flex flex-col gap-20">
        <SectionHeading
          eyebrow="Nosso processo"
          title="Da descoberta à escala, sem ruído."
          description="Um processo enxuto e iterativo, pensado para colocar valor real em produção rapidamente."
        />

        <Stagger className="relative flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-4">
          <div className="absolute left-[17px] top-1 h-[calc(100%-2rem)] w-px bg-white/10 md:left-0 md:right-0 md:top-[22px] md:h-px md:w-full" />

          {steps.map(({ number, icon: Icon, title, description }) => (
            <StaggerItem
              key={number}
              className="relative flex flex-1 items-start gap-4 md:flex-col md:items-center md:gap-4 md:text-center"
            >
              <div className="relative z-10 flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border border-white/15 bg-base-black">
                <Icon size={15} className="text-accent-blue" />
              </div>
              <div className="flex flex-col gap-1.5 md:max-w-[11rem]">
                <span className="font-mono text-xs text-accent-blue">
                  {number}
                </span>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="flex justify-center">
          <span className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-white/70">
            <Zap size={14} className="text-accent-blue" />
            Do briefing ao primeiro entregável: poucas semanas, não meses.
          </span>
        </div>
      </Container>
    </section>
  );
}
