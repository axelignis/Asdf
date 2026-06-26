import { collections } from "@/data/products";

export function Collections() {
  return (
    <section id="colecciones" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-xs uppercase tracking-luxe text-gold">Explora</p>
        <h2 className="mt-3 font-serif text-4xl font-light text-charcoal sm:text-5xl">
          Nuestras colecciones
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-stone">
          Encuentra la pieza perfecta para cada ocasión, desde lo cotidiano
          hasta lo extraordinario.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {collections.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="group relative overflow-hidden rounded-3xl"
          >
            <div
              className={`flex aspect-[4/5] items-end bg-gradient-to-br ${c.gradient} p-8 transition-transform duration-700 group-hover:scale-105`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-7 text-ivory">
              <h3 className="font-serif text-3xl font-light">{c.name}</h3>
              <p className="mt-1 text-sm text-ivory/85">{c.description}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium tracking-wide">
                Ver colección
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
