import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | SolisGrid Energy",
  description: "Learn about our mission, leadership, values, and approach to solar energy.",
};

const values = [
  {
    title: "Design-Led Engineering",
    description: "Architecture, structural, and electrical teams collaborate from day one so systems look as good as they perform.",
  },
  {
    title: "Radical Transparency",
    description: "Clear pricing, incentive documentation, and production guarantees that spell out exactly what you can expect.",
  },
  {
    title: "Lifetime Stewardship",
    description: "We stick around after installation with monitoring, maintenance, and quarterly performance reviews.",
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">Our story</p>
        <h1 className="text-4xl font-semibold text-slate-900">A solar studio focused on human-centered energy</h1>
        <p className="text-lg text-slate-600">
          SolisGrid Energy launched in 2014 when a collective of electrical engineers, architects, and project managers
          wanted a more thoughtful approach to solar. Today we operate across the West Coast delivering custom systems
          for single-family homes, boutique hotels, production studios, and civic campuses.
        </p>
        <p className="text-lg text-slate-600">
          We are NABCEP-certified, OSHA-30 trained, and members of SEIA. Every install is backed by a 25-year performance
          guarantee and remote monitoring so our clients have total peace of mind.
        </p>
      </div>

      <div className="mt-12 grid gap-6 rounded-3xl bg-white/80 p-8 shadow-lg shadow-amber-100 md:grid-cols-3">
        {values.map((value) => (
          <div key={value.title} className="space-y-3 border-white/60">
            <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
            <p className="text-sm text-slate-600">{value.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="rounded-3xl border border-white/50 bg-gradient-to-br from-amber-500 to-amber-600 p-8 text-white shadow-xl shadow-amber-200/50">
          <h2 className="text-2xl font-semibold">Leadership</h2>
          <p className="mt-3 text-white/90">
            Our team is led by Maya Alvarez (CEO) and Devin Brooks (CTO) whose combined 25 years in solar EPC have produced
            more than 180MW of installed capacity. They oversee every project kickoff to ensure our standards hold true.
          </p>
        </div>
        <div className="rounded-3xl border border-white/50 bg-white/80 p-8 shadow-lg shadow-amber-100">
          <h2 className="text-2xl font-semibold text-slate-900">Community impact</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>• Apprenticeship program with local trade schools</li>
            <li>• Annual donation to grid modernization research</li>
            <li>• Pro-bono installs for two nonprofit organizations per year</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

