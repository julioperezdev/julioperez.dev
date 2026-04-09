import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function RopaSection() {
  return (
    <section id="store" className="py-20 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* 2 designs */}
          <div className="flex gap-3 flex-shrink-0">
            {["/design1.png", "/design2.png"].map((src, i) => (
              <div
                key={i}
                className="w-36 h-36 md:w-44 md:h-44 rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/10 group"
              >
                <Image
                  src={src}
                  alt={`Ropa de Programador diseño ${i + 1}`}
                  width={176}
                  height={176}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Text + CTA */}
          <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest font-label text-on-surface-variant mb-2">
                ropadeprogramador.com
              </p>
              <h3 className="text-2xl md:text-3xl font-headline font-bold text-on-surface leading-tight">
                Conseguí las remeras<br />
                <span className="text-secondary">que uso en mis videos.</span>
              </h3>
            </div>

            <a
              href="https://ropadeprogramador.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-secondary/40 text-secondary font-headline font-bold px-7 py-3 rounded-lg hover:bg-secondary/10 transition-all cursor-pointer"
            >
              Ver tienda
              <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
