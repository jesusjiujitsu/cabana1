import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { cabinConfig } from '@/lib/cabin'

export function Moments() {
  const { moments } = cabinConfig

  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 lg:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">{moments.badge}</p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-tight md:text-6xl">
            {moments.titleLead}
            <em className="text-primary">{moments.titleHighlight}</em>.
          </h2>
          <p className="mt-8 max-w-md text-pretty leading-relaxed text-muted-foreground">
            {moments.description}
          </p>
          <ul className="mt-10 flex flex-wrap gap-3">
            {moments.occasions.map((item) => (
              <li
                key={item}
                className="border border-border px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid grid-cols-5 gap-4">
          <Reveal className="col-span-3" delay={100}>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={moments.images.large.src}
                alt={moments.images.large.alt}
                fill
                sizes="(min-width: 768px) 30vw, 60vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="col-span-2 flex flex-col gap-4 pt-16">
            <Reveal delay={250}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={moments.images.topRight.src}
                  alt={moments.images.topRight.alt}
                  fill
                  sizes="(min-width: 768px) 20vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={moments.images.bottomRight.src}
                  alt={moments.images.bottomRight.alt}
                  fill
                  sizes="(min-width: 768px) 20vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
