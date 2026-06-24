import { Check, Factory, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

function Hook7Mockup() {
  return (
    <BrowserFrame>
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="font-mono text-[10px] uppercase tracking-wide text-white/50">
              WhatsApp conectado
            </span>
          </div>
          <span className="font-mono text-[10px] text-white/30">99.9%</span>
        </div>

        <div className="flex flex-col gap-2 py-1">
          <div className="max-w-[75%] rounded-2xl rounded-bl-sm border border-white/8 bg-white/[0.04] px-3.5 py-2.5">
            <div className="h-2 w-32 rounded-full bg-white/15" />
          </div>
          <div className="ml-auto max-w-[75%] rounded-2xl rounded-br-sm bg-gradient-brand px-3.5 py-2.5">
            <div className="h-2 w-24 rounded-full bg-white/40" />
          </div>
          <div className="max-w-[75%] rounded-2xl rounded-bl-sm border border-white/8 bg-white/[0.04] px-3.5 py-2.5">
            <div className="h-2 w-20 rounded-full bg-white/15" />
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-dashed border-white/10 px-3 py-2">
          <span className="font-mono text-[10px] uppercase tracking-wide text-accent-blue">
            fluxo automático
          </span>
          <div className="h-px flex-1 bg-white/10" />
          <Check size={12} className="text-accent-blue" />
        </div>
      </div>
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
            <span className="font-mono text-[10px] uppercase tracking-wide text-white/40">
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

        <div className="grid gap-6 lg:grid-cols-2">
          {products.map(({ icon: Icon, name, description, features, Mockup }, i) => (
            <Reveal key={name} delay={i * 0.1}>
              <div className="card-surface group relative flex h-full flex-col gap-8 overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:border-white/20 md:p-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow-blue">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">{name}</h3>
                  </div>
                  <span className="hidden rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-white/40 sm:inline-block">
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
                      className="flex items-center gap-3 text-sm text-white/65"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/8">
                        <Check size={11} className="text-accent-blue" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-2">
                  <Button
                    href={siteConfig.cta.secondary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="md"
                  >
                    Quero conhecer
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
