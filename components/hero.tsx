import Image from 'next/image'
import { ArrowDown, Star } from 'lucide-react'
import { cabinConfig } from '@/lib/cabin'

export function Hero() {
  const { hero, bookingUrl } = cabinConfig

  return (
    <section id="inicio" className="relative flex min-h-svh flex-col overflow-hidden bg-espresso text-espresso-foreground">
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="animate-slow-zoom object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/45 to-espresso/20" aria-hidden="true" />

      {/* Espaço reservado para o cabeçalho fixo: a frase nunca sobrepõe a barra do nome */}
      <div className="h-28 shrink-0 md:h-32" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-16 lg:px-10 lg:pb-20">
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-accent animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="h-px w-10 bg-accent" aria-hidden="true" />
          {hero.badge}
        </p>

        <h1 className="max-w-4xl text-balance font-serif text-5xl font-light leading-[1.02] animate-in fade-in slide-in-from-bottom-6 duration-1000 sm:text-6xl lg:text-8xl">
          {hero.titleLead}
          <em className="font-normal text-accent">{hero.titleHighlight}</em>
          {hero.titleEnd}
        </h1>

        <div className="mt-10 flex flex-col gap-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 md:flex-row md:items-end md:justify-between">
          <p className="max-w-lg text-pretty text-base leading-relaxed text-espresso-foreground/85 md:text-lg">
            {hero.description}
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent px-8 py-4 text-xs font-medium uppercase tracking-[0.3em] text-accent-foreground transition-colors hover:bg-espresso-foreground"
            >
              Reservar sua estadia
            </a>
            <div className="flex items-center gap-3">
              <div className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-espresso-foreground/85">
                <strong className="font-medium text-espresso-foreground">4,82</strong> · avaliado por hóspedes
              </span>
            </div>
          </div>
        </div>

        <a
          href="#avaliacoes"
          className="mt-14 flex items-center gap-3 self-start text-[0.65rem] uppercase tracking-[0.35em] text-espresso-foreground/60 transition-colors hover:text-accent"
        >
          <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
          Role para descobrir
        </a>
      </div>
    </section>
  )
}
