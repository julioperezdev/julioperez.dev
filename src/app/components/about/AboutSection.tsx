import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-surface-dim relative overflow-hidden">
      <div className="max-w-2xl mx-auto px-6 md:px-8 text-center relative z-10">

        <div className="mb-10 inline-block">
          <div className="w-20 h-20 rounded-full border-2 border-primary/20 p-1 mx-auto">
            <Image
              src="/profile.png"
              alt="Julio Pérez"
              className="w-full h-full object-cover rounded-full"
              width={80}
              height={80}
            />
          </div>
        </div>

        <p className="text-[11px] uppercase tracking-widest font-label text-on-surface-variant/50 mb-8">
          Julio Pérez · julioperez.dev
        </p>

        <p className="text-2xl md:text-3xl font-headline font-bold text-on-surface leading-snug mb-6">
          No construyo contenido para los que ya saben.
        </p>

        <p className="text-lg text-on-surface-variant font-body leading-relaxed">
          Lo construyo para el que todavía siente que la programación es territorio ajeno.
          Cada video, cada página del libro, cada línea de código que comparto
          tiene un solo objetivo:{" "}
          <span className="text-primary font-medium">
            que te veas a vos mismo adentro de este mundo, no mirándolo desde afuera.
          </span>
        </p>

        <div className="mt-10 md:mt-12 flex flex-wrap justify-center gap-6 md:gap-8">
          <a
            href="https://www.instagram.com/julioperez.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-label uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/channel/UCcQifbSRJXkn4UxzaCQbeSA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-label uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
          >
            YouTube
          </a>
          <a
            href="https://calendly.com/julioperez-contact/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-label uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
          >
            Asesoría
          </a>
        </div>
      </div>

      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
