import Image from "next/image";
import { Check, Factory, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { Button } from "@/components/ui/button";
import { Bezel } from "@/components/ui/bezel";
import { whatsappLink } from "@/lib/site-config";

function Hook7Mockup() {
  return (
    <BrowserFrame contentClassName="p-0">
      <Image
        src="/projects/hook7.png"
        alt="Dashboard do Hook7"
        width={1918}
        height={871}
        className="h-auto w-full"
      />
    </BrowserFrame>
  );
}

function BakeMockup() {
  const columns = [
    { label: "Fila", items: 2 },
    { label: "Produção", items: 3 },
    { label: "Concluído", items: 2 },
  ];

  return (
    <BrowserFrame>
      <div className="grid grid-cols-3 gap-2.5">
        {columns.map((col) => (
          <div key={col.label} className="flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-wide text-white/55">
              {col.label}
            </span>
            {Array.from({ length: col.items }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col gap-1.5 rounded-lg border border-white/8 bg-white/[0.03] p-2.5"
              >
                <div className="h-1.5 w-3/4 rounded-full bg-white/15" />
                <div className="h-1.5 w-1/2 rounded-full bg-white/8" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

const products = [
  {
    icon: MessageSquare,
    name: "Hook7",
    description: "Plataforma de integração e automação para WhatsApp.",
    features: [
      "Conexão direta com WhatsApp",
      "Automação de fluxos e respostas",
      "Integração com seus sistemas internos",
    ],
    Mockup: Hook7Mockup,
  },
  {
    icon: Factory,
    name: "Bake S7",
    description: "Sistema para gestão operacional e produção.",
    features: [
      "Controle de produção em tempo real",
      "Gestão de operações e equipes",
      "Indicadores e relatórios automatizados",
    ],
    Mockup: BakeMockup,
  },
];

export function Products() {
  return (
    <section id="produtos" className="relative py-28 md:py-36">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Produtos S7"
          title="Produtos próprios, construídos com o nosso padrão."
          description="Não somos apenas uma fábrica de software. Também criamos e operamos nossas próprias plataformas SaaS."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {products.map(({ icon: Icon, name, description, features, Mockup }, i) => (
            <Reveal key={name} delay={i * 0.1} className="h-full">
              <Bezel className="hover:border-white/15" innerClassName="flex flex-col gap-8 p-7 md:p-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow-blue">
                      <Icon strokeWidth={1.75} className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">{name}</h3>
                  </div>
                  <span className="hidden rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-white/55 sm:inline-block">
                    Produto S7
                  </span>
                </div>

                <p className="text-lg leading-relaxed text-white/55">
                  {description}
                </p>

                <Mockup />

                <ul className="flex flex-col gap-3">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 border-t border-white/[0.06] pt-3 text-sm text-white/70"
                    >
                      <Check size={14} strokeWidth={1.75} className="shrink-0 text-accent-green" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-2">
                  <Button
                    href={whatsappLink(`Olá! Quero conhecer o ${name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="md"
                  >
                    Quero conhecer o {name}
                  </Button>
                </div>
              </Bezel>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
