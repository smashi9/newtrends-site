export default function OurBusinessPage() {
  return (
    <section className="section">
      <h1 className="text-5xl">Our business</h1>

      <div className="mt-10 space-y-6">
        <div className="card min-h-44">
          <h2 className="text-3xl">Distribution</h2>
          <p className="placeholder mt-3">[PLACEHOLDER: NIC as exclusive distributor of international brands across the Philippines]</p>
        </div>

        <div className="card min-h-44">
          <h2 className="text-3xl">Retail</h2>
          <p className="placeholder mt-3">[PLACEHOLDER: Concept stores and retail footprint summary]</p>
          <p className="mt-4 text-sm text-[color:var(--gold)]">Shop portals ↗</p>
        </div>

        <div className="card">
          <h2 className="text-3xl">Partner with us</h2>
          <p className="placeholder mt-3">[PLACEHOLDER: Value proposition for global brand owners seeking PH distributor]</p>
          <form className="mt-6 grid gap-4 md:grid-cols-2">
            <input className="input" placeholder="Name" />
            <input className="input" placeholder="Company" />
            <input className="input" placeholder="Brand name" />
            <select className="input">
              <option>Product category</option>
              <option>Timepieces</option>
              <option>Writing Instruments</option>
              <option>Jewelry</option>
            </select>
            <textarea className="input md:col-span-2" placeholder="Message" rows={5} />
            <button className="rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-medium text-black md:col-span-2 md:w-fit">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div id="after-sales" className="card mt-10 border-[color:var(--gold)]/35">
        <h2 className="text-3xl">After-sales & service</h2>
        <p className="placeholder mt-3">[PLACEHOLDER: Watch repair, jewelry servicing, warranty support summary + contact prompt]</p>
      </div>
    </section>
  );
}
