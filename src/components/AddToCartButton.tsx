"use client";

import { useCart } from "@/lib/cart";

export function AddToCartButton({
  productId,
  quantity = 1,
  className = "",
  label = "Añadir al carrito",
}: {
  productId: string;
  quantity?: number;
  className?: string;
  label?: string;
}) {
  const { add } = useCart();
  return (
    <button
      onClick={() => add(productId, quantity)}
      className={className}
    >
      {label}
    </button>
  );
}
