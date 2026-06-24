export const siteConfig = {
  name: "S7",
  legalName: "S7 Technology",
  url: "https://s7.tech",
  contactEmail: "contato@s7.tech",
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
  pillars: ["Software", "IA", "Automação", "Produtos Digitais"],
  cta: {
    primary: { label: "Conheça nossos projetos", href: "#projetos" },
    secondary: { label: "Falar com a S7", href: "#contato" },
    final: { label: "Iniciar Projeto", href: "mailto:contato@s7.tech" },
  },
} as const;

export type SiteConfig = typeof siteConfig;
