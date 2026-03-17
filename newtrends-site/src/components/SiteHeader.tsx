import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About us" },
  { href: "/our-brands", label: "Our brands" },
  { href: "/our-business", label: "Our business" },
  { href: "/careers", label: "Careers" },
  { href: "/contact-us", label: "Contact us" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--obsidian)]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm md:text-base">
        <Link href="/" className="font-semibold tracking-[0.2em] uppercase">
          [PLACEHOLDER: NIC Logo]
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[color:var(--gold)]">
              {item.label}
            </Link>
          ))}
          <a
            href="https://watchrepublicshop.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[color:var(--gold)] px-4 py-2 text-[color:var(--gold)] transition hover:bg-[color:var(--gold)] hover:text-black"
          >
            Shop online ↗
          </a>
        </div>
      </nav>
    </header>
  );
}
