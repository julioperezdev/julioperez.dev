'use client'

import Image from "next/image";
import { useState } from "react";
import { Check, ShieldCheck, Lock } from "lucide-react";

const BOOK_FEATURES = [
  "Guía entre backend, sistemas y IA",
  "Convierte la duda en un camino claro",
  "Pensado para desarrolladores en crecimiento",
  "Por Julio Pérez — con código y experiencia real",
];

export default function BookSection() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: connect to your payment gateway (Stripe, MercadoPago, etc.)
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <section id="book" className="py-24 bg-surface-dim border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Section header */}
        <div className="mb-14">
          <div className="inline-flex items-center space-x-2 bg-surface-container-high px-3 py-1 rounded-sm border border-outline-variant/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-label font-semibold text-on-surface-variant">
              Libro · Por Julio Pérez
            </span>
          </div>
          <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">
            Aprender Programación
          </h2>
          <p className="text-on-surface-variant font-body mt-2">
            y convertir la duda en camino
          </p>
          <div className="h-1 w-12 bg-primary mt-4" />
        </div>

        {/* 2-column grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT — Real book cover */}
          <div className="flex flex-col items-center md:items-start gap-10">
            {/* Book with depth effect */}
            <div className="relative select-none">
              {/* Page depth layers */}
              <div className="absolute left-2 top-2 w-full h-full bg-surface-container rounded-xl opacity-60" />
              <div className="absolute left-1 top-1 w-full h-full bg-surface-container-high rounded-xl opacity-80" />
              {/* Main cover */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/5 w-56 md:w-64">
                <Image
                  src="/book-cover.png"
                  alt="Aprender Programación y convertir la duda en camino — por Julio Pérez"
                  width={320}
                  height={460}
                  className="w-full h-auto block"
                  priority
                />
              </div>
            </div>

            {/* Feature list */}
            <ul className="space-y-3 w-full max-w-sm">
              {BOOK_FEATURES.map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-sm text-on-surface-variant font-body">
                  <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>

            {/* Closing quote */}
            <blockquote className="w-full max-w-sm border-l-2 border-primary/40 pl-5 space-y-3">
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                Si logro que entiendas cómo hacer una API, bases de datos, testing y deploys,
                cumplí parte de mi propósito.
              </p>
              <p className="text-base text-on-surface font-body leading-relaxed font-medium">
                Pero más importante es si te ayudé a dejar de mirar este mundo
                como si fuese para otros, y que empieces a reconocerte
                <span className="text-primary"> como parte de él.</span>
              </p>
              <footer className="text-[11px] font-label uppercase tracking-widest text-on-surface-variant/50 pt-1">
                — Julio Pérez, del libro
              </footer>
            </blockquote>
          </div>

          {/* RIGHT — Checkout form */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/10 p-8">
            {/* Price */}
            <div className="mb-8">
              <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-1">
                Precio único
              </p>
              <div className="flex items-end gap-2">
                <span className="text-5xl font-headline font-bold text-on-surface">$29</span>
                <span className="text-on-surface-variant font-body mb-2">USD</span>
              </div>
              <p className="text-xs text-on-surface-variant font-body mt-1">
                Acceso de por vida · PDF + ePub
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="book-name"
                  className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2"
                >
                  Nombre completo
                </label>
                <input
                  id="book-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Julio Perez"
                  className="w-full bg-surface-container-high border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface font-body text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/60 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="book-email"
                  className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2"
                >
                  Email
                </label>
                <input
                  id="book-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full bg-surface-container-high border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface font-body text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/60 transition-colors"
                />
              </div>

              {/* Payment gateway slot */}
              <div>
                <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2">
                  Pago seguro
                </label>
                {/* ↓ Replace with your payment gateway embed: Stripe Elements, MercadoPago Brick, etc. */}
                <div className="w-full bg-surface-container-high border border-outline-variant/20 rounded-lg px-4 py-4 flex items-center gap-3 text-on-surface-variant/40 text-sm font-body select-none">
                  <Lock size={15} className="flex-shrink-0" />
                  <span>Pasarela de pago — integrar aquí</span>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full primary-gradient-cta text-on-primary font-headline font-bold px-8 py-4 rounded-lg text-base hover:shadow-[0_0_30px_rgba(207,189,255,0.3)] transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer mt-2"
              >
                {loading ? "Procesando..." : "Comprar ahora — $29 USD"}
              </button>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-2 pt-1 text-on-surface-variant/40">
                <ShieldCheck size={14} />
                <span className="text-[11px] font-label">
                  Pago seguro · Reembolso en 7 días
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
