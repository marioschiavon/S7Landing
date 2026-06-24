import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { cn } from "@/lib/utils";

function LedereiMockup() {
  return (
    <BrowserFrame>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-3">
          {[60, 85, 45].map((w, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 rounded-xl border border-white/8 bg-white/[0.03] p-3"
            >
              <div className="h-2 w-10 rounded-full bg-white/10" />
              <div
                className="h-3 rounded-full bg-gradient-brand"
                style={{ width: `${w}%` }}
              />
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
          <svg viewBox="0 0 240 64" className="h-16 w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lederei-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5B8CFF" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#5B8CFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,46 L34,40 L68,48 L102,28 L136,34 L170,16 L204,22 L240,6 L240,64 L0,64 Z"
              fill="url(#lederei-area)"
            />
            <path
              d="M0,46 L34,40 L68,48 L102,28 L136,34 L170,16 L204,22 L240,6"
              fill="none"
              stroke="#5B8CFF"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-2">
          {[1, 2, 3].map((row) => (
            <div
              key={row}
              className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-accent-blue/70" />
              <div className="h-2 w-full max-w-[70%] rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function GroomerMockup() {
  const highlighted = [3, 9, 14, 19];
  return (
    <BrowserFrame>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-7 gap-1.5">
          {Array.from({ length: 21 }).map((_, i) => (
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
    name: "Lederei",
    tag: "Plataforma Web",
    description:
      "Plataforma digital desenvolvida para atender necessidades específicas do cliente.",
    Mockup: LedereiMockup,
  },
  {
    name: "Groomer Genius",
    tag: "Gestão Pet",
    description:
      "Sistema focado em gestão e crescimento de negócios do segmento pet.",
    Mockup: GroomerMockup,
  },
];

export function Projects() {
  return (
    <section id="projetos" className="relative py-28 md:py-36">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Projetos"
          title="Tecnologia que já está em produção."
          description="Alguns dos produtos e plataformas que desenvolvemos para colocar nossos clientes na frente."
        />

        <Stagger className="grid gap-6 md:grid-cols-2">
          {projects.map(({ name, tag, description, Mockup }) => (
            <StaggerItem key={name}>
              <div className="card-surface group relative h-full overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20">
                <div className="p-6 pb-0">
                  <Mockup />
                </div>
                <div className="flex flex-col gap-3 p-8 pt-6">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">
                    {tag}
                  </span>
                  <h3 className="text-2xl font-semibold text-white">
                    {name}
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
