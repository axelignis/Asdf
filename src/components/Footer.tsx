import { Logo } from "./Logo";

const groups = [
  {
    title: "Tienda",
    links: ["Anillos", "Collares", "Aros", "Pulseras", "Novedades"],
  },
  {
    title: "Ayuda",
    links: ["Guía de tallas", "Envíos", "Devoluciones", "Cuidado de joyas", "Contacto"],
  },
  {
    title: "Aurelia",
    links: ["Nuestra historia", "Sostenibilidad", "Taller", "Trabaja con nosotros"],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gold/15 bg-ivory">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-stone">
              Joyería fina hecha a mano. Piezas atemporales diseñadas para
              acompañarte toda la vida.
            </p>
            <div className="mt-5 flex gap-3">
              {["Instagram", "Pinterest", "TikTok"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-stone transition-colors hover:border-gold hover:text-gold"
                >
                  <span className="text-[10px]">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="font-serif text-lg text-charcoal">{g.title}</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-stone">
                {g.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition-colors hover:text-gold">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gold/15 pt-8 text-xs text-stone sm:flex-row">
          <p>© {new Date().getFullYear()} Aurelia Joyería. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-gold">Términos</a>
            <a href="#" className="transition-colors hover:text-gold">Privacidad</a>
            <a href="#" className="transition-colors hover:text-gold">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
