import Link from "next/link";
import { formatPrice, type Product } from "@/data/products";
import { AddToCartButton } from "./AddToCartButton";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-2xl">
        <Link href={`/productos/${product.id}`} aria-label={product.name}>
          <div
            className={`shimmer flex aspect-square items-center justify-center bg-gradient-to-br ${product.gradient} transition-transform duration-700 group-hover:scale-105`}
          >
            <svg width="72" height="72" viewBox="0 0 24 24" fill="none" className="text-charcoal/25">
              <circle cx="12" cy="13" r="6" stroke="currentColor" strokeWidth="1.2" />
              <path d="M9 7l3-3 3 3-3 3-3-3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
          </div>
        </Link>

        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-ivory/95 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-gold-dark backdrop-blur">
            {product.badge}
          </span>
        )}

        <AddToCartButton
          productId={product.id}
          className="absolute inset-x-4 bottom-4 translate-y-3 rounded-full bg-charcoal/95 py-3 text-sm font-medium tracking-wide text-ivory opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-gold-dark"
        />
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-gold">
            {product.category}
          </p>
          <h3 className="mt-1 font-serif text-xl text-charcoal">
            <Link href={`/productos/${product.id}`} className="hover:text-gold-dark">
              {product.name}
            </Link>
          </h3>
        </div>
        <p className="mt-1 font-sans text-base text-charcoal">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
