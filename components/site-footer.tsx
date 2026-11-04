export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-espresso py-10 text-espresso-foreground/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left lg:px-10">
        <p className="font-serif text-xl text-espresso-foreground">Cabana Bruzamarello</p>
        <p className="text-xs uppercase tracking-[0.3em]">Anfitriã Karen Bruzamarello · Viamão, RS</p>
        <p className="text-xs">{`© ${new Date().getFullYear()} Todos os direitos reservados`}</p>
      </div>
    </footer>
  )
}
