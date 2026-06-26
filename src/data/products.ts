export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  /** Tailwind gradient classes used as a tasteful photography placeholder. */
  gradient: string;
  badge?: string;
};

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(value);

export const featuredProducts: Product[] = [
  {
    id: "anillo-solitario-aurora",
    name: "Anillo Solitario Aurora",
    category: "Anillos",
    price: 890000,
    gradient: "from-amber-100 via-rose-100 to-stone-200",
    badge: "Más vendido",
  },
  {
    id: "collar-luz-de-luna",
    name: "Collar Luz de Luna",
    category: "Collares",
    price: 540000,
    gradient: "from-stone-200 via-amber-50 to-rose-100",
  },
  {
    id: "aros-gota-de-rocio",
    name: "Aros Gota de Rocío",
    category: "Aros",
    price: 320000,
    gradient: "from-rose-100 via-amber-100 to-stone-200",
    badge: "Nuevo",
  },
  {
    id: "pulsera-eterna",
    name: "Pulsera Eterna",
    category: "Pulseras",
    price: 410000,
    gradient: "from-amber-50 via-stone-200 to-amber-100",
  },
];

export type Collection = {
  id: string;
  name: string;
  description: string;
  gradient: string;
};

export const collections: Collection[] = [
  {
    id: "anillos",
    name: "Anillos",
    description: "Solitarios, alianzas y piezas de declaración.",
    gradient: "from-amber-100 to-rose-200",
  },
  {
    id: "collares",
    name: "Collares",
    description: "Cadenas finas y colgantes con piedras naturales.",
    gradient: "from-stone-200 to-amber-100",
  },
  {
    id: "aros",
    name: "Aros",
    description: "Desde los más sutiles hasta los más audaces.",
    gradient: "from-rose-100 to-amber-200",
  },
];
