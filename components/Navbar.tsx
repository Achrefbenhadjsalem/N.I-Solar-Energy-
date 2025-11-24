"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoImage from "@/app/photo/N.I Solar Energy.jpg";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:flex-nowrap md:px-6">
        <Link href="/" className="flex items-center gap-3 text-slate-900">
          <span className="relative inline-flex h-12 w-12 overflow-hidden rounded-full border border-amber-100 shadow-md shadow-amber-100/60">
            <Image src={logoImage} alt="Logo N.I Solar Energy" sizes="48px" fill className="object-cover" priority />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">Solaire</p>
            <p className="text-xl font-semibold tracking-tight">N.I Solar Energy</p>
          </div>
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
        <div className="flex flex-col items-stretch gap-2 text-right sm:flex-row sm:items-center sm:gap-3">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500">
            <span>العربية</span>
            <span className="text-slate-300">•</span>
            <span>Français</span>
          </div>
          <Link
            href="/contact"
            className="rounded-full border border-amber-400 bg-amber-400/90 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-amber-200/60 transition hover:bg-amber-500"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </header>
  );
}

