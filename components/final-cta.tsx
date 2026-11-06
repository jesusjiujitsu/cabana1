import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { cabinConfig } from '@/lib/cabin'
import { Reveal } from '@/components/reveal'

export function FinalCta() {
  const { finalCta, bookingUrl, locationFull } = cabinConfig

  return (
    <section className="relative isolate overflow-hidden bg-espresso py-32 text-espresso-foreground md:py-44">
      <Image
        src={finalCta.backgroundImage}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-espresso/70 via-espresso/40 to-espresso" aria-hidden="true" />

      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-accent">{finalCta.badge}</p>
        <h2 className="mt-6 text-balance font-serif text-5xl font-light leading-[1.05] md:text-7xl">
          {finalCta.titleLead}
          <em className="text-accent">{finalCta.titleHighlight}</em>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-pretty leading-relaxed text-espresso-foreground/80">
          {finalCta.description}
        </p>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block bg-accent px-10 py-5 text-xs font-medium uppercase tracking-[0.3em] text-accent-foreground transition-colors hover:bg-espresso-foreground"
        >
          {finalCta.buttonText}
        </a>
        <p className="mt-10 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-espresso-foreground/60">
          <MapPin className="size-3.5" aria-hidden="true" />
          {locationFull}
        </p>
      </Reveal>
    </section>
  )
}
