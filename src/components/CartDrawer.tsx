"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/data/products";

export function CartDrawer() {
  const { items, isOpen, close, subtotal, count, setQuantity, remove } =
    useCart();

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      {/* Overlay */}
      <div
        onClick={close}
        className={`absolute inset-0 bg-charcoal/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Carrito de compras"
      >
        <div className="flex items-center justify-between border-b border-gold/15 px-6 py-5">
          <h2 className="font-serif text-2xl text-charcoal">
            Tu carrito{" "}
            <span className="text-base text-stone">({count})</span>
          </h2>
          <button
            onClick={close}
            aria-label="Cerrar carrito"
            className="text-stone transition-colors hover:text-charcoal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-gold/40">
              <path d="M6 7h12l-1 13H7L6 7z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
              <path d="M9 7a3 3 0 016 0" stroke="currentColor" strokeWidth="1.3" />
            </svg>
            <p className="text-stone">Tu carrito está vacío.</p>
            <Link
              href="/productos"
              onClick={close}
              className="rounded-full bg-charcoal px-7 py-3 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-gold-dark"
            >
              Explorar la tienda
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-gold/10 overflow-y-auto px-6">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4 py-5">
                  <Link
                    href={`/productos/${product.id}`}
                    onClick={close}
                    className={`h-20 w-20 shrink-0 rounded-xl bg-gradient-to-br ${product.gradient}`}
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <Link
                        href={`/productos/${product.id}`}
                        onClick={close}
                        className="font-serif text-lg leading-tight text-charcoal hover:text-gold-dark"
                      >
                        {product.name}
                      </Link>
                      <button
                        onClick={() => remove(product.id)}
                        aria-label={`Quitar ${product.name}`}
                        className="text-stone/60 transition-colors hover:text-charcoal"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                    <p className="mt-1 text-sm text-stone">
                      {formatPrice(product.price)}
                    </p>
                    <div className="mt-auto flex items-center gap-3 pt-3">
                      <div className="flex items-center rounded-full border border-gold/30">
                        <button
                          onClick={() => setQuantity(product.id, quantity - 1)}
                          aria-label="Disminuir cantidad"
                          className="px-3 py-1 text-charcoal transition-colors hover:text-gold"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm">{quantity}</span>
                        <button
                          onClick={() => setQuantity(product.id, quantity + 1)}
                          aria-label="Aumentar cantidad"
                          className="px-3 py-1 text-charcoal transition-colors hover:text-gold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-gold/15 px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-stone">Subtotal</span>
                <span className="font-serif text-2xl text-charcoal">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-1 text-xs text-stone/70">
                Envío e impuestos calculados al finalizar la compra.
              </p>
              <button className="mt-5 w-full rounded-full bg-charcoal py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-gold-dark">
                Finalizar compra
              </button>
              <button
                onClick={close}
                className="mt-2 w-full py-2 text-sm text-stone transition-colors hover:text-charcoal"
              >
                Seguir comprando
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
