import Image from "next/image";
import { Play } from "lucide-react";

const videos = [
  {
    image: "/ide.png",
    imageAlt: "Video sobre distributed locks",
    tag: "Backend",
    tagColor: "text-tertiary",
    duration: "12 min",
    title: "Distributed Locks en sistemas de alta escala",
    excerpt:
      "Patrones de concurrencia y prevención de race conditions en entornos distribuidos.",
    href: "https://www.instagram.com/julioperez.dev/",
  },
  {
    image: "/design1.png",
    imageAlt: "Video sobre Terraform",
    tag: "Cloud",
    tagColor: "text-secondary",
    duration: "8 min",
    title: "Terraform Modules para ops multi-región",
    excerpt:
      "Cómo estructurar IaC para mantener la consistencia entre múltiples proveedores.",
    href: "https://www.instagram.com/julioperez.dev/",
  },
  {
    image: "/design2.png",
    imageAlt: "Video sobre RAG",
    tag: "AI",
    tagColor: "text-primary",
    duration: "15 min",
    title: "RAG: más allá de los embeddings simples",
    excerpt:
      "Mejorando la precisión de búsqueda semántica con técnicas avanzadas de reranking.",
    href: "https://www.instagram.com/julioperez.dev/",
  },
];

export default function FeaturedContent() {
  return (
    <section id="content" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">
              Contenido reciente
            </h2>
            <div className="h-1 w-12 bg-primary mt-4" />
          </div>
          <a
            href="https://www.instagram.com/julioperez.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-label uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
          >
            Ver todo en Instagram
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <a
              key={video.title}
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
            >
              {/* Thumbnail with play overlay */}
              <div className="relative aspect-video bg-surface-container-low mb-6 overflow-hidden rounded-lg">
                <Image
                  src={video.image}
                  alt={video.imageAlt}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-background/60 backdrop-blur-sm border border-outline-variant/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <Play size={18} className="text-on-surface fill-on-surface ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-3">
                <span
                  className={`text-[10px] font-label font-bold uppercase tracking-widest py-1 px-2 bg-surface-container-high ${video.tagColor}`}
                >
                  {video.tag}
                </span>
                <span className="text-xs text-on-surface-variant font-body">
                  {video.duration}
                </span>
              </div>
              <h4 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">
                {video.title}
              </h4>
              <p className="mt-2 text-on-surface-variant text-sm line-clamp-2">
                {video.excerpt}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
