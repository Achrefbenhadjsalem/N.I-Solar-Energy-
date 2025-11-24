"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import coverImage from "@/app/photo/cover.png";
import logoImage from "@/app/photo/N.I Solar Energy.jpg";

type Language = "ar" | "fr";

const translations: Record<
  Language,
  {
    label: string;
    dir: "rtl" | "ltr";
    subtitle: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  }
> = {
  ar: {
    label: "العربية",
    dir: "rtl",
    subtitle: "خبراء حلول الطاقة الشمسية",
    title: "تصاميم طاقة شمسية راقية لمجتمعات أكثر إشراقًا.",
    body:
      "توفر N.I Solar Energy أنظمة شمسية وبطاريات ومراقبة ذكية من البداية حتى التشغيل الكامل. ندير الدراسات الهندسية، التمويل، والتشغيل والصيانة لكي تحصل على أقصى إنتاجية منذ اليوم الأول.",
    primaryCta: "استكشف الخدمات",
    secondaryCta: "احجز استشارة",
  },
  fr: {
    label: "Français",
    dir: "ltr",
    subtitle: "Experts en énergie solaire",
    title: "Des installations solaires sur mesure pour des communautés lumineuses.",
    body:
      "N.I Solar Energy conçoit, finance et exploite des systèmes photovoltaïques clé en main. Nous prenons en charge l’étude, l’ingénierie, l’interconnexion réseau et le suivi de performance pour maximiser votre retour sur investissement.",
    primaryCta: "Découvrir nos services",
    secondaryCta: "Planifier une consultation",
  },
};

const languageOrder: Language[] = ["ar", "fr"];

export default function LanguageHero() {
  const [language, setLanguage] = useState<Language>("ar");
  const content = translations[language];

  return (
    <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
      <div className="space-y-6" dir={content.dir} lang={language}>
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
          <span>{content.subtitle}</span>
          <div className="flex gap-2 rounded-full border border-amber-200/60 bg-amber-50 px-3 py-1 text-[10px] tracking-[0.2em] text-amber-600">
            {languageOrder.map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                className={`transition ${language === lang ? "text-slate-900" : "text-amber-500/70"}`}
                aria-pressed={language === lang}
              >
                {translations[lang].label}
              </button>
            ))}
          </div>
        </div>
        <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">{content.title}</h1>
        <p className="text-lg text-slate-600">{content.body}</p>
        <div className="flex flex-wrap gap-4" dir="ltr">
          <Link
            href="/services"
            className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-200/70 transition hover:bg-amber-600"
          >
            {content.primaryCta}
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300"
          >
            {content.secondaryCta}
          </Link>
        </div>
      </div>
      <div className="space-y-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white shadow-xl shadow-amber-100">
          <Image src={coverImage} alt="N.I Solar Energy installation" className="h-full w-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent" aria-hidden />
          <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 text-sm font-semibold text-slate-800 shadow-lg shadow-amber-200/60">
            <Image src={logoImage} alt="Logo N.I Solar Energy" width={32} height={32} className="rounded-full border border-white/80 object-cover" />
            <span>N.I Solar Energy</span>
          </div>
        </div>
        <div className="rounded-3xl border border-white/50 bg-white/80 p-6 shadow-lg shadow-amber-100">
          <dl className="grid grid-cols-2 gap-6 text-center">
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500">Projets livrés</dt>
              <dd className="text-3xl font-semibold text-slate-900">1 250+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500">رد العائد</dt>
              <dd className="text-3xl font-semibold text-slate-900">5.2 سنوات</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500">Carbon offset</dt>
              <dd className="text-3xl font-semibold text-slate-900">18k tons</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500">Satisfaction</dt>
              <dd className="text-3xl font-semibold text-slate-900">4.9/5</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

