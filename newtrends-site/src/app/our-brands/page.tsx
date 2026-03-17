export default function OurBrandsPage() {
  return (
    <section className="section">
      <h1 className="text-5xl">Our brands</h1>
      <p className="placeholder mt-4">[PLACEHOLDER: Filter tabs All / Timepieces / Writing Instruments / Jewelry]</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <article key={i} className="card min-h-28">[PLACEHOLDER: Brand Logo + Brand Name + External Link]</article>
        ))}
      </div>
      <div className="card mt-10">[PLACEHOLDER: NIC Own Brands (visually distinct section)]</div>
    </section>
  );
}
