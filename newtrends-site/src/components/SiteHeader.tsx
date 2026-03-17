"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About us" },
  { href: "/our-brands", label: "Our brands" },
  { href: "/our-business", label: "Our business" },
  { href: "/careers", label: "Careers" },
  { href: "/contact-us", label: "Contact us" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-white/10 bg-[color:var(--obsidian)]/90 shadow-[0_12px_48px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm md:text-base">
        <Link href="/" className="font-semibold tracking-[0.2em] uppercase">
          [PLACEHOLDER: NIC Logo]
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative transition hover:text-[color:var(--gold)] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[color:var(--gold)] after:transition-all after:duration-300 hover:after:w-full"
            >
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
