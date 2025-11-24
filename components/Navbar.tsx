 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:flex-nowrap md:px-6">
        <Link href="/" className="text-2xl font-semibold tracking-tight text-amber-500">
          SolisGrid
        </Link>
        <nav className="flex flex-1 flex-wrap items-center justify-end gap-6 text-sm font-medium text-slate-600 md:text-base">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className="text-slate-600 transition hover:text-slate-950 aria-[current=page]:text-amber-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full border border-amber-400 bg-amber-400/90 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-amber-200/60 transition hover:bg-amber-500"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}

