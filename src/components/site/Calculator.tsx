import { useMemo, useState } from "react";

const fmt = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export function Calculator() {
  const [msgs, setMsgs] = useState(50);
  const [ticket, setTicket] = useState(150);
  const [lost, setLost] = useState(5);

  const monthly = useMemo(() => lost * ticket * 4, [lost, ticket]);

  return (
    <div className="grid lg:grid-cols-2 gap-6 items-stretch">
      <div className="card-soft p-6 md:p-8">
        <div className="space-y-6">
          <Field
            label="Quantas mensagens comerciais sua empresa recebe por dia?"
            value={msgs}
            min={1}
            max={1000}
            step={5}
            onChange={setMsgs}
          />
          <Field
            label="Qual o valor médio de uma venda?"
            value={ticket}
            min={10}
            max={5000}
            step={10}
            prefix="R$"
            onChange={setTicket}
          />
          <Field
            label="Quantos clientes por semana você acredita perder por demora no atendimento?"
            value={lost}
            min={0}
            max={100}
            step={1}
            onChange={setLost}
          />
        </div>
      </div>

      <div className="card-soft p-6 md:p-8 bg-gradient-to-br from-primary-soft to-background border-primary/20">
        <span className="chip">Resultado estimado</span>
        <p className="mt-4 text-base text-muted-foreground">
          Sua empresa pode estar deixando aproximadamente:
        </p>
        <p className="mt-2 text-5xl md:text-6xl font-bold gradient-text tracking-tight tabular-nums transition-all">
          {fmt(monthly)}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">por mês em vendas não respondidas.</p>

        <div className="mt-6 rounded-xl border border-border bg-background p-4">
          <p className="text-sm font-medium text-foreground">Agora compare com nossos planos:</p>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <li className="flex justify-between"><span>Plano Start</span><span className="font-semibold text-foreground">R$ 297</span></li>
            <li className="flex justify-between"><span>Plano Profissional</span><span className="font-semibold text-foreground">R$ 597</span></li>
            <li className="flex justify-between"><span>Plano Empresarial</span><span className="font-semibold text-foreground">R$ 997</span></li>
          </ul>
        </div>

        <a href="#teste" className="btn-primary w-full mt-6">Quero testar grátis</a>
      </div>
    </div>
  );
}

function Field({
  label, value, min, max, step, prefix, onChange,
}: {
  label: string; value: number; min: number; max: number; step: number; prefix?: string;
  onChange: (n: number) => void;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <div className="mt-3 flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 min-w-[120px]">
          {prefix && <span className="text-muted-foreground text-sm">{prefix}</span>}
          <input
            type="number"
            value={value}
            min={min}
            max={max}
            onChange={(e) => onChange(Number(e.target.value) || 0)}
            className="w-full bg-transparent text-base font-semibold text-foreground outline-none tabular-nums"
          />
        </div>
        <input
          type="range"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1 accent-[color:var(--primary)]"
        />
      </div>
    </div>
  );
}
