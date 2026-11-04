import { Star } from 'lucide-react'
import { reviews } from '@/lib/cabin'
import { Reveal } from '@/components/reveal'

const scores = [
  { label: 'Limpeza', value: '4,8' },
  { label: 'Fiel às fotos', value: '4,8' },
  { label: 'Check-in', value: '5,0' },
  { label: 'Comunicação', value: '5,0' },
]

export function Reviews() {
  const [featured, ...rest] = reviews

  return (
    <section id="avaliacoes" className="scroll-mt-20 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Palavras de quem viveu</p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-tight md:text-6xl">
            Muitos chegam por uma noite. <em className="text-primary">Quase todos</em> prometem voltar.
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <figure className="mx-auto mt-16 max-w-4xl text-center md:mt-20">
            <span className="font-serif text-7xl leading-none text-accent" aria-hidden="true">
              {'“'}
            </span>
            <blockquote className="-mt-4 text-pretty font-serif text-2xl font-light italic leading-snug md:text-4xl">
              {featured.quote}
            </blockquote>
            <figcaption className="mt-8 flex flex-col items-center gap-2">
              <span className="text-sm font-medium tracking-wide">{featured.name}</span>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{featured.occasion}</span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4">
          {rest.map((review, i) => (
            <Reveal key={review.name} delay={i * 120} className="h-full">
              <figure className="flex h-full flex-col border-t border-border p-8 lg:border-t-0 lg:border-l lg:first:border-l-0">
                <div className="flex gap-1" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-3 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-pretty font-serif text-lg leading-relaxed text-foreground/90">
                  {`“${review.quote}”`}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <span className="block text-sm font-medium">{review.name}</span>
                  <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                    {review.occasion} · {review.date}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <dl className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            <div className="flex items-baseline gap-3">
              <dt className="sr-only">Nota geral</dt>
              <dd className="font-serif text-5xl font-light text-primary">4,82</dd>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">nota geral</span>
            </div>
            {scores.map((score) => (
              <div key={score.label} className="flex items-baseline gap-2">
                <dd className="font-serif text-2xl">{score.value}</dd>
                <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{score.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
