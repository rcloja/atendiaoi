import { useState, useEffect } from "react";
import { MessageSquare, Menu, X } from "lucide-react";

const NAV = [
  { label: "Recursos", href: "#recursos" },
  { label: "Planos", href: "#planos" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Documentação", href: "https://faq.atendenteai.com.br", external: true },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-page flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 font-semibold text-foreground">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-primary-foreground shadow-[var(--shadow-elevated)]">
            <MessageSquare className="h-4.5 w-4.5" size={18} />
          </span>
          <span className="text-lg tracking-tight">AtendenteAi</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://admin.atendenteai.com.br"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            Entrar
          </a>
          <a href="#teste" className="btn-primary text-sm py-2.5 px-4">
            Quero testar grátis
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border bg-background"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="py-2.5 text-base font-medium text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://admin.atendenteai.com.br"
              target="_blank"
              rel="noreferrer"
              className="py-2.5 text-base font-medium text-foreground"
            >
              Entrar
            </a>
            <a href="#teste" className="btn-primary mt-2" onClick={() => setOpen(false)}>
              Quero testar grátis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
