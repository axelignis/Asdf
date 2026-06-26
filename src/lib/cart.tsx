"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProductById, type Product } from "@/data/products";

export type CartLine = {
  /** Clave única de la línea (producto + talla). */
  key: string;
  product: Product;
  size?: string;
  quantity: number;
};

type CartContextValue = {
  items: CartLine[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (productId: string, quantity?: number, size?: string) => void;
  remove: (key: string) => void;
  setQuantity: (key: string, quantity: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "aurelia.cart";

type StoredItem = { productId: string; size?: string; quantity: number };

const lineKey = (productId: string, size?: string) =>
  size ? `${productId}::${size}` : productId;

export function CartProvider({ children }: { children: ReactNode }) {
  const [stored, setStored] = useState<StoredItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Carga inicial desde localStorage.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setStored(JSON.parse(raw));
    } catch {
      // almacenamiento no disponible — se ignora
    }
    setHydrated(true);
  }, []);

  // Persistencia en cada cambio (una vez hidratado).
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    } catch {
      // se ignora
    }
  }, [stored, hydrated]);

  const items = useMemo<CartLine[]>(() => {
    const lines: CartLine[] = [];
    for (const { productId, size, quantity } of stored) {
      const product = getProductById(productId);
      if (product) {
        lines.push({ key: lineKey(productId, size), product, size, quantity });
      }
    }
    return lines;
  }, [stored]);

  const count = useMemo(
    () => items.reduce((sum, l) => sum + l.quantity, 0),
    [items],
  );

  const subtotal = useMemo(
    () => items.reduce((sum, l) => sum + l.product.price * l.quantity, 0),
    [items],
  );

  const value: CartContextValue = {
    items,
    count,
    subtotal,
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    add: (productId, quantity = 1, size) => {
      setStored((prev) => {
        const existing = prev.find(
          (i) => i.productId === productId && i.size === size,
        );
        if (existing) {
          return prev.map((i) =>
            i === existing ? { ...i, quantity: i.quantity + quantity } : i,
          );
        }
        return [...prev, { productId, size, quantity }];
      });
      setIsOpen(true);
    },
    remove: (key) =>
      setStored((prev) =>
        prev.filter((i) => lineKey(i.productId, i.size) !== key),
      ),
    setQuantity: (key, quantity) =>
      setStored((prev) =>
        quantity <= 0
          ? prev.filter((i) => lineKey(i.productId, i.size) !== key)
          : prev.map((i) =>
              lineKey(i.productId, i.size) === key ? { ...i, quantity } : i,
            ),
      ),
    clear: () => setStored([]),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
