import Link from "next/link";

const categories = ["Timepieces", "Writing Instruments", "Jewelry"];

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[88vh] items-end bg-[radial-gradient(circle_at_top,rgba(198,165,107,0.24),transparent_38%),linear-gradient(160deg,#0b0b0c,#1a1c1f)] px-6 pb-16 pt-28">
        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Since 1992</p>
          <h1 className="max-w-4xl text-4xl leading-tight md:text-7xl">Distributing the world&apos;s finest lifestyle brands across the Philippines.</h1>
          <p className="placeholder mt-6 max-w-xl">[PLACEHOLDER: Short brand statement with premium positioning.]</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/our-brands" className="rounded-full bg-[color:var(--gold)] px-6 py-3 text-black">Explore our brands</Link>
            <Link href="/shop-online" className="rounded-full border border-white/30 px-6 py-3">Shop online</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="text-3xl">Brand Portfolio</h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 p-4">
          <div className="flex gap-4 whitespace-nowrap text-sm text-[color:var(--gold)] [animation:marquee_24s_linear_infinite]">
            {Array.from({ length: 22 }).map((_, i) => (
              <span key={i} className="rounded-full border border-white/20 px-4 py-2">[PLACEHOLDER: Brand Logo {i + 1}]</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section grid gap-6 md:grid-cols-3">
        {categories.map((category) => (
          <Link key={category} href="/our-brands" className="card block min-h-44 hover:border-[color:var(--gold)]">
            <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--taupe)]">Category</p>
            <h3 className="mt-3 text-2xl">{category}</h3>
            <p className="placeholder mt-3">[PLACEHOLDER: Curated category visual treatment]</p>
          </Link>
        ))}
      </section>
    </>
  );
}
