import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const occasions = ['Pedidos de namoro', 'Pedidos de casamento', 'Aniversários', 'Bodas', 'Lua de mel', 'Só porque sim']

export function Moments() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 lg:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Momentos que ficam</p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-tight md:text-6xl">
            O cenário perfeito para dizer <em className="text-primary">{'“sim”'}</em>.
          </h2>
          <p className="mt-8 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Pétalas sobre a cama, balões de coração, uma frase escrita para ser lembrada para sempre. A Cabana
            Bruzamarello já foi palco de pedidos, aniversários e recomeços — e está pronta para guardar a sua história.
          </p>
          <ul className="mt-10 flex flex-wrap gap-3">
            {occasions.map((item) => (
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
                src="/images/suite-namorar.jpg"
                alt="Cama com pétalas de rosa formando a frase Quer namorar comigo"
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
                  src="/images/decoracao-casa-comigo.jpg"
                  alt="Suíte decorada com balões de coração e a frase Casa comigo"
                  fill
                  sizes="(min-width: 768px) 20vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/hidro-tacas.jpg"
                  alt="Duas taças de vinho na borda da hidromassagem"
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
