import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

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
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">Solar panel experts</p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Design-first solar installations for bright, resilient communities.
          </h1>
          <p className="text-lg text-slate-600">
            SolisGrid delivers turnkey solar, storage, and monitoring solutions for homeowners and businesses. We handle
            the entire lifecycle—from feasibility and financing all the way through maintenance—so you capture maximum
            output from day one.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-200/70 transition hover:bg-amber-600"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-white/50 bg-white/80 p-8 shadow-lg shadow-amber-100">
          <dl className="grid grid-cols-2 gap-6 text-center">
            <div>
              <dt className="text-sm uppercase tracking-wide text-slate-500">Systems delivered</dt>
              <dd className="text-3xl font-semibold text-slate-900">1,250+</dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-slate-500">Average ROI</dt>
              <dd className="text-3xl font-semibold text-slate-900">5.2 yrs</dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-slate-500">Carbon offset</dt>
              <dd className="text-3xl font-semibold text-slate-900">18k tons</dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-slate-500">Customer rating</dt>
              <dd className="text-3xl font-semibold text-slate-900">4.9/5</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">What we deliver</p>
            <h2 className="text-3xl font-semibold text-slate-900">Solutions engineered for performance</h2>
          </div>
          <Link href="/services" className="text-sm font-semibold text-amber-600 hover:text-amber-700">
            See all services →
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
          <h3 className="text-2xl font-semibold">Ready for an on-site assessment?</h3>
          <p className="mt-3 text-slate-200">
            Our NABCEP-certified engineers will survey your site, model solar production, and deliver a detailed plan
            within 72 hours.
          </p>
        </div>
        <div className="flex items-center justify-end gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-900/30 transition hover:bg-slate-100"
          >
            Book a Site Visit
          </Link>
          <Link href="/about" className="text-sm font-semibold text-white/80 hover:text-white">
            Learn more about us
          </Link>
        </div>
      </div>
    </section>
  );
}
