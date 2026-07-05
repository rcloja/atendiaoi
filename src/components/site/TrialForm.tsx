import { useState } from "react";
import { ArrowRight } from "lucide-react";

const ACTION_URL = "https://admin.atendenteai.com.br/cadastroteste.html";

function formatWhatsapp(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 13);
  const ddi = digits.slice(0, 2);
  const ddd = digits.slice(2, 4);
  const part1 = digits.slice(4, 9);
  const part2 = digits.slice(9, 13);

  if (digits.length === 0) return "";
  if (digits.length < 2) return `+${ddi}`;
  if (digits.length < 4) return `+${ddi} (${ddd}`;
  if (digits.length < 9) return `+${ddi} (${ddd}) ${part1}`;
  return `+${ddi} (${ddd}) ${part1}-${part2}`;
}

export function TrialForm() {
  const [data, setData] = useState({ name: "", whatsapp: "+55 ", email: "" });

  const set = (k: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = k === "whatsapp" ? formatWhatsapp(e.target.value) : e.target.value;
    setData((d) => ({ ...d, [k]: value }));
  };

  return (
    <div className="card-soft p-6 md:p-10 max-w-xl mx-auto">
      <form action={ACTION_URL} method="POST" className="space-y-4 fade-up">
        <h3 className="text-xl font-bold text-foreground">Comece seu teste gratuito</h3>
        <p className="text-sm text-muted-foreground">7 dias grátis, sem cartão de crédito.</p>
        <Input label="Nome" name="name" value={data.name} onChange={set("name")} required />
        <Input
          label="WhatsApp"
          name="whatsapp"
          value={data.whatsapp}
          onChange={set("whatsapp")}
          required
          placeholder="+55 (51) 99999-9999"
          inputMode="tel"
          pattern="\+\d{2} \(\d{2}\) \d{5}-\d{4}"
          title="Formato: +55 (51) 99999-9999"
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={data.email}
          onChange={set("email")}
          required
        />
        <button type="submit" className="btn-primary w-full mt-2">
          Criar teste gratuito <ArrowRight size={16} />
        </button>
      </form>
    </div>
  );
}

function Input({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        {...props}
        className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
