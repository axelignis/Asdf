"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart";

export function ProductPurchase({
  productId,
  sizes,
}: {
  productId: string;
  sizes?: string[];
}) {
  const { add } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState<string | undefined>();
  const [error, setError] = useState(false);

  const needsSize = !!sizes && sizes.length > 0;

  const handleAdd = () => {
    if (needsSize && !size) {
      setError(true);
      return;
    }
    add(productId, quantity, size);
  };

  return (
    <div className="mt-8">
      {needsSize && (
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-charcoal">
              Talla{size ? `: ${size}` : ""}
            </span>
            <Link
              href="/guia-de-tallas"
              className="text-sm text-gold-dark underline-offset-4 hover:underline"
            >
              ¿Cuál es mi talla?
            </Link>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {sizes!.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setSize(s);
                  setError(false);
                }}
                aria-pressed={size === s}
                className={`h-11 w-11 rounded-full border text-sm transition-colors ${
                  size === s
                    ? "border-charcoal bg-charcoal text-ivory"
                    : "border-gold/30 text-charcoal hover:border-gold"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-700">
              Selecciona una talla para continuar.
            </p>
          )}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center rounded-full border border-gold/30">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Disminuir cantidad"
            className="px-4 py-3 text-charcoal transition-colors hover:text-gold"
          >
            −
          </button>
          <span className="w-8 text-center">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            aria-label="Aumentar cantidad"
            className="px-4 py-3 text-charcoal transition-colors hover:text-gold"
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className="flex-1 rounded-full bg-charcoal px-8 py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-gold-dark sm:flex-none sm:min-w-[16rem]"
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}
