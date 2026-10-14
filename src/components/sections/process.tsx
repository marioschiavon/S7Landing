"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
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
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 85%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 30 });

  return (
    <section id="processo" className="relative py-28 md:py-40">
      <Container className="flex flex-col gap-20">
        <SectionHeading
          eyebrow="Nosso processo"
          title="Da descoberta à escala, sem ruído."
          description="Um processo enxuto e iterativo, pensado para colocar valor real em produção rapidamente."
        />

        <div ref={trackRef} className="relative">
          {/* Base track + scroll-driven fill (vertical on mobile, horizontal on desktop) */}
          <div className="absolute left-[21px] top-2 h-[calc(100%-2.5rem)] w-px bg-white/10 md:left-0 md:right-0 md:top-[22px] md:h-px md:w-full" />
          <motion.div
            style={{ scaleY: progress }}
            className="absolute left-[21px] top-2 h-[calc(100%-2.5rem)] w-px origin-top bg-gradient-to-b from-accent-blue to-accent-green md:hidden"
          />
          <motion.div
            style={{ scaleX: progress }}
            className="absolute left-0 right-0 top-[22px] hidden h-px origin-left bg-gradient-brand md:block"
          />

          <Stagger className="relative flex flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-4">
            {steps.map(({ number, icon: Icon, title, description }) => (
              <StaggerItem
                key={number}
                className="relative flex flex-1 items-start gap-5 md:flex-col md:items-center md:gap-5 md:text-center"
              >
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-base-black shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <Icon size={17} strokeWidth={1.5} className="text-accent-blue" />
                </div>
                <div className="flex flex-col gap-1.5 md:max-w-[11rem]">
                  <span className="font-mono text-xs text-accent-blue">
                    {number}
                  </span>
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/55">
                    {description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="flex justify-center">
          <span className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-white/70">
            <Zap size={14} strokeWidth={1.75} className="text-accent-blue" />
            Do briefing ao primeiro entregável: poucas semanas, não meses.
          </span>
        </div>
      </Container>
    </section>
  );
}
