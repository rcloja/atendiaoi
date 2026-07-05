import type React from "react";
import type React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Check, X, Sparkles, Clock, Users, Bot, Mic, FileText, BookOpen,
  UserCheck, Zap, ShieldCheck, TrendingDown, Handshake, PhoneCall,
  Layers, MessageSquare, Building2, ShoppingCart, Wrench, Wifi,
  GraduationCap, Home as HomeIcon, ArrowRight, HelpCircle,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingButtons } from "@/components/site/FloatingButtons";
import { FAQ } from "@/components/site/FAQ";

export const Route = createFileRoute("/documentacao")({
  head: () => ({
    meta: [
      { title: "Documentação AtendenteAi — Como a IA atende, vende e apoia sua equipe" },
      { name: "description", content: "Entenda como o AtendenteAi funciona, por que a inteligência artificial é braço direito da sua empresa e por que contratar em vez de outras plataformas. Sem tokens, com resumo e voz." },
      { property: "og:title", content: "Documentação AtendenteAi" },
      { property: "og:description", content: "Como o AtendenteAi funciona, diferenciais, comparativo e exemplos de uso por setor. Atendimento inteligente 24h no WhatsApp." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Documentação AtendenteAi" },
      { name: "twitter:description", content: "Como a IA do AtendenteAi trabalha junto da sua equipe. Sem cobrança por tokens." },
    ],
    links: [{ rel: "canonical", href: "/documentacao" }],
  }),
  component: DocumentacaoPage,
});

const WHATS = "https://wa.me/5551996479050";

function DocumentacaoPage() {
  return (
    <div className="bg-background text-foreground overflow-x-clip">
      <Header />
      <main className="pt-16">
        <Hero />
        <QuickNav />
        <OQueE />
        <PorQueIA />
        <BracoDireito />
        <Diferenciais />
        <Comparativo />
        <ComoFunciona />
        <ExemplosUso />
        <PerguntasFrequentes />
        <PorQueContratar />
        <FAQ />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="doc-top" className="relative section-pad bg-grid">
      <div className="container-page relative">
        <div className="max-w-3xl mx-auto text-center">
          <span className="chip"><BookOpen size={14} /> Documentação</span>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight">
            Documentação <span className="gradient-text">AtendenteAi</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-muted-foreground">
            Entenda como a inteligência artificial pode trabalhar como braço direito
            da sua empresa no atendimento, nas vendas e no suporte ao cliente.
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            O AtendenteAi ajuda empresas a responder clientes com rapidez, organizar conversas,
            reduzir atrasos no WhatsApp e manter um atendimento profissional mesmo fora do
            horário comercial.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/" hash="teste" className="btn-primary">
              Começar teste grátis <ArrowRight size={16} />
            </Link>
            <a href={WHATS} target="_blank" rel="noreferrer" className="btn-whatsapp">
              <PhoneCall size={16} /> Falar com um consultor
            </a>
            <a href="#faq-doc" className="btn-secondary">
              <HelpCircle size={16} /> Ver principais dúvidas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- QUICK NAV ---------------- */
const NAV_ITEMS = [
  { href: "#o-que-e", label: "O que é" },
  { href: "#por-que-ia", label: "Por que IA" },
  { href: "#braco-direito", label: "IA + humano" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#comparativo", label: "Comparativo" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#exemplos", label: "Exemplos" },
  { href: "#faq-doc", label: "Perguntas" },
  { href: "#contratar", label: "Contratar" },
];

function QuickNav() {
  return (
    <div className="border-y border-border bg-surface sticky top-16 z-30 backdrop-blur">
      <div className="container-page py-3 overflow-x-auto">
        <ul className="flex items-center gap-2 md:gap-3 whitespace-nowrap text-sm">
          {NAV_ITEMS.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="inline-flex items-center px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------------- O QUE É ---------------- */
function OQueE() {
  const bullets = [
    { icon: MessageSquare, text: "Responde dúvidas frequentes automaticamente." },
    { icon: Clock, text: "Atende clientes 24 horas por dia." },
    { icon: Handshake, text: "Apoia vendas e suporte." },
    { icon: Layers, text: "Organiza informações da conversa." },
    { icon: UserCheck, text: "Encaminha para atendimento humano quando necessário." },
    { icon: FileText, text: "Gera resumo do atendimento." },
    { icon: Bot, text: "Agentes virtuais personalizados por função." },
    { icon: Mic, text: "Trabalha com texto e voz, conforme o plano." },
  ];
  return (
    <section id="o-que-e" className="section-pad">
      <div className="container-page">
        <SectionHeader
          chip="Visão geral"
          title="O que é o AtendenteAi?"
          subtitle="Uma plataforma de atendimento com inteligência artificial para empresas que usam WhatsApp e canais digitais."
        />
        <div className="mt-10 card-soft p-8 md:p-10">
          <p className="text-base md:text-lg text-muted-foreground">
            O AtendenteAi combina inteligência artificial e atendimento humano em uma
            única plataforma. Ele responde rápido, mantém contexto, organiza histórico
            e libera a sua equipe para focar no que gera resultado: negociação, decisão
            comercial e relacionamento com o cliente.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {bullets.map((b) => (
              <li key={b.text} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary-soft text-primary-dark shrink-0">
                  <b.icon size={18} />
                </span>
                <span className="text-foreground/90">{b.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- POR QUE IA ---------------- */
function PorQueIA() {
  const args = [
    { icon: Zap, title: "Atendimento imediato", text: "Resposta em segundos, sem cliente esperando." },
    { icon: Users, title: "Menos clientes sem resposta", text: "Ninguém fica sem retorno, mesmo em picos." },
    { icon: Layers, title: "Mais organização", text: "Conversas, histórico e contexto em ordem." },
    { icon: Repeat2Icon, title: "Menos tarefas repetitivas", text: "A IA cuida das perguntas comuns." },
    { icon: Handshake, title: "Foco em negociação", text: "Sua equipe cuida do que gera receita." },
    { icon: ShieldCheck, title: "Padrão profissional", text: "Mensagens consistentes em tom e conteúdo." },
    { icon: Clock, title: "Funciona 24 horas", text: "Noite, feriado e fim de semana incluídos." },
    { icon: TrendingDown, title: "Menos oportunidades perdidas", text: "Mais conversas viram cliente." },
  ];
  return (
    <section id="por-que-ia" className="section-pad bg-surface">
      <div className="container-page">
        <SectionHeader
          chip="Impacto real"
          title="Quanto custa perder um cliente por demora no WhatsApp?"
          subtitle="Muitos clientes desistem quando não recebem resposta rápida. A IA reduz esse problema porque responde imediatamente, mantém o cliente engajado e ajuda a empresa a não perder oportunidades."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {args.map((a) => (
            <div key={a.title} className="card-soft p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary-dark">
                <a.icon size={20} />
              </span>
              <h3 className="mt-4 text-base font-semibold">{a.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// small alias to keep imports clean
function Repeat2Icon(props: React.ComponentProps<typeof Zap>) {
  return <Zap {...props} />;
}

/* ---------------- BRAÇO DIREITO ---------------- */
function BracoDireito() {
  return (
    <section id="braco-direito" className="section-pad">
      <div className="container-page">
        <SectionHeader
          chip="IA + humano"
          title="A IA não substitui o humano — ela fortalece a equipe"
          subtitle="O AtendenteAi foi criado para ser braço direito do seu time: cuida das primeiras respostas, dúvidas repetitivas, triagem e organização, e passa a conversa para uma pessoa quando o caso pede."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <FlowCard
            step="1"
            icon={Bot}
            title="IA responde rápido"
            text="Recebe, entende e responde no primeiro contato, com o tom da sua empresa."
          />
          <FlowCard
            step="2"
            icon={UserCheck}
            title="Humano decide melhor"
            text="Nos casos que exigem negociação ou empatia, a conversa vai para o time."
            highlight
          />
          <FlowCard
            step="3"
            icon={TrendingDown}
            title="Empresa perde menos"
            text="Mais clientes atendidos, menos oportunidades escapando pela demora."
          />
        </div>
      </div>
    </section>
  );
}

function FlowCard({
  step, icon: Icon, title, text, highlight,
}: { step: string; icon: React.ElementType; title: string; text: string; highlight?: boolean }) {
  return (
    <div className={`card-soft p-7 relative ${highlight ? "ring-1 ring-primary/30" : ""}`}>
      <span className="absolute -top-3 -left-3 h-9 w-9 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shadow-md">
        {step}
      </span>
      <Icon className="text-primary" size={26} />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

/* ---------------- DIFERENCIAIS ---------------- */
function Diferenciais() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Sem cobrança por tokens",
      text: "Muitas soluções cobram por uso ou volume de mensagens, deixando o custo imprevisível. O AtendenteAi trabalha com planos simples e previsíveis, facilitando o controle financeiro da empresa.",
      highlight: "Planos previsíveis",
    },
    {
      icon: FileText,
      title: "Resumo de atendimento",
      text: "Durante ou ao final da conversa, o sistema gera um resumo com os principais pontos, ajudando a equipe humana a entender o caso sem reler todo o histórico.",
      highlight: "Economia de tempo",
    },
    {
      icon: Mic,
      title: "Voz para agente virtual",
      text: "Recursos de voz tornam o atendimento mais natural e humanizado. Poucas empresas oferecem esse diferencial de forma acessível, e muitas cobram valores extras por consumo.",
      highlight: "Atendimento moderno",
    },
    {
      icon: Bot,
      title: "Agentes virtuais personalizados",
      text: "Crie agentes com funções distintas: vendas, suporte, financeiro, agendamento, triagem ou pós-venda — cada um com o seu papel.",
      highlight: "Por setor",
    },
    {
      icon: BookOpen,
      title: "Base de conhecimento da empresa",
      text: "A IA responde com base nas informações da própria empresa: produtos, serviços, políticas, horários, preços, dúvidas frequentes e procedimentos internos.",
      highlight: "Respostas certas",
    },
    {
      icon: UserCheck,
      title: "Transferência para humano",
      text: "Quando necessário, a conversa é direcionada para uma pessoa da equipe, mantendo o equilíbrio entre automação e atendimento humano.",
      highlight: "IA + pessoas",
    },
    {
      icon: Sparkles,
      title: "Teste grátis",
      text: "Sua empresa testa antes de contratar e vê, na prática, como a automação funciona no seu atendimento real.",
      highlight: "Sem risco",
    },
  ];

  return (
    <section id="diferenciais" className="section-pad bg-surface">
      <div className="container-page">
        <SectionHeader
          chip="Diferenciais"
          title="Principais diferenciais do AtendenteAi"
          subtitle="Recursos pensados para empresas brasileiras que querem previsibilidade, resultado e atendimento moderno."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="card-soft p-7">
              <div className="flex items-start justify-between gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary-soft text-primary-dark">
                  <i.icon size={20} />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-success/15 text-success">
                  {i.highlight}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{i.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMPARATIVO ---------------- */
function Comparativo() {
  const rows: Array<{ label: string; us: string; others: string }> = [
    { label: "Atendimento com IA 24h", us: "sim", others: "nem sempre disponível" },
    { label: "Resumo de atendimento", us: "sim", others: "geralmente cobrado à parte" },
    { label: "Agente virtual com voz", us: "sim", others: "raro e caro" },
    { label: "Planos previsíveis", us: "sim", others: "pode depender de tokens" },
    { label: "Sem cobrança por tokens", us: "sim", others: "cobrança por consumo" },
    { label: "Transferência para humano", us: "sim", others: "configuração limitada" },
    { label: "Base de conhecimento personalizada", us: "sim", others: "configuração limitada" },
    { label: "Agentes por setor", us: "sim", others: "geralmente 1 agente" },
    { label: "Teste grátis", us: "sim", others: "nem sempre disponível" },
    { label: "Foco comercial em empresas brasileiras", us: "sim", others: "suporte genérico" },
  ];
  return (
    <section id="comparativo" className="section-pad">
      <div className="container-page">
        <SectionHeader
          chip="Comparativo"
          title="AtendenteAi × outras plataformas"
          subtitle="Compare o que costuma ser padrão em outras soluções com o que já vem incluso no AtendenteAi."
        />
        <div className="mt-10 card-soft overflow-hidden">
          <div className="grid grid-cols-12 bg-surface-2 text-sm font-semibold">
            <div className="col-span-6 md:col-span-6 p-4">Recurso</div>
            <div className="col-span-3 p-4 text-primary-dark border-l border-border">AtendenteAi</div>
            <div className="col-span-3 p-4 text-muted-foreground border-l border-border">Plataformas comuns</div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-12 items-center text-sm ${i % 2 ? "bg-surface/50" : ""}`}
            >
              <div className="col-span-6 p-4 border-t border-border">{r.label}</div>
              <div className="col-span-3 p-4 border-t border-l border-border">
                <span className="inline-flex items-center gap-1.5 text-success font-semibold">
                  <Check size={16} /> Incluso
                </span>
              </div>
              <div className="col-span-3 p-4 border-t border-l border-border text-muted-foreground">
                <span className="inline-flex items-start gap-1.5">
                  <X size={16} className="mt-0.5 text-destructive shrink-0" />
                  <span>{r.others}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMO FUNCIONA ---------------- */
function ComoFunciona() {
  const steps = [
    "A empresa cadastra suas informações.",
    "O AtendenteAi aprende com a base de conhecimento.",
    "O agente virtual começa a atender clientes.",
    "A IA responde dúvidas, faz triagem e orienta o cliente.",
    "Quando necessário, transfere para atendimento humano.",
    "A equipe recebe a conversa organizada, com contexto e resumo.",
    "A empresa acompanha melhor seus atendimentos e oportunidades.",
  ];
  return (
    <section id="como-funciona" className="section-pad bg-surface">
      <div className="container-page">
        <SectionHeader
          chip="Passo a passo"
          title="Como funciona na prática?"
          subtitle="Uma implantação simples: você configura, a IA aprende e o time acompanha os resultados."
        />
        <ol className="mt-10 relative border-l border-border ml-3 md:ml-6 space-y-6">
          {steps.map((s, i) => (
            <li key={i} className="pl-6 md:pl-8 relative">
              <span className="absolute -left-[13px] top-0 h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow">
                {i + 1}
              </span>
              <div className="card-soft p-5">
                <p className="text-foreground/90">{s}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- EXEMPLOS DE USO ---------------- */
function ExemplosUso() {
  const items = [
    { icon: Building2, title: "Clínicas e consultórios", text: "Agendamento, confirmação de horários, dúvidas sobre procedimentos, triagem inicial e lembretes." },
    { icon: ShoppingCart, title: "Lojas e e-commerces", text: "Dúvidas sobre produtos, prazos, frete, trocas, promoções e acompanhamento de pedidos." },
    { icon: Wrench, title: "Prestadores de serviço", text: "Orçamentos, captação de leads, dúvidas frequentes e encaminhamento para atendimento comercial." },
    { icon: Wifi, title: "Provedores de internet e telecom", text: "Suporte inicial, segunda via, dúvidas sobre planos, aviso de instabilidade, abertura de chamados e triagem técnica." },
    { icon: GraduationCap, title: "Escolas e cursos", text: "Informações sobre matrícula, valores, horários, turmas, documentos e atendimento aos alunos." },
    { icon: HomeIcon, title: "Imobiliárias", text: "Captação de interessados, envio de informações de imóveis, agendamento de visitas e qualificação de leads." },
  ];
  return (
    <section id="exemplos" className="section-pad">
      <div className="container-page">
        <SectionHeader
          chip="Casos de uso"
          title="Exemplos por tipo de empresa"
          subtitle="O AtendenteAi se adapta ao seu segmento e à forma como sua empresa atende."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="card-soft p-7">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary-soft text-primary-dark">
                <i.icon size={20} />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{i.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const DOC_FAQ: Array<{ q: string; a: string }> = [
  { q: "O AtendenteAi substitui minha equipe?", a: "Não. Ele ajuda sua equipe a atender melhor, respondendo dúvidas repetitivas, fazendo triagem e organizando conversas. Quando necessário, o atendimento pode ser transferido para uma pessoa." },
  { q: "A IA pode responder com as informações da minha empresa?", a: "Sim. O AtendenteAi pode usar uma base de conhecimento personalizada com informações sobre seus produtos, serviços, horários, preços, políticas e processos." },
  { q: "Posso usar no WhatsApp?", a: "Sim. O foco principal da ferramenta é ajudar empresas que atendem pelo WhatsApp e canais digitais." },
  { q: "O sistema atende fora do horário comercial?", a: "Sim. A IA pode atender 24 horas por dia, inclusive à noite, fins de semana e feriados, conforme a configuração da empresa." },
  { q: "Existe teste grátis?", a: "Sim. O AtendenteAi oferece teste grátis para a empresa conhecer a ferramenta antes de contratar." },
  { q: "Preciso saber tecnologia para usar?", a: "Não. A proposta é simplificar a automação para empresas. A configuração pode ser orientada para que você coloque a IA em funcionamento sem complexidade técnica." },
  { q: "O atendimento pode ser transferido para humano?", a: "Sim. Quando o cliente precisa de ajuda mais específica ou quando a empresa deseja assumir a conversa, o atendimento pode ser transferido para uma pessoa." },
  { q: "O AtendenteAi cobra por tokens?", a: "Não. Trabalhamos com planos claros e previsíveis, sem transformar cada mensagem em uma preocupação de consumo por tokens, como acontece em muitas soluções do mercado." },
  { q: "O agente virtual pode ter voz?", a: "Sim. O AtendenteAi pode trabalhar com recursos de voz para tornar o atendimento mais natural e moderno, dependendo da configuração contratada." },
  { q: "Posso ter mais de um agente virtual?", a: "Sim. A empresa pode estruturar agentes diferentes para setores como vendas, suporte, financeiro, agendamento, pós-venda ou triagem." },
];

function PerguntasFrequentes() {
  return (
    <section id="faq-doc" className="section-pad bg-surface">
      <div className="container-page">
        <SectionHeader
          chip="Perguntas frequentes"
          title="Tire suas dúvidas sobre o AtendenteAi"
          subtitle="As dúvidas mais comuns de empresas, gestores, atendentes e parceiros — respondidas de forma direta."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {DOC_FAQ.map((f) => (
            <details key={f.q} className="card-soft p-5 group">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <span className="font-semibold text-foreground">{f.q}</span>
                <span className="text-primary transition-transform group-open:rotate-45 shrink-0">
                  <span className="text-2xl leading-none">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- POR QUE CONTRATAR ---------------- */
function PorQueContratar() {
  const highlights = [
    "Mais velocidade", "Mais organização", "Menos oportunidades perdidas",
    "Mais profissionalismo", "Atendimento 24h", "IA com suporte humano",
    "Planos simples", "Recursos modernos: resumo e voz",
  ];
  return (
    <section id="contratar" className="section-pad">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary-soft via-background to-background p-8 md:p-14">
          <div className="max-w-3xl">
            <span className="chip"><Sparkles size={14} /> Contrate o AtendenteAi</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
              Atendimento rápido não é mais diferencial.{" "}
              <span className="gradient-text">É o mínimo que o cliente espera.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              O cliente atual quer resposta rápida, clareza e continuidade. Quando a empresa demora,
              ela perde oportunidades. O AtendenteAi ajuda sua empresa a responder melhor, organizar
              conversas, apoiar sua equipe e transformar atendimento em resultado comercial.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {highlights.map((h) => (
                <li key={h} className="inline-flex items-center gap-1.5 rounded-full bg-success/15 text-success px-3 py-1.5 text-sm font-semibold">
                  <Check size={14} /> {h}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base text-foreground">
              Teste o AtendenteAi gratuitamente e veja como a inteligência artificial
              pode trabalhar ao lado da sua equipe.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/" hash="teste" className="btn-primary">
                Começar teste grátis <ArrowRight size={16} />
              </Link>
              <a href={WHATS} target="_blank" rel="noreferrer" className="btn-whatsapp">
                <PhoneCall size={16} /> Falar com especialista
              </a>
              <Link to="/" hash="planos" className="btn-secondary">
                Conhecer planos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION HEADER ---------------- */
function SectionHeader({ chip, title, subtitle }: { chip: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl">
      <span className="chip">{chip}</span>
      <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-base md:text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

// re-export type helper
import type React from "react";
