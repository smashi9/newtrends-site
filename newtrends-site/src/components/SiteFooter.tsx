import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[color:var(--gold)]/30 bg-[color:var(--graphite)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-semibold tracking-[0.15em] uppercase">[PLACEHOLDER: NIC Logo]</p>
          <p className="placeholder mt-4">[PLACEHOLDER: Short premium company tagline]</p>
        </div>
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.12em] text-[color:var(--taupe)]">Quick links</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About us</Link></li>
            <li><Link href="/our-brands">Our brands</Link></li>
            <li><Link href="/our-business">Our business</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact-us">Contact us</Link></li>
            <li><Link href="/shop-online">Shop online</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.12em] text-[color:var(--taupe)]">Connect</p>
          <p className="placeholder">[PLACEHOLDER: LinkedIn] [PLACEHOLDER: Instagram] [PLACEHOLDER: Facebook]</p>
          <p className="placeholder mt-4">[PLACEHOLDER: Ecommerce portal links]</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-[color:var(--taupe)]">
        © {new Date().getFullYear()} NewTrends International Corporation · <Link href="/privacy-policy">Privacy Policy</Link> · <Link href="/our-business#after-sales">After-sales & service</Link>
      </div>
    </footer>
  );
}
