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

export type CartLine = { product: Product; quantity: number };

type CartContextValue = {
  items: CartLine[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (productId: string, quantity?: number) => void;
  remove: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "aurelia.cart";

type StoredItem = { id: string; quantity: number };

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

  const items = useMemo<CartLine[]>(
    () =>
      stored
        .map(({ id, quantity }) => {
          const product = getProductById(id);
          return product ? { product, quantity } : null;
        })
        .filter((line): line is CartLine => line !== null),
    [stored],
  );

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
    add: (productId, quantity = 1) => {
      setStored((prev) => {
        const existing = prev.find((i) => i.id === productId);
        if (existing) {
          return prev.map((i) =>
            i.id === productId
              ? { ...i, quantity: i.quantity + quantity }
              : i,
          );
        }
        return [...prev, { id: productId, quantity }];
      });
      setIsOpen(true);
    },
    remove: (productId) =>
      setStored((prev) => prev.filter((i) => i.id !== productId)),
    setQuantity: (productId, quantity) =>
      setStored((prev) =>
        quantity <= 0
          ? prev.filter((i) => i.id !== productId)
          : prev.map((i) =>
              i.id === productId ? { ...i, quantity } : i,
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
