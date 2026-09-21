import { motion, useAnimationControls, useReducedMotion, type Variants } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowDown, AtSign, Instagram, type LucideIcon } from "lucide-react";
import candidatePhotoAsset from "@/assets/Nara_5.png";
import classroomPhotoAsset from "@/assets/educacao-antirracista.png";
import manifestoPhotoAsset from "@/assets/nara-manifesto.png";
import naraStickerAsset from "@/assets/figurinha-nara-rede.png";
import fistPencilIconAsset from "@/assets/icone-punho-lapis-creme.png";
import personIconAsset from "@/assets/icone-pessoa.png";
import minasIconAsset from "@/assets/icone-minas.png";
import ellipsesIconAsset from "@/assets/icone-elipses.png";
import bookPencilIconAsset from "@/assets/icone-livro-lapis.png";

const rise: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={rise}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
    >
      {children}
    </motion.div>
  );
}

function PhotoPlaceholder({ label, variant = "photo" }: { label: string; variant?: "photo" | "illustration" }) {
  return (
    <div className={`relative grid h-full min-h-72 w-full place-items-center overflow-hidden border-2 border-deep-blue/30 ${variant === "illustration" ? "bg-cream/10 text-cream" : "bg-pink/15 text-deep-blue"}`} role="img" aria-label={label}>
      <svg viewBox="0 0 400 480" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <circle cx="200" cy="150" r="72" fill="currentColor" opacity=".16" />
        <path d="M78 470c8-128 48-204 122-204s114 76 122 204H78Z" fill="currentColor" opacity=".16" />
        <path d="M28 82h96V28M276 452h96v-54" fill="none" stroke="currentColor" strokeWidth="8" opacity=".28" />
      </svg>
      <div className="relative max-w-48 text-center">
        <span className="mx-auto mb-3 block h-px w-12 bg-current opacity-50" />
        <p className="text-xs font-bold uppercase tracking-[0.18em]">{label}</p>
      </div>
    </div>
  );
}

const navLinks = [
  { label: "Sobre", href: "#inicio" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Mandato", href: "#mandato" },
];

function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-black/5 bg-cream shadow-sm">
      <div className="flex w-full flex-col items-stretch justify-between pl-0 lg:h-14 lg:flex-row lg:items-stretch lg:gap-6 lg:pr-6">
        <div className="flex shrink-0 items-stretch">
          <div className="relative z-40 flex h-14 w-fit items-center justify-center whitespace-nowrap bg-green pl-6 pr-10 font-sans text-sm font-black uppercase leading-none text-cream [clip-path:polygon(0%_0%,calc(100%_-_24px)_0%,100%_50%,calc(100%_-_24px)_100%,0%_100%)] [font-stretch:ultra-condensed]">
            Professora
          </div>
          <div className="relative z-30 -ml-[24px] flex h-14 w-fit items-center justify-center whitespace-nowrap bg-pink px-10 font-sans text-lg font-black uppercase leading-none text-graphite [clip-path:polygon(0%_0%,calc(100%_-_24px)_0%,100%_50%,calc(100%_-_24px)_100%,0%_100%,24px_50%)] [font-stretch:ultra-condensed]">
            Nara
          </div>
          <div className="relative z-20 -ml-[24px] flex h-14 w-fit items-center justify-center whitespace-nowrap bg-orange px-10 font-sans text-2xl font-black uppercase leading-none text-graphite [clip-path:polygon(0%_0%,100%_0%,calc(100%_-_24px)_50%,100%_100%,0%_100%,24px_50%)]">
            18018
          </div>
          <div className="relative z-10 -ml-[24px] flex h-14 w-fit items-center justify-center whitespace-nowrap bg-lilac pl-10 pr-6 font-sans text-sm font-medium uppercase leading-none text-cream [clip-path:polygon(24px_0%,100%_0%,100%_100%,24px_100%,0%_50%)] [font-stretch:ultra-condensed]">
            Deputada Estadual
          </div>
        </div>
        <nav aria-label="Seções da página" className="mx-auto hidden h-full lg:flex">
          <ul className="flex h-full items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-base font-medium text-graphite transition-colors duration-200 hover:text-pink-deep">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="overflow-hidden bg-cream px-4 pb-16 pt-60 sm:px-6 md:pb-24 lg:pt-40">
      <div className="mx-auto grid min-h-[calc(100svh-13rem)] max-w-7xl items-center gap-12 lg:grid-cols-2 lg:px-4">
        <motion.div variants={stagger} initial="hidden" animate="show" className="relative z-10">
          <motion.p variants={rise} className="mb-5 text-sm font-bold uppercase text-green">Professora • Vereadora • Candidata a Deputada Estadual</motion.p>
          <motion.h1 variants={rise} className="max-w-2xl text-5xl leading-[0.95] text-deep-blue sm:text-7xl lg:text-8xl">
            <span className="font-light">Minas feita de </span><span className="font-black">diálogo e cuidado.</span>
          </motion.h1>
          <motion.p variants={rise} className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-graphite">
            Vereadora do diálogo, da educação pública, da educação antirracista, dos territórios e do cuidado com as pessoas.
          </motion.p>
          <motion.div variants={rise} className="mt-8 flex items-center gap-5">
            <a href="#mandato" className="inline-flex items-center gap-2 text-sm font-bold text-deep-blue transition-colors duration-200 hover:text-pink-deep">Conheça minha história <ArrowDown className="size-4" aria-hidden="true" /></a>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: "easeOut" }} className="relative mx-auto mt-24 h-[34rem] w-full max-w-lg lg:h-[42rem]">
          <div className="absolute left-0 top-8 h-[78%] w-[72%] bg-deep-blue" />
          <div className="absolute bottom-0 right-0 h-[58%] w-[68%] bg-orange" />
          <div className="absolute bottom-8 left-8 right-6 top-0 z-10 overflow-hidden border-2 border-deep-blue/30 sm:left-14 sm:right-10">
            <img src={candidatePhotoAsset} alt="Professora Nara sorrindo, de braços cruzados, em uma rua de Belo Horizonte" className="h-full w-full rounded-none object-cover object-top" />
          </div>
          <img src={naraStickerAsset} alt="Figurinha da campanha com os dizeres “to com Nara!”, “Deputada Estadual” e o número 18018, em letras coloridas com contorno creme e estrelinhas" width={512} height={512} className="absolute right-5 -top-16 z-20 w-32 -rotate-6 drop-shadow-xl sm:-top-20 sm:w-40 lg:right-0 lg:-top-26 lg:w-52" />
        </motion.div>
      </div>
    </section>
  );
}

const marqueeSequences = [
  "PROFESSORA NARA • DEPUTADA ESTADUAL • 18018 • PROFESSORA NARA • DEPUTADA ESTADUAL • 18018 • PROFESSORA NARA • DEPUTADA ESTADUAL • 18018 • PROFESSORA NARA • DEPUTADA ESTADUAL * 18018 * ",
  "PROFESSORA NARA * DEPUTADA ESTADUAL • 18018 • PROFESSORA NARA • DEPUTADA ESTADUAL • 18018 • PROFESSORA NARA • DEPUTADA ESTADUAL • 18018 • PROFESSORA NARA • DEPUTADA ESTADUAL • 18018 •",
  "PROFESSORA NARA * DEPUTADA ESTADUAL * 18018 * PROFESSORA NARA • DEPUTADA ESTADUAL • 18018 • PROFESSORA NARA • DEPUTADA ESTADUAL • 18018 • PROFESSORA NARA • DEPUTADA ESTADUAL • 18018 •",
];
const marqueeDuration = 70;

function MarqueeTrack({ direction, className, paused, sequence }: { direction: "left" | "right"; className: string; paused: boolean; sequence: string }) {
  const controls = useAnimationControls();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || paused) {
      controls.stop();
      return;
    }

    void controls.start({
      x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: { duration: marqueeDuration, ease: "linear", repeat: Infinity },
    });
  }, [controls, direction, paused, reduceMotion]);

  return (
    <div
      className={`overflow-hidden py-3 sm:py-4 ${className}`}
      data-marquee-track
    >
      <motion.div
        className="flex w-max whitespace-nowrap text-5xl font-black uppercase leading-none sm:text-6xl"
        initial={false}
        animate={controls}
      >
        <span>{sequence}</span>
        <span aria-hidden="true">{sequence}</span>
      </motion.div>
    </div>
  );
}

function DoubleMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      aria-label="Professora Nara, candidata a deputada estadual, 18018"
      className="overflow-hidden"
      data-double-marquee
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div>
        <MarqueeTrack direction="left" className="bg-pink text-cream" paused={paused} sequence={marqueeSequences[0]!} />
        <MarqueeTrack direction="right" className="bg-orange text-graphite" paused={paused} sequence={marqueeSequences[2]!} />
      </div>
    </section>
  );
}

function TriangleMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 320" className={className} aria-hidden="true" focusable="false">
      <polygon points="160,24 304,296 16,296" fill="currentColor" />
    </svg>
  );
}

type Achievement = { kicker: string; title: string; text: string; className: string; icon?: LucideIcon; image?: string };

const achievements: Achievement[] = [
  { kicker: "Lei", title: "11.818/2025", text: "Um mandato que transforma escuta em política pública.", className: "bg-deep-blue text-cream", image: bookPencilIconAsset },
  { kicker: "Representação", title: "Líder de Bancada", text: "Na Câmara Municipal de Belo Horizonte.", className: "bg-pink text-graphite", image: fistPencilIconAsset },
  { kicker: "Trajetória de votos", title: "2.670 → 5.497", text: "Confiança que cresceu com trabalho presente nos territórios.", className: "bg-orange text-graphite", image: personIconAsset },
];

function Mandate() {
  return (
    <section id="mandato" className="scroll-mt-48 bg-cream px-4 py-16 sm:px-6 md:py-24 lg:scroll-mt-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal><p className="text-sm font-black uppercase text-pink-deep">O que já fiz</p><h2 className="mt-2 text-4xl text-deep-blue sm:text-6xl"><span className="font-light">Mandato em </span><span className="font-black">números</span></h2></Reveal>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.16 }} className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {achievements.map(({ kicker, title, text, className, icon: Icon, image }: Achievement) => (
            <motion.article key={title} variants={rise} className={`relative flex h-full min-h-80 flex-col justify-end overflow-hidden p-7 text-left sm:p-9 ${className}`}>
              <div className="mb-auto flex items-center justify-between gap-4">
                <p className="text-sm font-black uppercase opacity-80">{kicker}</p>
                {Icon ? <Icon className="size-8" strokeWidth={2.5} aria-hidden="true" /> : <img src={image} alt="" aria-hidden="true" className="h-9 w-auto max-w-14 object-contain" />}
              </div>
              <h3 className="mt-12 text-5xl font-black leading-none sm:text-6xl">{title}</h3>
              <p className="mt-3 max-w-md font-semibold leading-relaxed opacity-90">{text}</p>
              <TriangleMark className="absolute -bottom-10 -right-10 h-36 w-36 rotate-12 opacity-20" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Journey() {
  const points = ["Nascida em Belo Horizonte", "Formada em Pedagogia", "Fundadora do Instituto da Quebrada, desde 2020", "Professora da Quebrada"];
  return (
    <section id="sobre" className="scroll-mt-48 bg-cream px-4 pb-28 pt-8 sm:px-6 md:pb-40 md:pt-12 lg:scroll-mt-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-[1.35fr_.65fr]">
        <Reveal>
          <p className="mb-6 text-sm font-black uppercase text-green">Trajetória</p>
          <h2 className="text-4xl leading-tight text-deep-blue sm:text-6xl"><span className="font-black">Dediquei 33 anos </span><span className="font-light">da minha vida à educação pública de Belo Horizonte.</span></h2>
        </Reveal>
        <motion.ol id="trajetoria" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="scroll-mt-48 space-y-4 border-l-2 border-orange pl-7 lg:scroll-mt-24">
          {points.map((point, index) => <motion.li variants={rise} key={point} className="relative border-b border-deep-blue/15 py-3 text-lg font-bold text-graphite"><span className="absolute -left-[2.15rem] top-5 h-3 w-3 rounded-full bg-pink ring-4 ring-cream" /> <span className="mr-3 text-sm text-pink-deep">0{index + 1}</span>{point}</motion.li>)}
        </motion.ol>
      </div>
    </section>
  );
}

function AntiRacistEducation() {
  return (
    <section className="bg-green px-4 py-14 text-cream sm:px-6 md:py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
        <Reveal><p className="mb-4 text-sm font-black uppercase text-cream">Educação antirracista</p><h2 className="text-4xl leading-tight sm:text-6xl"><span className="font-light">Não existe educação de qualidade sem </span><span className="font-black">enfrentamento das desigualdades raciais.</span></h2></Reveal>
        <Reveal className="relative z-10 lg:-my-36 lg:-mr-6">
          <div className="h-[32rem] overflow-hidden border-2 border-cream/30 sm:h-[38rem] lg:h-[44rem]">
            <img src={classroomPhotoAsset} alt="Professora Nara lecionando diante de uma turma em Belo Horizonte" className="h-full w-full rounded-none object-cover object-center" loading="lazy" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TerritoryCare() {
  return (
    <section className="bg-cream px-4 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-40 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[7fr_3fr]">
        <Reveal className="relative min-h-96 overflow-hidden bg-orange p-8 text-graphite sm:p-12"><div className="flex items-start justify-between gap-4"><p className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl">Território</p><img src={minasIconAsset} alt="" aria-hidden="true" className="size-10 shrink-0 object-contain" /></div><h2 className="mt-12 max-w-3xl text-4xl leading-tight sm:text-6xl"><span className="font-black">Décadas de trabalho </span><span className="font-light">na Regional Nordeste de BH.</span></h2><p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed">É no território, ouvindo de perto cada comunidade, que a política encontra sentido e constrói soluções reais.</p></Reveal>
        <Reveal className="flex min-h-96 flex-col justify-between bg-orange-red p-8 text-graphite sm:p-10"><div className="flex items-start justify-between gap-4"><p className="text-4xl font-black uppercase leading-none sm:text-5xl lg:text-6xl">Cuidado</p><img src={ellipsesIconAsset} alt="" aria-hidden="true" className="h-10 w-auto shrink-0 object-contain" /></div><div><h3 className="mt-10 text-3xl font-black">Defendo também as políticas de cuidado.</h3><p className="mt-5 font-semibold leading-relaxed">Cuidar de quem cuida é reconhecer, proteger e valorizar vidas.</p></div></Reveal>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="w-full bg-pink">
      <h2 className="sr-only">Manifesto</h2>
      <div className="grid w-full min-h-[600px] lg:grid-cols-2">
        <Reveal className="relative h-[400px] w-full overflow-hidden sm:h-[480px] lg:h-auto lg:min-h-[600px]">
          <img
            src={manifestoPhotoAsset}
            alt="Professora Nara sorrindo de braços abertos em frente a uma lagoa, com casas de uma comunidade de Belo Horizonte ao fundo"
            loading="lazy"
            className="absolute inset-0 h-full w-full rounded-none object-cover object-center"
          />
        </Reveal>
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="flex min-h-[600px] w-full flex-col justify-center bg-pink px-6 py-16 sm:px-12 md:py-24 lg:px-16"
        >
          <span className="mb-6 block text-8xl font-black leading-[0.6] text-cream opacity-30 lg:text-9xl" aria-hidden="true">“</span>
          <p className="max-w-2xl text-2xl font-light leading-snug text-cream lg:text-3xl">
            Acredito na política <strong className="font-black">olho no olho</strong> e no <strong className="font-black">diálogo</strong>. É assim que venho construindo <strong className="font-black">confiança</strong> na Câmara de Belo Horizonte, e é dessa forma que vou agir na Assembleia.
          </p>
          <footer className="mt-12 text-xl font-black uppercase leading-none text-cream lg:text-2xl">
            <cite className="not-italic">Professora Nara</cite> · 18018
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-deep-blue px-4 py-10 text-center text-cream">
      <p className="text-xl"><span className="font-light">Professora </span><span className="font-black">Nara</span> <span className="mx-2 text-pink">|</span> <strong>18018</strong></p>
      <p className="mx-auto mt-3 max-w-4xl text-sm font-semibold leading-relaxed text-cream">
        Eleições 2026 Nara Lucia de Paula Fan Deputado Estadual <span className="mx-2">|</span> CNPJ: 68.438.182/0001-10 <span className="mx-2">|</span> FEDERAÇÃO PSOL-REDE
      </p>
      <nav aria-label="Redes sociais da candidata" className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        <a href="https://www.instagram.com/professoranarabh/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-cream transition-colors duration-200 hover:text-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink">
          <Instagram className="size-5" aria-hidden="true" /> Instagram
        </a>
        <a href="https://www.threads.com/@professoranarabh" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-cream transition-colors duration-200 hover:text-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink">
          <AtSign className="size-5" aria-hidden="true" /> Threads
        </a>
      </nav>
    </footer>
  );
}

export function CampaignPage() {
  return <div className="min-h-screen overflow-x-hidden bg-cream font-sans"><Header /><main><Hero /><DoubleMarquee /><Mandate /><Journey /><AntiRacistEducation /><TerritoryCare /><Manifesto /></main><Footer /></div>;
}
