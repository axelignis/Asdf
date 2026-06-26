"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useCart } from "@/lib/cart";

const links = [
  { label: "Tienda", href: "/productos" },
  { label: "Anillos", href: "/productos?categoria=anillos" },
  { label: "Collares", href: "/productos?categoria=collares" },
  { label: "Aros", href: "/productos?categoria=aros" },
];

export function Navbar() {
  const { count, open } = useCart();

  return (
    <header className="sticky top-0 z-40">
      {/* Announcement bar */}
      <div className="bg-charcoal text-ivory text-xs sm:text-[13px]">
        <p className="mx-auto max-w-7xl px-4 py-2.5 text-center tracking-wide">
          Envío gratis en compras sobre $200.000 · Devoluciones sin costo
          durante 30 días
        </p>
      </div>

      <nav className="border-b border-gold/15 bg-ivory/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" aria-label="Aurelia — inicio">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-9 text-sm font-light tracking-wide text-stone md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5 text-charcoal">
            <button aria-label="Buscar" className="hidden transition-colors hover:text-gold sm:block">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <button aria-label="Mi cuenta" className="hidden transition-colors hover:text-gold sm:block">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <button
              onClick={open}
              aria-label="Abrir carrito"
              className="relative transition-colors hover:text-gold"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M6 7h12l-1 13H7L6 7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M9 7a3 3 0 016 0" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              {count > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] text-ivory">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
