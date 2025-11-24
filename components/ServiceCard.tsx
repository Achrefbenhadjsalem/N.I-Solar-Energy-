type ServiceCardProps = {
  title: string;
  description: string;
  highlights?: string[];
};

export default function ServiceCard({ title, description, highlights = [] }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-white/50 bg-white/80 p-6 shadow-sm shadow-amber-100 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-2xl bg-amber-100 text-2xl text-amber-500 transition group-hover:bg-amber-200">
          <span className="flex h-full items-center justify-center">☀️</span>
        </div>
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-4 flex-1 text-sm text-slate-600">{description}</p>
      {highlights.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

