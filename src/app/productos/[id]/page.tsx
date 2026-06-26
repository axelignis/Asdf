import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  products,
  getProductById,
  getProductsByCategory,
  formatPrice,
  categories,
} from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductPurchase } from "@/components/ProductPurchase";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Producto no encontrado · Aurelia" };
  return {
    title: `${product.name} · Aurelia`,
    description: product.description,
  };
}

export default async function ProductoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const categoryName =
    categories.find((c) => c.id === product.category)?.name ??
    product.category;

  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14">
      {/* Breadcrumb */}
      <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-stone">
        <Link href="/" className="hover:text-gold">Inicio</Link>
        <span className="text-gold/40">/</span>
        <Link href="/productos" className="hover:text-gold">Tienda</Link>
        <span className="text-gold/40">/</span>
        <Link
          href={`/productos?categoria=${product.category}`}
          className="hover:text-gold"
        >
          {categoryName}
        </Link>
        <span className="text-gold/40">/</span>
        <span className="text-charcoal">{product.name}</span>
      </nav>

      <div className="grid gap-10 md:grid-cols-2 md:gap-14">
        {/* Galería */}
        <div className="space-y-4">
          <div
            className={`shimmer relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br ${product.gradient} shadow-lg`}
          >
            {product.badge && (
              <span className="absolute left-5 top-5 rounded-full bg-ivory/95 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-gold-dark backdrop-blur">
                {product.badge}
              </span>
            )}
            <svg width="110" height="110" viewBox="0 0 24 24" fill="none" className="text-charcoal/25">
              <circle cx="12" cy="13" r="6" stroke="currentColor" strokeWidth="1" />
              <path d="M9 7l3-3 3 3-3 3-3-3z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`aspect-square rounded-2xl bg-gradient-to-br ${product.gradient} ${
                  i === 0 ? "opacity-100" : "opacity-60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Información */}
        <div className="md:py-2">
          <p className="text-xs uppercase tracking-luxe text-gold">
            {categoryName}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-light leading-tight text-charcoal sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 font-serif text-3xl text-charcoal">
            {formatPrice(product.price)}
          </p>

          <p className="mt-6 leading-relaxed text-stone">
            {product.description}
          </p>

          <p className="mt-5 text-sm uppercase tracking-wide text-gold-dark">
            {product.material}
          </p>

          <ProductPurchase productId={product.id} />

          <ul className="mt-10 space-y-3 border-t border-gold/15 pt-8">
            {product.details.map((detail) => (
              <li key={detail} className="flex items-start gap-3 text-sm text-stone">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-gold">
                  <path d="M5 12l5 5 9-11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {detail}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-6 text-xs text-stone">
            <span className="flex items-center gap-2">
              <span className="text-gold">●</span> Envío gratis y asegurado
            </span>
            <span className="flex items-center gap-2">
              <span className="text-gold">●</span> Devolución en 30 días
            </span>
            <span className="flex items-center gap-2">
              <span className="text-gold">●</span> Garantía de por vida
            </span>
          </div>
        </div>
      </div>

      {/* Relacionados */}
      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="mb-10 text-center font-serif text-3xl font-light text-charcoal sm:text-4xl">
            También te puede gustar
          </h2>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
