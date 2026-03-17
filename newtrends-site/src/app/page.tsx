import Link from "next/link";

const categories = ["Timepieces", "Writing Instruments", "Jewelry"];

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-16 pt-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(198,165,107,0.28),transparent_40%),linear-gradient(160deg,#0b0b0c,#1a1c1f_45%,#0b0b0c)]" />
        <div className="absolute inset-0 -z-10 opacity-30 [background:linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.08)_50%,transparent_80%)]" />

        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Since 1992</p>
          <h1 className="max-w-4xl text-4xl leading-tight md:text-7xl">
            Distributing the world&apos;s finest lifestyle brands across the Philippines.
          </h1>
          <p className="placeholder mt-6 max-w-2xl text-base md:text-lg">
            [PLACEHOLDER: Short brand statement communicating 30+ years of heritage, taste, and international calibre.]
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/our-brands"
              className="rounded-full bg-[color:var(--gold)] px-6 py-3 text-black transition hover:opacity-90"
            >
              Explore our brands
            </Link>
            <Link
              href="/shop-online"
              className="rounded-full border border-white/30 px-6 py-3 transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
            >
              Shop online
            </Link>
          </div>
          <p className="mt-12 text-xs uppercase tracking-[0.25em] text-[color:var(--taupe)]">Scroll ↓</p>
        </div>
      </section>

      <section className="section">
        <h2 className="text-3xl md:text-4xl">Brand Portfolio</h2>
        <p className="placeholder mt-3">[PLACEHOLDER: 20+ international brands represented by NIC]</p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 p-4">
          <div className="flex min-w-max gap-4 whitespace-nowrap text-sm text-[color:var(--gold)] [animation:marquee_28s_linear_infinite]">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="rounded-full border border-white/20 px-4 py-2">
                [PLACEHOLDER: Brand Logo {i + 1}]
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section grid gap-6 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category}
            href="/our-brands"
            className="card group block min-h-52 overflow-hidden hover:border-[color:var(--gold)]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--taupe)]">Category</p>
            <h3 className="mt-3 text-2xl">{category}</h3>
            <p className="placeholder mt-3">[PLACEHOLDER: Bold category visual art direction]</p>
            <p className="mt-6 text-sm text-[color:var(--gold)] transition group-hover:translate-x-1">View brands →</p>
          </Link>
        ))}
      </section>

      <section className="section">
        <div className="rounded-2xl border border-white/10 bg-[color:var(--graphite)]/65 p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl">Shop online</h2>
          <p className="placeholder mt-3">[PLACEHOLDER: Intro copy for NIC ecommerce destinations]</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <a href="https://watchrepublicshop.com" target="_blank" rel="noreferrer" className="card block hover:border-[color:var(--gold)]">
              Watch Republic ↗
            </a>
            <div className="card">[PLACEHOLDER: Portal 2]</div>
            <div className="card">[PLACEHOLDER: Portal 3]</div>
            <div className="card">[PLACEHOLDER: Portal 4]</div>
          </div>
        </div>
      </section>
    </>
  );
}
