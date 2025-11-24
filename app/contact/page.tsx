import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | SolisGrid Energy",
  description: "Request a solar consultation or on-site assessment.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
      <div className="grid gap-12 rounded-3xl border border-white/50 bg-white/80 p-8 shadow-xl shadow-amber-100 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">Talk to our team</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">Schedule a solar consultation</h1>
          <p className="mt-4 text-slate-600">
            We respond to every submission within one business day. Bring your recent utility bill or load profile, and
            we’ll tailor a system design that maximizes production and incentives.
          </p>
          <dl className="mt-8 space-y-6">
            <div>
              <dt className="text-sm uppercase text-slate-500">Phone</dt>
              <dd className="text-lg font-semibold text-slate-900">+1 (844) 555-0173</dd>
            </div>
            <div>
              <dt className="text-sm uppercase text-slate-500">Email</dt>
              <dd className="text-lg font-semibold text-slate-900">hello@solisgrid.energy</dd>
            </div>
            <div>
              <dt className="text-sm uppercase text-slate-500">Studio</dt>
              <dd className="text-lg font-semibold text-slate-900">
                2470 Mission Street, Suite 305
                <br />
                San Luis Obispo, CA 93401
              </dd>
            </div>
          </dl>
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm font-semibold text-slate-700">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-semibold text-slate-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              placeholder="jane@company.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              placeholder="(555) 123-4567"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-semibold text-slate-700">
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              placeholder="Roof type, monthly usage, target go-live…"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-200/70 transition hover:bg-amber-600"
          >
            Send Request
          </button>
        </form>
      </div>
    </section>
  );
}

