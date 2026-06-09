import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function TrialForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [data, setData] = useState({ name: "", whatsapp: "", email: "", company: "", password: "" });

  const set = (k: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  return (
    <div className="card-soft p-6 md:p-10 max-w-xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        {[1, 2].map((n) => (
          <div key={n} className="flex-1 h-1.5 rounded-full bg-border overflow-hidden">
            <div
              className="h-full bg-primary transition-all"
              style={{ width: step > n ? "100%" : step === n ? "50%" : "0%" }}
            />
          </div>
        ))}
      </div>

      {step === 1 && (
        <form
          onSubmit={(e) => { e.preventDefault(); setStep(2); }}
          className="space-y-4 fade-up"
        >
          <h3 className="text-xl font-bold text-foreground">Comece seu teste gratuito</h3>
          <p className="text-sm text-muted-foreground">7 dias grátis, sem cartão de crédito.</p>
          <Input label="Nome" value={data.name} onChange={set("name")} required />
          <Input label="WhatsApp" value={data.whatsapp} onChange={set("whatsapp")} required placeholder="(00) 00000-0000" />
          <Input label="Email" type="email" value={data.email} onChange={set("email")} required />
          <button type="submit" className="btn-primary w-full mt-2">
            Continuar <ArrowRight size={16} />
          </button>
        </form>
      )}

      {step === 2 && (
        <form
          onSubmit={(e) => { e.preventDefault(); setStep(3); }}
          className="space-y-4 fade-up"
        >
          <h3 className="text-xl font-bold text-foreground">Sua conta</h3>
          <p className="text-sm text-muted-foreground">Só faltam alguns dados.</p>
          <Input label="Nome da empresa" value={data.company} onChange={set("company")} required />
          <Input label="Senha" type="password" value={data.password} onChange={set("password")} required />
          <div className="flex gap-2 mt-2">
            <button type="button" onClick={() => setStep(1)} className="btn-secondary flex-1">Voltar</button>
            <button type="submit" className="btn-primary flex-[1.6]">Criar teste gratuito</button>
          </div>
        </form>
      )}

      {step === 3 && (
        <div className="text-center py-6 fade-up">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success mb-4">
            <Check size={28} />
          </div>
          <h3 className="text-2xl font-bold text-foreground">Cadastro recebido!</h3>
          <p className="mt-2 text-muted-foreground">
            Em instantes você receberá um email para acessar sua conta.
          </p>
          <a href="https://admin.atendenteai.com.br" target="_blank" rel="noreferrer" className="btn-primary mt-6 inline-flex">
            Ir para o sistema
          </a>
        </div>
      )}
    </div>
  );
}

function Input({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
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
