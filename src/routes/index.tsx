import { createFileRoute } from "@tanstack/react-router";
import { buildWhatsAppUrl, handleWhatsAppClick } from "@/lib/whatsapp";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero-facial.jpg";
import stillLife from "@/assets/still-life.jpg";
import portrait from "@/assets/portrait.jpg";
import moon from "@/assets/moon-motif.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { n: "01", name: "Limpeza de Pele", note: "ritual fundador" },
  { n: "02", name: "Dermaplaning", note: "renovação superficial" },
  { n: "03", name: "Peelings", note: "manchas & textura" },
  { n: "04", name: "Microagulhamento", note: "colágeno induzido" },
  { n: "05", name: "Botox", note: "expressão preservada" },
  { n: "06", name: "Preenchimento", note: "harmonia natural" },
  { n: "07", name: "Bioestimulador", note: "firmeza estrutural" },
  { n: "08", name: "Skinbooster", note: "hidratação profunda" },
  { n: "09", name: "PDRN", note: "regeneração celular" },
  { n: "10", name: "Profhilo", note: "rejuvenescimento" },
  { n: "11", name: "Fios de PDO", note: "lifting sem cirurgia" },
  { n: "12", name: "Remoção de Sinais", note: "técnica segura" },
  { n: "13", name: "Secagem de Vasinhos", note: "pernas leves" },
  { n: "14", name: "Injetável Capilar", note: "queda & vitalidade" },
];

const philosophy = [
  { k: "Estratégia", v: "cada protocolo é desenhado a partir da sua pele, sua história, seu tempo." },
  { k: "Conhecimento", v: "uma década estudando o que envelhece — e o que devolve à pele a sua luz." },
  { k: "Naturalidade", v: "resultados que ninguém aponta, mas todos percebem. Você, em alta definição." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-clip">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <a href="#topo" className="flex items-center gap-3">
            <img src={logo} alt="Vanessa Lunna" className="h-12 w-12 object-contain" />
            <span className="hidden sm:block font-display text-lg tracking-wide">
              Vanessa <em className="font-script text-2xl text-gold-deep ml-1">Lunna</em>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <a href="#filosofia" className="hover:text-foreground transition">Filosofia</a>
            <a href="#servicos" className="hover:text-foreground transition">Serviços</a>
            <a href="#manifesto" className="hover:text-foreground transition">Manifesto</a>
            <a href="#contato" className="hover:text-foreground transition">Contato</a>
          </nav>
          <a
            href="https://wa.me/5581987476681"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] uppercase tracking-[0.25em] border-b border-foreground pb-1 hover:text-gold-deep hover:border-gold-deep transition"
          >
            Agendar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="relative pt-32 pb-24 lg:pt-40 lg:pb-40 grain">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-7 relative z-10 animate-reveal">
            <div className="flex items-center gap-4 mb-10 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-px w-12 bg-gold-deep" />
              <span>Recife · desde 2016</span>
            </div>
            <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] tracking-tight text-balance">
              Beleza tratada
              <br />
              com <em className="font-script text-gold-deep text-[1.2em] leading-none">estratégia</em>
              <br />
              & naturalidade.
            </h1>
            <p className="mt-10 max-w-md text-base lg:text-lg text-muted-foreground leading-relaxed">
              Clínica autoral em Boa Viagem. Da limpeza de pele aos injetáveis mais avançados — protocolos
              desenhados para devolver à sua pele aquilo que sempre foi seu.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <a
                href="#servicos"
                className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] bg-foreground text-background px-8 py-4 hover:bg-gold-deep transition-colors"
              >
                Conheça os rituais
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="https://wa.me/5581987476681"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-display italic text-gold-deep gold-underline pb-1"
              >
                ou converse no WhatsApp
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 relative">
            <img
              src={moon}
              alt=""
              aria-hidden
              className="absolute -top-32 -left-20 w-72 opacity-60 animate-drift pointer-events-none"
            />
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={hero}
                alt="Tratamento facial na Clínica Vanessa Lunna"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10" />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden lg:block bg-cream border border-border p-6 max-w-[240px] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.2)]">
              <p className="font-display italic text-lg leading-snug">
                "Resultados que ninguém aponta, mas todos percebem."
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">— V. Lunna</p>
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="mt-32 border-y border-border/60 py-6 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap font-display text-3xl lg:text-5xl italic text-foreground/80">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="flex items-center gap-12 pr-12">
                <span>Boa Viagem</span><span className="text-gold-deep">✺</span>
                <span>Pina</span><span className="text-gold-deep">✺</span>
                <span>Setúbal</span><span className="text-gold-deep">✺</span>
                <span>Madalena</span><span className="text-gold-deep">✺</span>
                <span>Piedade</span><span className="text-gold-deep">✺</span>
                <span>Centro do Recife</span><span className="text-gold-deep">✺</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="filosofia" className="py-32 lg:py-48 relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-32 self-start">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold-deep mb-8">— I. Filosofia</p>
            <h2 className="font-display text-5xl lg:text-7xl leading-[1] text-balance">
              A pele guarda histórias.
              <br />
              <em className="font-script text-gold-deep text-[1.3em]">Nós</em> sabemos lê-las.
            </h2>
            <img
              src={stillLife}
              alt=""
              loading="lazy"
              className="mt-12 aspect-[4/5] object-cover w-full max-w-sm"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 space-y-16 lg:pt-24">
            {philosophy.map((p, i) => (
              <div key={p.k} className="border-t border-border pt-8 grid grid-cols-12 gap-4">
                <span className="col-span-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground pt-2">
                  0{i + 1}
                </span>
                <div className="col-span-10">
                  <h3 className="font-display text-3xl lg:text-4xl mb-3">{p.k}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{p.v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTRAIT BREAK */}
      <section className="relative py-24 bg-blush/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-5 lg:col-start-2 order-2 lg:order-1">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold-deep mb-6">— breve manifesto</p>
            <p className="font-display text-3xl lg:text-4xl italic leading-snug text-balance">
              Acreditamos que envelhecer é privilégio. Cuidar é gesto. E que a melhor versão de você
              <em className="font-script text-gold-deep text-[1.2em]"> já existe</em> — só precisa de quem saiba enxergá-la.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 order-1 lg:order-2 relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={portrait} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <img src={moon} alt="" aria-hidden className="absolute -top-12 -right-12 w-48 opacity-50 animate-drift" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="py-32 lg:py-48">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-8 mb-20">
            <div className="col-span-12 lg:col-span-4">
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold-deep mb-6">— II. Rituais</p>
              <h2 className="font-display text-5xl lg:text-7xl leading-[0.95]">
                Catálogo
                <br />
                <em className="font-script text-gold-deep text-[1.2em]">de cuidados</em>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8 self-end">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Quatorze protocolos faciais, corporais e capilares — combinados em jornadas únicas
                para cada pele que entra na clínica.
              </p>
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 border-t border-border">
            {services.map((s, i) => (
              <li
                key={s.n}
                className={`group flex items-baseline gap-6 py-7 border-b border-border px-2 hover:bg-blush/30 transition-colors ${
                  i % 2 === 0 ? "md:border-r md:border-border md:pr-10" : "md:pl-10"
                }`}
              >
                <span className="text-[11px] tracking-[0.25em] text-gold-deep w-8">{s.n}</span>
                <div className="flex-1">
                  <h3 className="font-display text-2xl lg:text-3xl">{s.name}</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.note}</p>
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition text-gold-deep">→</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ACCOMPLISHMENTS */}
      <section id="manifesto" className="py-32 lg:py-48 bg-foreground text-background relative overflow-hidden">
        <img
          src={moon}
          alt=""
          aria-hidden
          className="absolute -bottom-40 -right-40 w-[40rem] opacity-20 pointer-events-none"
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-12 gap-8 relative">
          <div className="col-span-12 lg:col-span-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-8">— em números</p>
            <h2 className="font-display text-5xl lg:text-7xl leading-[1] text-balance">
              Quase <em className="font-script text-gold text-[1.3em]">uma década</em>
              <br />
              tratando a beleza
              <br />
              de Recife.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 grid grid-cols-2 gap-x-6 gap-y-12 self-end">
            {[
              { n: "10", l: "anos de clínica autoral" },
              { n: "14", l: "protocolos no portfólio" },
              { n: "06", l: "bairros atendidos" },
              { n: "∞", l: "peles devolvidas à luz" },
            ].map((m) => (
              <div key={m.l} className="border-t border-background/30 pt-4">
                <div className="font-display text-6xl lg:text-7xl text-gold">{m.n}</div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-background/70 mt-3 max-w-[140px]">
                  {m.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contato" className="py-32 lg:py-48">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold-deep mb-8">— III. Encontro</p>
            <h2 className="font-display text-6xl lg:text-[8rem] leading-[0.9] text-balance">
              Vamos
              <br />
              <em className="font-script text-gold-deep text-[1.2em]">conversar</em>
              <span className="text-gold-deep">?</span>
            </h2>
            <p className="mt-10 max-w-md text-lg text-muted-foreground leading-relaxed">
              Marque sua avaliação. Conversaremos sobre sua pele, seus objetivos e o caminho mais elegante
              entre os dois.
            </p>
            <a
              href="https://wa.me/5581987476681"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] bg-foreground text-background px-10 py-5 hover:bg-gold-deep transition-colors"
            >
              Agendar pelo WhatsApp →
            </a>
          </div>
          <aside className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pt-32 space-y-10">
            {[
              { k: "Endereço", v: "Rua General Luís Mallet, 256\nBoa Viagem · Recife — PE" },
              { k: "Funcionamento", v: "Terça a Sábado\n09h às 20h · com hora marcada" },
              { k: "Contato", v: "(81) 98747-6681\nvanessaluna_26@hotmail.com" },
              { k: "Instagram", v: "@vanessalunna_estetica" },
            ].map((b) => (
              <div key={b.k} className="border-t border-border pt-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold-deep mb-2">{b.k}</p>
                <p className="font-display text-xl whitespace-pre-line leading-snug">{b.v}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-8 w-8 object-contain" />
            <span>Vanessa Lunna · Fisioterapia Estética</span>
          </div>
          <p>© {new Date().getFullYear()} · Recife — PE</p>
        </div>
      </footer>
    </main>
  );
}
