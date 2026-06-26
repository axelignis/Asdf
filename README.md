# Aurelia · E-commerce de Joyería

Tienda online de joyería fina hecha a mano. Este repositorio contiene el
frontend del e-commerce, que iremos desarrollando de forma incremental.

Por ahora incluye el **homepage** con su diseño completo: hero, colecciones,
productos destacados, historia de marca, testimonios, newsletter y footer.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- TypeScript
- Tipografías: Cormorant Garamond (serif) + Jost (sans)

## Desarrollo

```bash
npm install      # instala dependencias
npm run dev      # levanta el servidor en http://localhost:3000
npm run build    # build de producción
npm run start    # sirve el build de producción
```

## Estructura

```
src/
├── app/
│   ├── layout.tsx      # fuentes, metadata y layout raíz
│   ├── globals.css     # tema (paleta oro/marfil/carbón) y utilidades
│   └── page.tsx        # composición del homepage
├── components/         # secciones reutilizables (Navbar, Hero, Footer, ...)
└── data/
    └── products.ts     # datos de productos y colecciones
```

> Las imágenes de producto usan placeholders con degradados elegantes.
> Se reemplazarán por fotografía real más adelante.

## Próximos pasos

- Página de listado de productos (PLP) y detalle (PDP)
- Carrito y checkout
- Integración con backend / pasarela de pago
- Catálogo y CMS de productos
