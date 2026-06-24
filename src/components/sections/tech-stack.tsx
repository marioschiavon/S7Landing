import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";

const technologies = [
  { name: "OpenAI", mono: "AI" },
  { name: "Claude", mono: "C" },
  { name: "Lovable", mono: "LV" },
  { name: "Antigravity", mono: "AG" },
  { name: "Bubble", mono: "BB" },
  { name: "Supabase", mono: "SB" },
  { name: "n8n", mono: "n8n" },
  { name: "Node.js", mono: "JS" },
  { name: "PostgreSQL", mono: "PG" },
];

export function TechStack() {
  return (
    <section id="tecnologias" className="relative py-28 md:py-36">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Tecnologias"
          title="Stack moderna para construir rápido."
          description="Combinamos modelos de IA de ponta com uma stack moderna e comprovada para entregar produtos robustos."
        />

        <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {technologies.map(({ name, mono }) => (
            <StaggerItem key={name}>
              <div className="group flex flex-col items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue/25 hover:bg-white/[0.04]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-mono text-sm font-semibold text-white/60 transition-colors duration-300 group-hover:border-accent-blue/40 group-hover:text-accent-blue">
                  {mono}
                </div>
                <span className="text-sm font-medium text-white/55 transition-colors duration-300 group-hover:text-white">
                  {name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
