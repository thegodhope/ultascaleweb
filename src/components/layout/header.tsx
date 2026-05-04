import Image from 'next/image';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur">
      <div className="container-padded flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="Ultascale home">
          <Image src="/images/logos/ultascale-mark.svg" alt="Ultascale logo mark" width={28} height={28} priority />
          <span className="text-lg font-semibold tracking-wide">ULTASCALE</span>
        </a>
        <a href="#contact" className="rounded-full border border-accent/70 px-4 py-2 text-sm text-slate-100 hover:border-accent hover:text-white">Book Discovery Call</a>
      </div>
    </header>
  );
}
