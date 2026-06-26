import Link from "next/link";
import type { Metadata } from "next";
import {
  categories,
  getProductsByCategory,
  type CategoryId,
} from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Tienda · Aurelia",
  description: "Explora nuestra colección de joyería fina hecha a mano.",
};

const isCategory = (value?: string): value is CategoryId =>
  categories.some((c) => c.id === value);

export default async function ProductosPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>;
}) {
  const { categoria } = await searchParams;
  const active = isCategory(categoria) ? categoria : undefined;
  const products = getProductsByCategory(active);
  const activeCategory = categories.find((c) => c.id === active);

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">
      <header className="text-center">
        <p className="text-xs uppercase tracking-luxe text-gold">Tienda</p>
        <h1 className="mt-3 font-serif text-4xl font-light text-charcoal sm:text-5xl">
          {activeCategory ? activeCategory.name : "Toda la colección"}
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-stone">
          {activeCategory
            ? activeCategory.description
            : "Piezas atemporales en oro de 18k, diamantes y piedras naturales."}
        </p>
      </header>

      {/* Filtros por categoría */}
      <nav className="mt-10 flex flex-wrap justify-center gap-3">
        <FilterPill href="/productos" active={!active}>
          Todo
        </FilterPill>
        {categories.map((c) => (
          <FilterPill
            key={c.id}
            href={`/productos?categoria=${c.id}`}
            active={active === c.id}
          >
            {c.name}
          </FilterPill>
        ))}
      </nav>

      <p className="mt-8 text-sm text-stone">
        {products.length} {products.length === 1 ? "pieza" : "piezas"}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function FilterPill({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`rounded-full border px-5 py-2 text-sm tracking-wide transition-colors ${
        active
          ? "border-charcoal bg-charcoal text-ivory"
          : "border-gold/30 text-stone hover:border-gold hover:text-gold-dark"
      }`}
    >
      {children}
    </Link>
  );
}
