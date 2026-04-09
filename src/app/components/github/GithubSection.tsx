import { GitFork, Star, ArrowRight } from "lucide-react";

const repos = [
  {
    name: "ropa-de-programador-api",
    description: "API REST de Ropa de Programador. Gestión de productos, órdenes e integración con pasarela de pagos.",
    language: "Java",
    langColor: "bg-[#b07219]",
    href: "https://github.com/julioperezdev/ropa-de-programador-api",
  },
  {
    name: "rag-sales-offhours",
    description: "Sistema RAG para atención de ventas fuera de horario. Recuperación semántica con embeddings.",
    language: "TypeScript",
    langColor: "bg-[#3178c6]",
    href: "https://github.com/julioperezdev/rag-sales-offhours",
  },
  {
    name: "engineering-playbooks",
    description: "Guías y estándares de ingeniería para equipos de desarrollo. Prácticas de Backend y Cloud.",
    language: "Markdown",
    langColor: "bg-[#083fa1]",
    href: "https://github.com/julioperezdev/engineering-playbooks",
  },
  {
    name: "juliopredictor",
    description: "Webapp que predice la tendencia de las top 300 criptomonedas usando análisis técnico.",
    language: "Java",
    langColor: "bg-[#b07219]",
    href: "https://github.com/julioperezdev/juliopredictor",
  },
];

export default function GithubSection() {
  return (
    <section className="py-20 border-t border-outline-variant/10 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[10px] uppercase tracking-widest font-label text-on-surface-variant/50 mb-2">
              github.com/julioperezdev
            </p>
            <h2 className="text-3xl font-headline font-bold text-on-surface">
              Proyectos open source
            </h2>
          </div>
          <a
            href="https://github.com/julioperezdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm font-label uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
          >
            Ver todos
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Repo grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-surface-container-low rounded-xl border border-outline-variant/10 hover:border-primary/20 hover:bg-surface-container-high transition-all duration-200 flex flex-col gap-3 cursor-pointer"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  {/* Folder icon */}
                  <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                  </svg>
                  <span className="text-sm font-headline font-bold text-primary group-hover:underline truncate">
                    {repo.name}
                  </span>
                </div>
                <ArrowRight size={14} className="text-on-surface-variant/30 group-hover:text-primary flex-shrink-0 transition-colors mt-0.5" />
              </div>

              <p className="text-xs text-on-surface-variant font-body leading-relaxed line-clamp-2">
                {repo.description}
              </p>

              <div className="flex items-center gap-2 mt-auto">
                <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${repo.langColor}`} />
                <span className="text-[11px] text-on-surface-variant font-label">
                  {repo.language}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-6 md:hidden">
          <a
            href="https://github.com/julioperezdev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-label uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
          >
            Ver todos los repositorios
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
