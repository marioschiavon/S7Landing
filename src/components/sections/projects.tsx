import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Bezel } from "@/components/ui/bezel";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { cn } from "@/lib/utils";

function LeadereiMockup() {
  return (
    <BrowserFrame contentClassName="p-0">
      <Image
        src="/projects/leaderei.png"
        alt="Dashboard do Leaderei"
        width={1902}
        height={867}
        className="h-auto w-full"
      />
    </BrowserFrame>
  );
}

function GroomerMockup() {
  const highlighted = [3, 12, 16, 27];
  return (
    <BrowserFrame>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-10 gap-1.5">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "aspect-square rounded-md border border-white/5",
                highlighted.includes(i)
                  ? "bg-gradient-brand border-transparent"
                  : "bg-white/[0.03]"
              )}
            />
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {[80, 55].map((w, row) => (
            <div
              key={row}
              className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5"
            >
              <span className="h-6 w-6 shrink-0 rounded-full bg-white/10" />
              <div className="flex flex-1 flex-col gap-1.5">
                <div
                  className="h-2 rounded-full bg-white/12"
                  style={{ width: `${w}%` }}
                />
                <div className="h-1.5 w-1/3 rounded-full bg-white/8" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wide text-accent-blue">
                ok
              </span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

const projects = [
  {
    name: "Leaderei",
    tag: "Prospecção B2B com IA",
    description:
      "Plataforma multitenant que importa e qualifica leads, dispara cadências por WhatsApp e email com IA e agenda reuniões automaticamente via Cal.com.",
    highlights: ["Qualificação com IA", "WhatsApp + e-mail", "Agenda via Cal.com"],
    Mockup: LeadereiMockup,
  },
  {
    name: "Groomer Genius",
    tag: "Gestão Pet",
    description:
      "Sistema focado em gestão e crescimento de negócios do segmento pet.",
    highlights: [] as string[],
    Mockup: GroomerMockup,
  },
];

export function Projects() {
  return (
    <section id="projetos" className="relative py-28 md:py-40">
      <Container className="flex flex-col gap-20 md:gap-28">
        <SectionHeading
          eyebrow="Projetos"
          title="Tecnologia que já está em produção."
          description="Alguns dos produtos e plataformas que desenvolvemos para colocar nossos clientes na frente."
        />

        <div className="flex flex-col gap-20 md:gap-32">
          {projects.map(({ name, tag, description, highlights, Mockup }, i) => (
            <div
              key={name}
              className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
            >
              <Reveal
                className={cn(
                  "lg:col-span-7",
                  i % 2 === 1 && "lg:order-last"
                )}
              >
                <Bezel className="rounded-[2.25rem] p-2" innerClassName="rounded-[calc(2.25rem-0.5rem)] p-3 md:p-4">
                  <div className="transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.015]">
                    <Mockup />
                  </div>
                </Bezel>
              </Reveal>

              <Reveal delay={0.1} className="flex flex-col gap-5 lg:col-span-5">
                <span className="font-mono text-sm text-white/55">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">
                  {tag}
                </span>
                <h3 className="text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
                  {name}
                </h3>
                <p className="max-w-md text-pretty text-lg leading-relaxed text-white/60">
                  {description}
                </p>
                {highlights.length > 0 && (
                  <ul className="flex flex-wrap gap-2 pt-2">
                    {highlights.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-white/70"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
