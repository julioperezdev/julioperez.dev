import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

const reelTopics = [
  { bg: "bg-surface-container-high", label: "Go" },
  { bg: "bg-surface-container", label: "Kubernetes" },
  { bg: "bg-surface-container-high", label: "PostgreSQL" },
  { bg: "bg-surface-container", label: "Docker" },
  { bg: "bg-surface-container-high", label: "Terraform" },
  { bg: "bg-surface-container", label: "LLMs" },
];

const topics = [
  { color: "text-primary border-primary/20", label: "Backend" },
  { color: "text-tertiary border-tertiary/20", label: "Cloud" },
  { color: "text-secondary border-secondary/20", label: "IA Aplicada" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[921px] flex items-center justify-center overflow-hidden neo-noir-grid">
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10 grid md:grid-cols-2 gap-16 items-center py-24">

        {/* Left column */}
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-surface-container-high px-3 py-1 rounded-sm border border-outline-variant/10">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-label font-semibold text-on-surface-variant">
              Contenido técnico · Instagram
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-headline font-bold leading-[0.95] tracking-tighter text-on-surface">
            Aprende<br />
            <span className="text-primary italic">sistemas reales.</span><br />
            Sin rodeos.
          </h1>

          <p className="text-xl text-on-surface-variant font-body max-w-xl leading-relaxed">
            Creo contenido técnico sobre Backend, Cloud e IA en Instagram.
            Directo al punto, con código real.
          </p>

          {/* Topic chips */}
          <div className="flex flex-wrap gap-3">
            {topics.map((t) => (
              <span
                key={t.label}
                className={`text-xs font-label font-semibold uppercase tracking-widest px-3 py-1.5 rounded-sm border bg-surface-container-high ${t.color}`}
              >
                {t.label}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://www.instagram.com/julioperez.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-gradient-cta text-on-primary font-headline font-bold px-8 py-4 rounded-lg text-base hover:shadow-[0_0_30px_rgba(207,189,255,0.3)] transition-all cursor-pointer flex items-center gap-2"
            >
              Seguir en Instagram
              <ArrowRight size={18} />
            </a>
            <a
              href="#book"
              className="border border-outline-variant/30 text-on-surface font-headline font-bold px-8 py-4 rounded-lg text-base hover:bg-surface-container-low transition-all cursor-pointer"
            >
              Ver el libro
            </a>
          </div>
        </div>

        {/* Right column — Instagram profile mockup */}
        <div className="hidden md:flex justify-center">
          <div className="w-72 bg-surface-container-lowest rounded-2xl border border-outline-variant/15 overflow-hidden shadow-2xl">
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-outline-variant/10">
              <span className="text-xs font-label text-on-surface-variant tracking-wide">Instagram</span>
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-surface-container-high" />
                <span className="w-2 h-2 rounded-full bg-surface-container-high" />
                <span className="w-2 h-2 rounded-full bg-surface-container-high" />
              </div>
            </div>

            {/* Profile header */}
            <div className="px-5 py-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full border-2 border-primary/40 p-0.5 flex-shrink-0 overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt="Julio Pérez"
                    width={56}
                    height={56}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-sm font-headline font-bold text-on-surface">julioperez.dev</p>
                  <p className="text-[11px] text-on-surface-variant font-body mt-0.5">Backend · Cloud · IA</p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-[11px] text-on-surface-variant font-body leading-relaxed mb-4">
                Sistemas escalables, arquitectura cloud e IA aplicada. Sin filtros. 🚀
              </p>

              {/* Follow button */}
              <a
                href="https://www.instagram.com/julioperez.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center text-xs font-headline font-bold py-2 rounded-lg primary-gradient-cta text-on-primary cursor-pointer"
              >
                Seguir
              </a>
            </div>

            {/* Content grid — topics */}
            <div className="grid grid-cols-3 gap-0.5">
              {reelTopics.map((reel, i) => (
                <div
                  key={i}
                  className={`aspect-square ${reel.bg} relative flex items-end justify-start p-1.5 group cursor-pointer`}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                    <Play size={18} className="text-white fill-white" />
                  </div>
                  <span className="text-[8px] font-mono text-on-surface-variant/60 relative z-10">
                    {reel.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
