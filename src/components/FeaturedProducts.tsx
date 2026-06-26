import { featuredProducts } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function FeaturedProducts() {
  return (
    <section id="destacados" className="bg-cream/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-luxe text-gold" id="novedades">
              Selección
            </p>
            <h2 className="mt-3 font-serif text-4xl font-light text-charcoal sm:text-5xl">
              Piezas destacadas
            </h2>
          </div>
          <a
            href="#colecciones"
            className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-charcoal"
          >
            Ver todo el catálogo
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
