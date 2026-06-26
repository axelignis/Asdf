const testimonials = [
  {
    quote:
      "Mi anillo de compromiso superó todas mis expectativas. La atención al detalle es simplemente perfecta.",
    name: "Valentina R.",
    location: "Santiago",
  },
  {
    quote:
      "Compré un collar para mi madre y llegó en una caja preciosa. Se nota el amor en cada pieza.",
    name: "Camila A.",
    location: "Viña del Mar",
  },
  {
    quote:
      "Calidad excepcional y un servicio impecable. Aurelia es mi joyería de confianza desde hace años.",
    name: "Francisca M.",
    location: "Concepción",
  },
];

export function Testimonials() {
  return (
    <section className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-luxe text-gold-light">
            Testimonios
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light sm:text-5xl">
            Historias que nos enorgullecen
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-ivory/10 bg-ivory/5 p-8"
            >
              <div className="flex gap-1 text-gold-light" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3 6.3 6.9.9-5 4.8 1.2 6.9L12 17.8 5.9 20.9 7.1 14 2 9.2l6.9-.9L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-5 font-serif text-xl font-light italic leading-relaxed text-ivory/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-medium text-ivory">{t.name}</span>
                <span className="text-ivory/55"> · {t.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
