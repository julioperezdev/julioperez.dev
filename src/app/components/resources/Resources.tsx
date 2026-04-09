import { ShoppingBag } from "lucide-react";

export default function Resources() {
  return (
    <section id="store" className="py-24 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-lg">
          <div className="p-8 bg-surface-container-lowest rounded-xl border border-outline-variant/10 flex items-center gap-8">
            <div className="w-24 h-32 bg-surface-container-high rounded shadow-xl border border-outline-variant/20 flex-shrink-0 flex items-center justify-center">
              <ShoppingBag size={36} className="text-tertiary/50" />
            </div>
            <div>
              <h4 className="text-lg font-headline font-bold mb-2 text-on-surface">
                The Engineer&apos;s Store
              </h4>
              <p className="text-sm text-on-surface-variant mb-4 font-body">
                Componentes, plantillas y cursos especializados.
              </p>
              <a
                href="https://julioperez.flashcookie.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tertiary text-xs font-label font-bold uppercase tracking-widest border-b border-tertiary/30 pb-1 hover:border-tertiary transition-all cursor-pointer"
              >
                Visitar Tienda
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
