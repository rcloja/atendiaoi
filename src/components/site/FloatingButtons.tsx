import { MessageCircle } from "lucide-react";

export function FloatingButtons() {
  return (
    <>
      {/* Desktop: WhatsApp floating */}
      <a
        href="https://wa.me/5551996479050"
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="hidden md:flex fixed bottom-6 right-6 z-40 h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] hover:scale-105 transition-transform"
      >
        <MessageCircle size={26} />
      </a>

      {/* Mobile: bottom bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur-md px-3 py-2.5 flex gap-2 shadow-[0_-4px_20px_rgba(15,23,42,0.06)]">
        <a
          href="https://wa.me/5551996479050"
          target="_blank"
          rel="noreferrer"
          className="btn-whatsapp flex-1 py-3 text-sm"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
        <a href="#teste" className="btn-primary flex-[1.4] py-3 text-sm">
          Testar grátis
        </a>
      </div>
    </>
  );
}
