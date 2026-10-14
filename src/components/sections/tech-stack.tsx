import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

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

function TechPill({ name, mono }: (typeof technologies)[number]) {
  return (
    <li className="flex shrink-0 items-center gap-3 rounded-full border border-white/8 bg-white/[0.02] py-2 pl-2 pr-6">
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 font-mono text-xs font-semibold text-white/70">
        {mono}
      </span>
      <span className="text-base font-medium text-white/75">{name}</span>
    </li>
  );
}

export function TechStack() {
  return (
    <section id="tecnologias" className="relative overflow-hidden py-28 md:py-36">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Tecnologias"
          title="Stack moderna para construir rápido."
          description="Combinamos modelos de IA de ponta com uma stack moderna e comprovada para entregar produtos robustos."
        />
      </Container>

      <Reveal className="group mask-fade-x mt-16 flex overflow-hidden">
        {/* Two identical tracks; the second is decorative so screen readers hear the list once */}
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 || undefined}
            className="animate-marquee flex shrink-0 gap-4 pr-4"
          >
            {technologies.map((tech) => (
              <TechPill key={tech.name} {...tech} />
            ))}
          </ul>
        ))}
      </Reveal>
    </section>
  );
}
