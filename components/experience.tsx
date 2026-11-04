import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const chapters = [
  {
    number: '01',
    eyebrow: 'A hidromassagem',
    title: 'Um banho quente sob o céu, com o campo inteiro do outro lado do vidro.',
    text: 'A banheira é grande — daquelas que os hóspedes fazem questão de citar. Teto de vidro, janelas amplas, duas taças e a luz dourada do fim de tarde. O resto do mundo pode esperar.',
    image: '/images/hidro-vista.jpg',
    alt: 'Hidromassagem com taças de vinho e vista para o verde',
  },
  {
    number: '02',
    eyebrow: 'A suíte',
    title: 'Acordar devagar, com a paisagem entrando pela parede de vidro.',
    text: 'Madeira aquecida, roupas de cama novas e uma janela que vai do chão ao teto. A cabana A-frame abraça o quarto como um esconderijo — e a vista faz o papel de obra de arte.',
    image: '/images/suite-panoramica.jpg',
    alt: 'Suíte com cama de casal e vista panorâmica do campo',
  },
  {
    number: '03',
    eyebrow: 'O entardecer',
    title: 'O pôr do sol acontece de frente para a varanda. Todos os dias.',
    text: 'Campos, montanhas ao longe e um silêncio que só o interior gaúcho sabe oferecer. A poucos minutos da cidade, mas longe o suficiente para você se desligar de verdade.',
    image: '/images/vista-campos.jpg',
    alt: 'Varanda de madeira com vista para campos e montanhas',
  },
  {
    number: '04',
    eyebrow: 'Ao ar livre',
    title: 'Piscina, pergolado e churrasqueira para dias sem pressa.',
    text: 'Um mergulho de tarde, um churrasco ao fim do dia, a mesa posta do lado de fora. Um dos poucos refúgios da região com piscina — e com espaço de sobra para aproveitar.',
    image: '/images/cabana-piscina.jpg',
    alt: 'Cabana com piscina, pergolado e área externa',
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-20 bg-espresso py-24 text-espresso-foreground md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">A experiência</p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-tight md:text-6xl">
            Cada canto foi pensado para ser vivido <em className="text-accent">a dois</em>.
          </h2>
        </Reveal>

        <div className="mt-20 flex flex-col gap-24 md:gap-32">
          {chapters.map((chapter, i) => (
            <article key={chapter.number} className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
              <Reveal className={cn('md:col-span-7', i % 2 === 1 && 'md:order-2')}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={chapter.image || '/placeholder.svg'}
                    alt={chapter.alt}
                    fill
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="object-cover transition-transform duration-[2000ms] hover:scale-105"
                  />
                </div>
              </Reveal>
              <Reveal delay={150} className={cn('md:col-span-5', i % 2 === 1 && 'md:order-1')}>
                <div className="flex items-center gap-4">
                  <span className="font-serif text-5xl font-light text-accent/80">{chapter.number}</span>
                  <span className="h-px flex-1 bg-espresso-foreground/15" aria-hidden="true" />
                </div>
                <p className="mt-6 text-xs uppercase tracking-[0.35em] text-espresso-foreground/60">{chapter.eyebrow}</p>
                <h3 className="mt-4 text-balance font-serif text-3xl font-light leading-snug md:text-4xl">
                  {chapter.title}
                </h3>
                <p className="mt-6 text-pretty leading-relaxed text-espresso-foreground/75">{chapter.text}</p>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
