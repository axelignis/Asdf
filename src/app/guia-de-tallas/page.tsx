import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guía de tallas · Aurelia",
  description:
    "Encuentra tu talla de anillo, el largo ideal de collar y la medida de pulsera con nuestra guía paso a paso.",
};

const ringSizes = [
  { size: "6", diameter: "16.5", circumference: "51.9" },
  { size: "7", diameter: "17.3", circumference: "54.4" },
  { size: "8", diameter: "18.1", circumference: "56.9" },
  { size: "9", diameter: "19.0", circumference: "59.5" },
  { size: "10", diameter: "19.8", circumference: "62.1" },
  { size: "11", diameter: "20.6", circumference: "64.6" },
  { size: "12", diameter: "21.4", circumference: "67.2" },
];

const steps = [
  {
    title: "Mide con un hilo",
    text: "Rodea la base del dedo con un hilo o una tira de papel fina, sin apretar.",
  },
  {
    title: "Marca y mide",
    text: "Marca donde se cierra el círculo y mide el largo en milímetros con una regla.",
  },
  {
    title: "Busca tu talla",
    text: "Compara esa circunferencia con la tabla para encontrar tu talla.",
  },
];

const necklaces = [
  { length: "40 cm", name: "Gargantilla", note: "Ajustada a la base del cuello." },
  { length: "45 cm", name: "Princesa", note: "El largo más versátil, justo bajo el cuello." },
  { length: "50 cm", name: "Matinée", note: "Cae sobre el escote." },
  { length: "60 cm", name: "Ópera", note: "Elegante, ideal para superponer." },
];

export default function GuiaDeTallasPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 md:py-20">
      <header className="text-center">
        <p className="text-xs uppercase tracking-luxe text-gold">Ayuda</p>
        <h1 className="mt-3 font-serif text-4xl font-light text-charcoal sm:text-5xl">
          Guía de tallas
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-stone">
          Encontrar tu medida perfecta es muy sencillo. Sigue estos pasos y
          consulta nuestras tablas para elegir con confianza.
        </p>
      </header>

      {/* Cómo medir */}
      <section className="mt-16">
        <h2 className="font-serif text-3xl font-light text-charcoal">
          Cómo medir tu anillo
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="rounded-2xl border border-gold/15 bg-cream/40 p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal font-serif text-ivory">
                {i + 1}
              </span>
              <h3 className="mt-4 font-serif text-xl text-charcoal">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{s.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-stone/80">
          Consejo: mide al final del día, cuando los dedos están un poco más
          anchos, y evita hacerlo con frío.
        </p>
      </section>

      {/* Tabla de anillos */}
      <section className="mt-16">
        <h2 className="font-serif text-3xl font-light text-charcoal">
          Tabla de tallas de anillos
        </h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-gold/15">
          <table className="w-full text-left text-sm">
            <thead className="bg-cream/60 text-charcoal">
              <tr>
                <th className="px-5 py-4 font-medium">Talla</th>
                <th className="px-5 py-4 font-medium">Diámetro interno</th>
                <th className="px-5 py-4 font-medium">Circunferencia</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold/10">
              {ringSizes.map((r) => (
                <tr key={r.size} className="text-stone">
                  <td className="px-5 py-3.5 font-serif text-lg text-charcoal">
                    {r.size}
                  </td>
                  <td className="px-5 py-3.5">{r.diameter} mm</td>
                  <td className="px-5 py-3.5">{r.circumference} mm</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-stone/80">
          ¿Tu medida queda entre dos tallas? Te recomendamos elegir la mayor.
        </p>
      </section>

      {/* Collares */}
      <section className="mt-16">
        <h2 className="font-serif text-3xl font-light text-charcoal">
          Largos de collar
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {necklaces.map((n) => (
            <div
              key={n.length}
              className="flex items-baseline gap-4 rounded-2xl border border-gold/15 p-5"
            >
              <span className="font-serif text-2xl text-gold-dark">
                {n.length}
              </span>
              <div>
                <p className="font-medium text-charcoal">{n.name}</p>
                <p className="text-sm text-stone">{n.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pulseras */}
      <section className="mt-16">
        <h2 className="font-serif text-3xl font-light text-charcoal">
          Tallas de pulsera
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-stone">
          Mide el contorno de tu muñeca con un hilo, justo sobre el hueso, y
          añade entre 1 y 2 cm según prefieras un ajuste cómodo o más holgado.
          Nuestras pulseras incluyen eslabones de ajuste para afinar la medida.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-20 rounded-3xl bg-charcoal px-6 py-12 text-center text-ivory sm:px-12">
        <h2 className="font-serif text-3xl font-light">
          ¿Aún con dudas sobre tu talla?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-ivory/80">
          Escríbenos y te ayudamos a elegir. También ofrecemos ajuste de talla
          sin costo en la mayoría de nuestros anillos.
        </p>
        <Link
          href="/productos?categoria=anillos"
          className="mt-7 inline-block rounded-full bg-ivory px-8 py-3.5 text-sm font-medium tracking-wide text-charcoal transition-colors hover:bg-gold-light"
        >
          Ver anillos
        </Link>
      </section>
    </div>
  );
}
