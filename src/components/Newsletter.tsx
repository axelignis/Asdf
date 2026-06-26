export function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-cream to-gold-light/40 px-6 py-16 text-center sm:px-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
        <div className="relative mx-auto max-w-xl">
          <p className="text-xs uppercase tracking-luxe text-gold-dark">
            Únete al círculo Aurelia
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light text-charcoal sm:text-5xl">
            Recibe acceso anticipado
          </h2>
          <p className="mt-4 text-stone">
            Suscríbete y obtén un 10% de descuento en tu primera compra, además
            de novedades y lanzamientos exclusivos.
          </p>

          <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="tu@correo.com"
              className="flex-1 rounded-full border border-gold/30 bg-ivory/80 px-6 py-3.5 text-sm text-charcoal outline-none placeholder:text-stone/60 focus:border-gold"
            />
            <button
              type="submit"
              className="rounded-full bg-charcoal px-8 py-3.5 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-gold-dark"
            >
              Suscribirme
            </button>
          </form>
          <p className="mt-4 text-xs text-stone/70">
            Sin spam. Puedes darte de baja cuando quieras.
          </p>
        </div>
      </div>
    </section>
  );
}
