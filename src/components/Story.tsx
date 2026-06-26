export function Story() {
  return (
    <section id="historia" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <div className="relative order-2 md:order-1">
          <div className="aspect-[5/6] overflow-hidden rounded-[2rem] bg-gradient-to-br from-stone-200 via-cream to-gold-light/50 shadow-xl" />
          <div className="absolute -right-5 -top-5 hidden aspect-square w-40 rounded-2xl bg-gradient-to-br from-rose-100 to-amber-100 shadow-lg sm:block" />
        </div>

        <div className="order-1 max-w-lg md:order-2">
          <p className="text-xs uppercase tracking-luxe text-gold">
            Nuestra historia
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light leading-tight text-charcoal sm:text-5xl">
            Joyas con alma,
            <br />
            <span className="italic text-gold-dark">desde 2010</span>
          </h2>
          <p className="mt-6 leading-relaxed text-stone">
            Aurelia nació del deseo de crear joyas que cuenten historias. Cada
            pieza es diseñada y elaborada a mano por nuestros maestros orfebres,
            combinando técnicas tradicionales con un diseño contemporáneo.
          </p>
          <p className="mt-4 leading-relaxed text-stone">
            Trabajamos solo con oro de origen responsable y piedras
            seleccionadas una a una, porque creemos que la belleza verdadera
            también es ética.
          </p>
          <a
            href="#destacados"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold px-7 py-3 text-sm font-medium tracking-wide text-charcoal transition-colors hover:bg-gold hover:text-ivory"
          >
            Conoce el taller
          </a>
        </div>
      </div>
    </section>
  );
}
