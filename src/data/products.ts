export type CategoryId = "anillos" | "collares" | "aros" | "pulseras";

export type Product = {
  /** Slug usado en la URL del detalle: /productos/[id] */
  id: string;
  name: string;
  category: CategoryId;
  price: number;
  /** Degradado Tailwind usado como placeholder de fotografía. */
  gradient: string;
  badge?: string;
  description: string;
  material: string;
  details: string[];
};

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(value);

export type Category = {
  id: CategoryId;
  name: string;
  description: string;
  gradient: string;
};

export const categories: Category[] = [
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
  {
    id: "pulseras",
    name: "Pulseras",
    description: "Eslabones y brazaletes para cada día.",
    gradient: "from-amber-50 to-stone-200",
  },
];

export const products: Product[] = [
  {
    id: "anillo-solitario-aurora",
    name: "Anillo Solitario Aurora",
    category: "anillos",
    price: 890000,
    gradient: "from-amber-100 via-rose-100 to-stone-200",
    badge: "Más vendido",
    description:
      "Un solitario clásico que captura la luz desde cualquier ángulo. El diamante central reposa sobre una banda fina de oro de 18k, pensada para realzar la piedra sin restarle protagonismo.",
    material: "Oro amarillo 18k · Diamante 0.5ct",
    details: [
      "Oro de 18 quilates de origen responsable",
      "Diamante natural certificado GIA",
      "Talla ajustable sin costo",
      "Incluye estuche y certificado de autenticidad",
    ],
  },
  {
    id: "collar-luz-de-luna",
    name: "Collar Luz de Luna",
    category: "collares",
    price: 540000,
    gradient: "from-stone-200 via-amber-50 to-rose-100",
    description:
      "Un colgante de piedra luna sobre cadena fina, que evoca el brillo sereno de la noche. Perfecto para usar solo o en capas.",
    material: "Oro blanco 18k · Piedra luna",
    details: [
      "Cadena de 45 cm con extensor de 5 cm",
      "Piedra luna natural seleccionada a mano",
      "Cierre de mosquetón reforzado",
      "Incluye estuche de regalo",
    ],
  },
  {
    id: "aros-gota-de-rocio",
    name: "Aros Gota de Rocío",
    category: "aros",
    price: 320000,
    gradient: "from-rose-100 via-amber-100 to-stone-200",
    badge: "Nuevo",
    description:
      "Aros colgantes ligeros con una gota de cuarzo que se mece con cada movimiento. Sutiles de día, luminosos de noche.",
    material: "Oro amarillo 18k · Cuarzo rosa",
    details: [
      "Cierre de presión hipoalergénico",
      "Peso ultraligero para uso diario",
      "Cuarzo rosa pulido a mano",
      "Incluye estuche y paño de limpieza",
    ],
  },
  {
    id: "pulsera-eterna",
    name: "Pulsera Eterna",
    category: "pulseras",
    price: 410000,
    gradient: "from-amber-50 via-stone-200 to-amber-100",
    description:
      "Una pulsera de eslabones delicados que abraza la muñeca con elegancia atemporal. Un básico que nunca pasa de moda.",
    material: "Oro amarillo 18k",
    details: [
      "Largo de 18 cm ajustable",
      "Eslabones soldados a mano",
      "Cierre seguro tipo box",
      "Garantía de mantención de por vida",
    ],
  },
  {
    id: "anillo-alianza-infinito",
    name: "Alianza Infinito",
    category: "anillos",
    price: 470000,
    gradient: "from-amber-100 via-amber-50 to-stone-200",
    description:
      "Una alianza con un hilo continuo de diamantes que simboliza el amor sin fin. Tan cómoda como significativa.",
    material: "Oro blanco 18k · Diamantes",
    details: [
      "Pavé de diamantes en media vuelta",
      "Perfil cómodo de ajuste interno",
      "Disponible en varias tallas",
      "Grabado interior opcional",
    ],
  },
  {
    id: "collar-cadena-esencial",
    name: "Cadena Esencial",
    category: "collares",
    price: 280000,
    gradient: "from-stone-200 via-amber-100 to-amber-50",
    badge: "Esencial",
    description:
      "La cadena perfecta para el día a día: fina, resistente y con el brillo cálido del oro. Ideal para usar en capas.",
    material: "Oro amarillo 18k",
    details: [
      "Largo de 50 cm",
      "Eslabón veneciano de alta durabilidad",
      "Cierre de mosquetón",
      "Apta para uso diario",
    ],
  },
  {
    id: "aros-argolla-clasica",
    name: "Argollas Clásicas",
    category: "aros",
    price: 240000,
    gradient: "from-amber-100 via-stone-100 to-rose-100",
    description:
      "Argollas de oro pulido en tamaño medio, ese accesorio que combina con absolutamente todo. Un imprescindible.",
    material: "Oro amarillo 18k",
    details: [
      "Diámetro de 20 mm",
      "Tubo hueco para mayor ligereza",
      "Cierre de bisagra seguro",
      "Acabado pulido espejo",
    ],
  },
  {
    id: "pulsera-tenis-brillante",
    name: "Pulsera Tennis",
    category: "pulseras",
    price: 1250000,
    gradient: "from-rose-100 via-amber-100 to-stone-200",
    badge: "Edición limitada",
    description:
      "Una hilera continua de diamantes engastados con precisión para un brillo ininterrumpido. La máxima expresión de elegancia.",
    material: "Oro blanco 18k · Diamantes",
    details: [
      "Diamantes engastados en garra",
      "Largo de 17 cm con cierre de seguridad doble",
      "Certificado de diamantes incluido",
      "Estuche premium de regalo",
    ],
  },
];

export const getProductById = (id: string) =>
  products.find((p) => p.id === id);

export const getProductsByCategory = (category?: CategoryId) =>
  category ? products.filter((p) => p.category === category) : products;

/** Selección destacada para el homepage. */
export const featuredProducts = products.slice(0, 4);
