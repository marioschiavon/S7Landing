const whatsappNumber = "5544988217535";

export function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const whatsappHref = whatsappLink("Olá! Vim pelo site da S7 e gostaria de saber mais.");

export const siteConfig = {
  name: "S7",
  legalName: "S7 Technology",
  url: "https://s7.dev.br",
  contactEmail: "contato@s7.dev.br",
  whatsappHref,
  title: "S7 — Software, IA e Automação para empresas que querem crescer",
  description:
    "A S7 desenvolve software sob medida, inteligência artificial, automação e produtos SaaS próprios para empresas que querem crescer mais rápido.",
  locale: "pt_BR",
  nav: [
    { label: "Soluções", href: "#solucoes" },
    { label: "Projetos", href: "#projetos" },
    { label: "Produtos", href: "#produtos" },
    { label: "Processo", href: "#processo" },
  ],
  footerLinks: [
    { label: "Projetos", href: "#projetos" },
    { label: "Produtos", href: "#produtos" },
    { label: "Contato", href: "#contato" },
  ],
  // TODO: substituir pelas URLs reais dos perfis
  socials: [
    { label: "Instagram", platform: "instagram", href: "https://www.instagram.com/s7.dev.br" },
    { label: "LinkedIn", platform: "linkedin", href: "https://www.linkedin.com/company/s7-dev-br" },
    { label: "Facebook", platform: "facebook", href: "https://www.facebook.com/s7.dev.br" },
  ],
  pillars: ["Software", "IA", "Automação", "Produtos Digitais"],
  cta: {
    contact: { label: "Falar com a S7", href: whatsappHref },
    projects: { label: "Ver projetos", href: "#projetos" },
    final: {
      label: "Iniciar projeto",
      href: whatsappLink("Olá! Quero iniciar um projeto com a S7."),
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
