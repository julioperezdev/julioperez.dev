'use client'

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Libro", href: "#book" },
  { label: "Ropa de Programador", href: "#store" },
];

export default function NavbarComponent() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131317]/80 backdrop-blur-xl transition-all duration-300">
      <div className="flex justify-between items-center px-6 md:px-8 h-20 w-full max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tighter text-primary font-headline"
        >
          julioperez.dev
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8 font-headline tracking-tight">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={
                i === 0
                  ? "text-primary border-b border-primary/60 pb-0.5 transition-colors duration-300"
                  : "text-on-surface-variant hover:text-primary transition-colors duration-300"
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:contacto@julioperez.dev"
            className="hidden md:inline-flex cursor-pointer bg-transparent border border-outline-variant/30 text-primary px-6 py-2 rounded-lg font-headline font-medium hover:bg-surface-container-high transition-all active:scale-95 duration-200"
          >
            Contacto
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-on-surface p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface-container-low border-t border-outline-variant/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-on-surface-variant hover:text-primary transition-colors font-headline py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:contacto@julioperez.dev"
            className="mt-2 inline-flex justify-center cursor-pointer border border-outline-variant/30 text-primary px-6 py-2 rounded-lg font-headline font-medium hover:bg-surface-container-high transition-all"
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}
