import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | N.I Solar Energy",
  description: "Planifiez une consultation solaire avec assistance arabe et française.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
      <div className="grid gap-12 rounded-3xl border border-white/50 bg-white/80 p-8 shadow-xl shadow-amber-100 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">Contactez notre studio</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">Planifiez une consultation solaire</h1>
          <p className="mt-4 text-slate-600">
            Réponse sous 24h ouvrées. Nous parlons العربية و français afin de faciliter le partage de vos besoins : facture
            d’électricité, profil de charge, objectif de mise en service et contraintes de toiture.
          </p>
          <dl className="mt-8 space-y-6">
            <div>
              <dt className="text-sm uppercase text-slate-500">Téléphone</dt>
              <dd className="text-lg font-semibold text-slate-900">+216 50 659 356</dd>
            </div>
            <div>
              <dt className="text-sm uppercase text-slate-500">Téléphone 2</dt>
              <dd className="text-lg font-semibold text-slate-900">+216 25 874 187</dd>
            </div>
            <div>
              <dt className="text-sm uppercase text-slate-500">Email</dt>
              <dd className="text-lg font-semibold text-slate-900">contact.nisolarenergy@gmail.com</dd>
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
              Nom complet
            </label>
            <input
              id="name"
              name="name"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              placeholder="Ex. Jana Amrani"
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
              placeholder="client@entreprise.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
              Téléphone
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
              Détails du projet / تفاصيل المشروع
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              placeholder="Type de toit, usage mensuel, date cible..."
            />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">العربية • Français</p>
          <button
            type="submit"
            className="w-full rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-200/70 transition hover:bg-amber-600"
          >
            Envoyer la demande
          </button>
        </form>
      </div>
    </section>
  );
}

