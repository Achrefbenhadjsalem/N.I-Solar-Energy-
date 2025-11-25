import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

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
                Mahdia, 5111
                <br />
                San Luis Obispo, CA 93401
              </dd>
            </div>
          </dl>
        </div>
        <ContactForm />
      </div>
      <p className="mt-4 text-center text-xs text-slate-500">
        Les messages envoyés via ce formulaire sont redirigés automatiquement vers achrebenelhadjsalem11@gmail.com.
      </p>
    </section>
  );
}

