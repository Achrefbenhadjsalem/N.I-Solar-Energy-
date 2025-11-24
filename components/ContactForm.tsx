"use client";

import { useState, FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (key: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error ?? "Une erreur est survenue. Veuillez réessayer.");
      }

      setStatus("success");
      setForm(initialState);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Impossible d’envoyer votre message.";
      setErrorMessage(message);
      setStatus("error");
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-slate-700">
          Nom complet
        </label>
        <input
          id="name"
          name="name"
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
          placeholder="Ex. Jana Amrani"
          value={form.name}
          onChange={handleChange("name")}
          required
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
          value={form.email}
          onChange={handleChange("email")}
          required
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
          value={form.phone}
          onChange={handleChange("phone")}
          required
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
          value={form.message}
          onChange={handleChange("message")}
          required
        />
      </div>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">العربية • Français</p>
      <button
        type="submit"
        className="w-full rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-200/70 transition hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Envoi..." : "Envoyer la demande"}
      </button>
      {status === "success" && (
        <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          Merci ! Votre message a été transmis à N.I Solar Energy.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{errorMessage}</p>
      )}
    </form>
  );
}

