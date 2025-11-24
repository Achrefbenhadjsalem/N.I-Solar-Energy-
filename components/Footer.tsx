export default function Footer() {
  return (
    <footer className="border-t border-white/40 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:px-6">
        <p className="font-semibold text-slate-700">© {new Date().getFullYear()} SolisGrid Energy</p>
        <p className="max-w-2xl text-slate-500">
          Clean energy solutions across residential, commercial, and industrial projects. Built with pride in
          sustainable engineering.
        </p>
      </div>
    </footer>
  );
}

