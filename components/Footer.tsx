export default function Footer() {
  return (
    <footer className="border-t border-white/40 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-amber-500">N.I Solar Energy</p>
          <p className="font-semibold text-slate-700">© {new Date().getFullYear()} N.I Solar Energy</p>
        </div>
        <div className="text-right">
          <p className="max-w-2xl text-slate-500">
            Solutions solaires clés en main pour les projets résidentiels, commerciaux et industriels. Ingénierie
            durable, équipes certifiées NABCEP, support bilingue.
          </p>
          <p className="mt-2 text-xs font-semibold text-slate-400">Langues principales : العربية / Français</p>
        </div>
      </div>
    </footer>
  );
}

