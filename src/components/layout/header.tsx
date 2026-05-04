export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur">
      <div className="container-padded flex h-16 items-center justify-between">
        <span className="text-lg font-semibold">Ultascale</span>
        <a href="#contact" className="rounded-full border border-slate-600 px-4 py-2 text-sm hover:border-accent">Book Discovery Call</a>
      </div>
    </header>
  );
}
