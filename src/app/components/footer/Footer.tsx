export default function Footer() {
  return (
    <footer className="bg-[#131317] border-t border-[#353439]/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-8 py-12 w-full max-w-7xl mx-auto gap-8">
        {/* Copyright */}
        <div className="font-body text-xs uppercase tracking-widest text-on-surface-variant/50">
          © {new Date().getFullYear()} julioperez.dev — All rights reserved.
        </div>

        {/* Links */}
        <div className="flex gap-8 md:gap-12">
          <a
            href="/terminos"
            className="font-body text-xs uppercase tracking-widest text-on-surface-variant/50 hover:text-tertiary transition-all opacity-80 hover:opacity-100"
          >
            Términos y condiciones
          </a>
          <a
            href="mailto:contacto@julioperez.dev"
            className="font-body text-xs uppercase tracking-widest text-on-surface-variant/50 hover:text-tertiary transition-all opacity-80 hover:opacity-100"
          >
            Contacto
          </a>
        </div>

        {/* Social icons */}
        <div className="flex gap-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jperezviloria"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-on-surface-variant/50 hover:text-primary transition-colors"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/julioperez"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-on-surface-variant/50 hover:text-primary transition-colors"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/channel/UCcQifbSRJXkn4UxzaCQbeSA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-on-surface-variant/50 hover:text-primary transition-colors"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
