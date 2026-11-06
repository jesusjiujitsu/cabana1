import {
  Bath,
  BedDouble,
  Car,
  ChefHat,
  Clock,
  Flame,
  Heater,
  Sun,
  Users,
  Waves,
  WashingMachine,
  Wifi,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cabinConfig } from '@/lib/cabin'

const iconMap = {
  Bath,
  BedDouble,
  Car,
  ChefHat,
  Clock,
  Flame,
  Heater,
  Sun,
  Users,
  Waves,
  WashingMachine,
  Wifi,
}

export function Details() {
  const { details } = cabinConfig

  return (
    <section id="detalhes" className="scroll-mt-20 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">{details.badge}</p>
            <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-tight md:text-5xl">
              {details.title}
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              {details.description}
            </p>

            <dl className="mt-12 divide-y divide-border border-y border-border">
              {details.facts.map(({ iconName, label, value }) => {
                const Icon = iconMap[iconName] || Users
                return (
                  <div key={label} className="flex items-center gap-5 py-5">
                    <Icon className="size-5 shrink-0 text-primary" strokeWidth={1.4} aria-hidden="true" />
                    <dt className="w-28 text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</dt>
                    <dd className="font-serif text-lg">{value}</dd>
                  </div>
                )
              })}
            </dl>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-6 lg:col-start-7">
            <h3 className="text-xs uppercase tracking-[0.4em] text-muted-foreground">O que espera por vocês</h3>
            <ul className="mt-8 grid grid-cols-2 gap-px border border-border bg-border">
              {details.amenities.map(({ iconName, label }) => {
                const Icon = iconMap[iconName] || Waves
                return (
                  <li key={label} className="flex flex-col gap-4 bg-background p-6 md:p-8">
                    <Icon className="size-6 text-primary" strokeWidth={1.2} aria-hidden="true" />
                    <span className="font-serif text-lg leading-snug md:text-xl">{label}</span>
                  </li>
                )
              })}
            </ul>

            <div className="mt-10 border-l-2 border-accent pl-6">
              <p className="font-serif text-xl italic leading-relaxed">
                {`“${details.quote}”`}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
