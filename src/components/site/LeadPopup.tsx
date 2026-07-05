import { useEffect, useRef, useState } from "react";
import { X, Sparkles } from "lucide-react";

const STORAGE_KEY = "atendenteai_lead_popup_dismissed";

export function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const reset = () => {
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setOpen(true), 60000);
    };
    const events: (keyof DocumentEventMap)[] = ["mousemove", "keydown", "scroll", "touchstart"];
    events.forEach((e) => document.addEventListener(e, reset, { passive: true }));
    reset();
    return () => {
      events.forEach((e) => document.removeEventListener(e, reset));
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center bg-foreground/40 backdrop-blur-sm p-4 fade-up">
      <div className="relative bg-card rounded-2xl shadow-[var(--shadow-elevated)] border border-border w-full max-w-md p-6 md:p-8">
        <button
          onClick={close}
          aria-label="Fechar"
          className="absolute top-3 right-3 h-9 w-9 rounded-lg hover:bg-surface flex items-center justify-center text-muted-foreground"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-primary mb-3">
              <Sparkles size={22} />
            </div>
            <h3 className="text-xl font-bold text-foreground">Guia enviado!</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Verifique sua caixa de entrada nos próximos minutos.
            </p>
            <button onClick={close} className="btn-primary mt-5">
              Fechar
            </button>
          </div>
        ) : (
          <>
            <span className="chip">Guia gratuito</span>
            <h3 className="mt-4 text-2xl font-bold text-foreground">
              Ainda não está pronto para testar?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Receba gratuitamente o guia{" "}
              <strong className="text-foreground">
                "Como empresas estão usando tecnologia para responder mais rápido no WhatsApp."
              </strong>
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-5 space-y-3"
            >
              <input
                type="email"
                required
                placeholder="Seu melhor email"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <button type="submit" className="btn-primary w-full">
                Receber guia
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
