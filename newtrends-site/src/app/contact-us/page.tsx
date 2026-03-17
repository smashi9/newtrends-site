export default function ContactUsPage() {
  return (
    <section className="section">
      <h1 className="text-5xl">Contact us</h1>
      <p className="placeholder mt-6">[PLACEHOLDER: Company name, address, phone, email]</p>

      <form className="card mt-10 grid gap-4 md:grid-cols-2">
        <input className="input" placeholder="Name" />
        <input className="input" placeholder="Company (optional)" />
        <input type="email" className="input" placeholder="Email" />
        <select className="input">
          <option>General inquiry</option>
          <option>Partnership</option>
          <option>Media</option>
          <option>Other</option>
        </select>
        <textarea className="input md:col-span-2" placeholder="Message" rows={6} />
        <button className="rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-medium text-black md:col-span-2 md:w-fit">
          Submit
        </button>
      </form>
    </section>
  );
}
