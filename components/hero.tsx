import Image from 'next/image'
import { ArrowDown, Star } from 'lucide-react'
import { cabinConfig } from '@/lib/cabin'

export function Hero() {
  const { hero, bookingUrl, rating, reviewCount } = cabinConfig

  return (
    <section
      id="inicio"
      className="relative flex h-svh flex-col justify-between overflow-hidden bg-espresso text-espresso-foreground"
    >
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="animate-slow-zoom object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/50 to-espresso/25"
        aria-hidden="true"
      />

      {/* Espaço do cabeçalho fixo compacto para manter o conteúdo visível de imediato */}
      <div className="h-20 shrink-0 md:h-24" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-6 lg:px-10 lg:pb-8">
        <p className="mb-3 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.35em] text-accent animate-in fade-in slide-in-from-bottom-2 duration-700 md:mb-4">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          {hero.badge}
        </p>

        <h1 className="max-w-4xl text-balance font-serif text-3xl font-light leading-[1.08] animate-in fade-in slide-in-from-bottom-4 duration-700 sm:text-5xl lg:text-6xl">
          {hero.titleLead}
          <em className="font-normal text-accent">{hero.titleHighlight}</em>
          {hero.titleEnd}
        </h1>

        <div className="mt-4 flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 md:mt-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-lg text-pretty text-sm leading-relaxed text-espresso-foreground/85 md:text-base">
            {hero.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-accent-foreground transition-colors hover:bg-espresso-foreground"
            >
              Reservar sua estadia
            </a>
            <div className="flex items-center gap-2.5">
              <div className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-xs text-espresso-foreground/85 md:text-sm">
                <strong className="font-medium text-espresso-foreground">
                  {rating}
                </strong>{' '}
                · {reviewCount} avaliações
              </span>
            </div>
          </div>
        </div>

        <a
          href="#avaliacoes"
          className="mt-6 flex items-center gap-2.5 self-start text-[0.65rem] uppercase tracking-[0.3em] text-espresso-foreground/70 transition-colors hover:text-accent md:mt-8"
        >
          <ArrowDown className="size-3.5 animate-bounce" aria-hidden="true" />
          Role para descobrir
        </a>
      </div>
    </section>
  )
}
