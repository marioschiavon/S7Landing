import { Logo } from "@/components/ui/logo";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/8 bg-base-dark/40">
      <Container className="py-16 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="flex max-w-sm flex-col gap-6">
            <Logo />
            <p className="text-sm leading-relaxed text-white/45">
              Fábrica de software, IA e automação. Construímos a tecnologia e
              os produtos que colocam empresas no futuro.
            </p>
            <ul className="flex flex-wrap gap-2">
              {siteConfig.pillars.map((pillar) => (
                <li
                  key={pillar}
                  className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs uppercase tracking-wide text-white/50"
                >
                  {pillar}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-white/35">
                Navegação
              </h3>
              <ul className="flex flex-col gap-3">
                {siteConfig.footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-white/35">
                Contato
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    Iniciar um projeto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/8 pt-8 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.legalName}. Todos os direitos
            reservados.
          </p>
          <p>Software · IA · Automação · Produtos Digitais</p>
        </div>
      </Container>
    </footer>
  );
}
