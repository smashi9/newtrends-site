"use client";

import { useMemo, useState } from "react";

type Category = "All" | "Timepieces" | "Writing Instruments" | "Jewelry";

const tabs: Category[] = ["All", "Timepieces", "Writing Instruments", "Jewelry"];

const brands = Array.from({ length: 20 }).map((_, i) => {
  const category = i % 3 === 0 ? "Timepieces" : i % 3 === 1 ? "Writing Instruments" : "Jewelry";
  return {
    id: i + 1,
    name: `[PLACEHOLDER: Brand Name ${i + 1}]`,
    logo: `[PLACEHOLDER: Brand Logo ${i + 1}]`,
    category: category as Exclude<Category, "All">,
  };
});

export default function OurBrandsPage() {
  const [activeTab, setActiveTab] = useState<Category>("All");

  const filtered = useMemo(
    () => (activeTab === "All" ? brands : brands.filter((b) => b.category === activeTab)),
    [activeTab],
  );

  return (
    <section className="section">
      <h1 className="text-5xl">Our brands</h1>

      <div className="mt-8 flex flex-wrap gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`rounded-full border px-5 py-2 text-sm transition ${
              activeTab === tab
                ? "border-[color:var(--gold)] bg-[color:var(--gold)] text-black"
                : "border-white/20 text-white hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((brand) => (
          <article
            key={brand.id}
            className="card group flex min-h-36 flex-col justify-between transition hover:-translate-y-1 hover:border-[color:var(--gold)]"
          >
            <p className="placeholder">{brand.logo}</p>
            <div>
              <p className="mt-5 text-sm text-[color:var(--taupe)]">{brand.category}</p>
              <p className="mt-1">{brand.name}</p>
              <p className="mt-2 text-xs text-[color:var(--gold)]">External link ↗</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-[color:var(--gold)]/30 bg-[linear-gradient(150deg,rgba(198,165,107,0.18),rgba(0,0,0,0.2))] p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">Featured</p>
        <h2 className="mt-3 text-3xl">NIC Own Brands</h2>
        <p className="placeholder mt-4">[PLACEHOLDER: Distinct own-brand showcase section]</p>
      </div>
    </section>
  );
}
