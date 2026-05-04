export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-sm text-slate-400">
      <div className="container-padded flex flex-wrap items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Ultascale. All rights reserved.</p>
        <p>Build Bold. Scale Smart. Grow Revenue.</p>
      </div>
    </footer>
  );
}
