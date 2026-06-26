const props = [
  {
    title: "Hecho a mano",
    description: "Cada pieza es elaborada artesanalmente en nuestro taller.",
    icon: (
      <path
        d="M12 3l2 5 5 .5-4 3.5 1.3 5L12 19l-4.3 2 1.3-5-4-3.5 5-.5L12 3z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Oro de 18k certificado",
    description: "Materiales nobles con certificado de autenticidad.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Envío asegurado",
    description: "Despacho gratuito y asegurado a todo el país.",
    icon: (
      <>
        <path d="M3 7h11v10H3V7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M14 10h4l3 3v4h-7v-7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <circle cx="7" cy="17" r="1.6" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="17" cy="17" r="1.6" stroke="currentColor" strokeWidth="1.4" />
      </>
    ),
  },
  {
    title: "Garantía de por vida",
    description: "Limpieza y mantención sin costo para tus joyas.",
    icon: (
      <path
        d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    ),
  },
];

export function ValueProps() {
  return (
    <section className="border-y border-gold/15 bg-cream/60">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4">
        {props.map((p) => (
          <div key={p.title} className="flex flex-col items-center text-center">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="text-gold">
              {p.icon}
            </svg>
            <h3 className="mt-4 font-serif text-xl text-charcoal">{p.title}</h3>
            <p className="mt-1.5 max-w-[14rem] text-sm leading-relaxed text-stone">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
