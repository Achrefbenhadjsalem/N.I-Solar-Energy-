import ServiceCard from "@/components/ServiceCard";
import LanguageHero from "@/components/LanguageHero";
import Link from "next/link";

const services = [
  {
    title: "Residential Solar",
    description: "Custom rooftop systems that maximize efficiency, aesthetics, and long-term savings for homeowners.",
    highlights: ["Roof analysis & shading study", "Premium Tier-1 panels", "App-based system monitoring"],
  },
  {
    title: "Commercial Solar",
    description: "Scaleable arrays engineered for reliability, delivering predictable energy costs for every quarter.",
    highlights: ["Full EPC delivery", "Utility interconnection", "Performance guarantees"],
  },
  {
    title: "Energy Storage",
    description: "Battery systems that store excess power, enabling backup coverage and peak-shaving strategies.",
    highlights: ["Lithium & saltwater chemistries", "Automatic outage detection", "Smart home integration"],
  },
];

export default function Home() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16 md:px-6 md:py-24">
      <LanguageHero />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">What we deliver</p>
            <h2 className="text-3xl font-semibold text-slate-900">Solutions engineered for performance</h2>
          </div>
          <Link href="/services" className="text-sm font-semibold text-amber-600 hover:text-amber-700">
            Voir tous les services →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>

      <div className="grid gap-8 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold">Prêt pour une visite sur site ?</h3>
          <p className="mt-3 text-slate-200">
            Nos ingénieurs certifiés NABCEP étudient votre site, modélisent la production et livrent un plan détaillé en
            72 heures.
          </p>
        </div>
        <div className="flex items-center justify-end gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-900/30 transition hover:bg-slate-100"
          >
            Réserver une visite
          </Link>
          <Link href="/about" className="text-sm font-semibold text-white/80 hover:text-white">
            En savoir plus
          </Link>
        </div>
      </div>
    </section>
  );
}
