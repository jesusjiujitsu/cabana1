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

const facts = [
  { icon: Users, label: 'Hóspedes', value: '2 pessoas' },
  { icon: BedDouble, label: 'Suíte', value: '1 quarto · cama de casal' },
  { icon: Bath, label: 'Banheiros', value: '2 banheiros' },
  { icon: Clock, label: 'Horários', value: 'Check-in 15h · Check-out 11h' },
]

const amenities = [
  { icon: Waves, label: 'Banheira de hidromassagem' },
  { icon: Sun, label: 'Piscina' },
  { icon: Flame, label: 'Churrasqueira' },
  { icon: ChefHat, label: 'Cozinha equipada' },
  { icon: Wifi, label: 'Wi-Fi' },
  { icon: Car, label: 'Estacionamento gratuito' },
  { icon: Heater, label: 'Aquecedor' },
  { icon: WashingMachine, label: 'Máquina de lavar' },
]

export function Details() {
  return (
    <section id="detalhes" className="scroll-mt-20 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">O refúgio</p>
            <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-tight md:text-5xl">
              Espaço inteiro, só para vocês.
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Uma cabana inteira em área rural tranquila de Viamão, na região metropolitana de Porto Alegre. Calma,
              cheia de estilo e pensada para quem quer aproveitar cada minuto com quem ama.
            </p>

            <dl className="mt-12 divide-y divide-border border-y border-border">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-5 py-5">
                  <Icon className="size-5 shrink-0 text-primary" strokeWidth={1.4} aria-hidden="true" />
                  <dt className="w-28 text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</dt>
                  <dd className="font-serif text-lg">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-6 lg:col-start-7">
            <h3 className="text-xs uppercase tracking-[0.4em] text-muted-foreground">O que espera por vocês</h3>
            <ul className="mt-8 grid grid-cols-2 gap-px border border-border bg-border">
              {amenities.map(({ icon: Icon, label }) => (
                <li key={label} className="flex flex-col gap-4 bg-background p-6 md:p-8">
                  <Icon className="size-6 text-primary" strokeWidth={1.2} aria-hidden="true" />
                  <span className="font-serif text-lg leading-snug md:text-xl">{label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-l-2 border-accent pl-6">
              <p className="font-serif text-xl italic leading-relaxed">
                {'“Achamos que seria frio, mas o pôr do sol é de frente para a cabana, o que esquenta o final de tarde.”'}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">Ana Vitória, hóspede</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
