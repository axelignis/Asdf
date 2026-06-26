export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ivory">
      {/* Soft decorative glow */}
      <div className="pointer-events-none absolute -right-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-gold-light/40 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-rose-200/40 to-transparent blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
        <div className="fade-up max-w-xl">
          <p className="mb-5 text-xs uppercase tracking-luxe text-gold">
            Joyería fina · Hecha a mano
          </p>
          <h1 className="font-serif text-5xl font-light leading-[1.05] text-charcoal sm:text-6xl lg:text-7xl">
            Belleza que
            <br />
            <span className="italic text-gold-dark">perdura</span> en el
            tiempo
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-stone">
            Piezas atemporales en oro de 18 quilates, diamantes y piedras
            naturales. Diseñadas en nuestro taller para acompañar tus momentos
            más importantes.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#destacados"
              className="rounded-full bg-charcoal px-8 py-3.5 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-gold-dark"
            >
              Descubrir la colección
            </a>
            <a
              href="#historia"
              className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-charcoal"
            >
              Nuestra historia
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm text-stone">
            <div>
              <p className="font-serif text-3xl text-charcoal">18k</p>
              <p className="tracking-wide">Oro certificado</p>
            </div>
            <div className="h-10 w-px bg-gold/30" />
            <div>
              <p className="font-serif text-3xl text-charcoal">+12k</p>
              <p className="tracking-wide">Clientas felices</p>
            </div>
            <div className="h-10 w-px bg-gold/30" />
            <div>
              <p className="font-serif text-3xl text-charcoal">2 años</p>
              <p className="tracking-wide">De garantía</p>
            </div>
          </div>
        </div>

        {/* Hero visual — gradient placeholder standing in for product photography */}
        <div className="fade-up relative mx-auto aspect-[4/5] w-full max-w-md">
          <div className="shimmer absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cream via-gold-light/50 to-rose-100 shadow-2xl shadow-gold/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="160" height="160" viewBox="0 0 120 120" fill="none" className="text-gold-dark/70">
              <circle cx="60" cy="64" r="34" stroke="currentColor" strokeWidth="1.5" />
              <path d="M60 30l7 14h-14l7-14z" fill="currentColor" opacity="0.5" />
              <path d="M44 44h32l-16 18-16-18z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-ivory/95 px-5 py-4 shadow-lg backdrop-blur">
            <p className="text-xs uppercase tracking-luxe text-gold">Edición</p>
            <p className="font-serif text-lg text-charcoal">Colección Aurora</p>
          </div>
        </div>
      </div>
    </section>
  );
}
