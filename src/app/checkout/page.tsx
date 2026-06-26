"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/data/products";

const FREE_SHIPPING_THRESHOLD = 200000;
const SHIPPING_COST = 6990;

export default function CheckoutPage() {
  const { items, subtotal, count, setQuantity, remove, clear } = useCart();
  const [placed, setPlaced] = useState<string | null>(null);

  const shipping =
    subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_COST;
  const total = subtotal + shipping;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Generamos un número de pedido simulado (aún sin pasarela de pago real).
    const orderId =
      "AUR-" +
      Math.floor(100000 + Math.random() * 900000).toString();
    clear();
    setPlaced(orderId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Confirmación de pedido
  if (placed) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/15">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-gold-dark">
            <path d="M5 12l5 5 9-11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="mt-6 font-serif text-4xl font-light text-charcoal sm:text-5xl">
          ¡Gracias por tu compra!
        </h1>
        <p className="mt-4 text-stone">
          Tu pedido <span className="font-medium text-charcoal">{placed}</span>{" "}
          ha sido recibido. Te enviamos un correo con los detalles y el
          seguimiento de tu envío.
        </p>
        <Link
          href="/productos"
          className="mt-8 inline-block rounded-full bg-charcoal px-8 py-3.5 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-gold-dark"
        >
          Seguir comprando
        </Link>
      </div>
    );
  }

  // Carrito vacío
  if (count === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-serif text-4xl font-light text-charcoal">
          Tu carrito está vacío
        </h1>
        <p className="mt-4 text-stone">
          Agrega algunas piezas antes de finalizar tu compra.
        </p>
        <Link
          href="/productos"
          className="mt-8 inline-block rounded-full bg-charcoal px-8 py-3.5 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-gold-dark"
        >
          Explorar la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      <Link href="/productos" className="text-sm text-stone hover:text-gold">
        ← Seguir comprando
      </Link>
      <h1 className="mt-4 font-serif text-4xl font-light text-charcoal sm:text-5xl">
        Finalizar compra
      </h1>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-10">
          <fieldset>
            <legend className="font-serif text-2xl text-charcoal">
              Contacto
            </legend>
            <div className="mt-5 grid gap-4">
              <Field label="Correo electrónico" type="email" name="email" autoComplete="email" />
              <Field label="Teléfono" type="tel" name="phone" autoComplete="tel" />
            </div>
          </fieldset>

          <fieldset>
            <legend className="font-serif text-2xl text-charcoal">
              Envío
            </legend>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Nombre" name="firstName" autoComplete="given-name" />
              <Field label="Apellido" name="lastName" autoComplete="family-name" />
              <Field
                label="Dirección"
                name="address"
                autoComplete="street-address"
                className="sm:col-span-2"
              />
              <Field label="Ciudad" name="city" autoComplete="address-level2" />
              <Field label="Región" name="region" autoComplete="address-level1" />
            </div>
          </fieldset>

          <fieldset>
            <legend className="font-serif text-2xl text-charcoal">Pago</legend>
            <p className="mt-2 text-sm text-stone">
              Demo sin cobro real — no ingreses datos de tarjeta verdaderos.
            </p>
            <div className="mt-5 grid gap-4">
              <Field label="Número de tarjeta" name="card" placeholder="4242 4242 4242 4242" />
              <div className="grid grid-cols-2 gap-4">
                <Field label="Vencimiento" name="exp" placeholder="MM/AA" />
                <Field label="CVV" name="cvv" placeholder="123" />
              </div>
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full rounded-full bg-charcoal py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-gold-dark"
          >
            Pagar {formatPrice(total)}
          </button>
        </form>

        {/* Resumen del pedido */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-3xl border border-gold/15 bg-cream/40 p-7">
            <h2 className="font-serif text-2xl text-charcoal">Tu pedido</h2>
            <ul className="mt-5 divide-y divide-gold/10">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4 py-4">
                  <div
                    className={`h-16 w-16 shrink-0 rounded-xl bg-gradient-to-br ${product.gradient}`}
                  />
                  <div className="flex flex-1 flex-col">
                    <span className="font-serif text-base leading-tight text-charcoal">
                      {product.name}
                    </span>
                    <span className="text-sm text-stone">
                      {formatPrice(product.price)}
                    </span>
                    <div className="mt-1 flex items-center gap-2 text-sm">
                      <button
                        type="button"
                        onClick={() => setQuantity(product.id, quantity - 1)}
                        className="px-1 text-stone hover:text-charcoal"
                        aria-label="Disminuir"
                      >
                        −
                      </button>
                      <span>{quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity(product.id, quantity + 1)}
                        className="px-1 text-stone hover:text-charcoal"
                        aria-label="Aumentar"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => remove(product.id)}
                        className="ml-auto text-xs text-stone/60 hover:text-charcoal"
                      >
                        Quitar
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <dl className="mt-5 space-y-2 border-t border-gold/15 pt-5 text-sm">
              <div className="flex justify-between">
                <dt className="text-stone">Subtotal</dt>
                <dd className="text-charcoal">{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-stone">Envío</dt>
                <dd className="text-charcoal">
                  {shipping === 0 ? "Gratis" : formatPrice(shipping)}
                </dd>
              </div>
              <div className="flex justify-between border-t border-gold/15 pt-3 text-base">
                <dt className="font-serif text-charcoal">Total</dt>
                <dd className="font-serif text-xl text-charcoal">
                  {formatPrice(total)}
                </dd>
              </div>
            </dl>

            {shipping > 0 && (
              <p className="mt-4 text-xs text-stone/70">
                Te faltan {formatPrice(FREE_SHIPPING_THRESHOLD - subtotal)} para
                envío gratis.
              </p>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({
  label,
  className = "",
  ...props
}: {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-sm text-stone">{label}</span>
      <input
        required
        {...props}
        className="w-full rounded-xl border border-gold/25 bg-ivory px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-stone/50 focus:border-gold"
      />
    </label>
  );
}
