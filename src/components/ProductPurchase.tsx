"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";

export function ProductPurchase({ productId }: { productId: string }) {
  const { add } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <div className="flex items-center rounded-full border border-gold/30">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          aria-label="Disminuir cantidad"
          className="px-4 py-3 text-charcoal transition-colors hover:text-gold"
        >
          −
        </button>
        <span className="w-8 text-center">{quantity}</span>
        <button
          onClick={() => setQuantity((q) => q + 1)}
          aria-label="Aumentar cantidad"
          className="px-4 py-3 text-charcoal transition-colors hover:text-gold"
        >
          +
        </button>
      </div>

      <button
        onClick={() => add(productId, quantity)}
        className="flex-1 rounded-full bg-charcoal px-8 py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-gold-dark sm:flex-none sm:min-w-[16rem]"
      >
        Añadir al carrito
      </button>
    </div>
  );
}
