import { Database, Cloud, Cpu } from "lucide-react";

const pillars = [
  {
    icon: Database,
    color: "text-primary",
    title: "Backend",
    description:
      "Diseño de APIs robustas, optimización de consultas y microservicios que soportan cargas reales.",
    border: "md:border-r border-outline-variant/10",
  },
  {
    icon: Cloud,
    color: "text-tertiary",
    title: "Cloud",
    description:
      "Arquitecturas serverless y contenedores. Infraestructura como código pensada para la evolución.",
    border: "md:border-r border-outline-variant/10",
  },
  {
    icon: Cpu,
    color: "text-secondary",
    title: "AI Aplicada",
    description:
      "Implementación práctica de modelos de lenguaje en flujos de trabajo de ingeniería.",
    border: "",
  },
];

export default function CorePillars() {
  return (
    <section id="content" className="pt-8 md:pt-10 pb-0 bg-surface-dim">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <p className="text-[10px] uppercase tracking-widest font-label text-on-surface-variant/50 mb-4">
          Mis especialidades
        </p>
        <div className="grid md:grid-cols-3 gap-1">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`p-6 md:p-8 bg-surface-container-low transition-all hover:bg-surface-container-high group border-b md:border-b-0 ${pillar.border}`}
              >
                <Icon
                  size={28}
                  className={`${pillar.color} mb-4 md:mb-5 group-hover:scale-110 transition-transform`}
                />
                <h3 className="text-lg md:text-xl font-headline font-bold text-on-surface mb-2 md:mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
