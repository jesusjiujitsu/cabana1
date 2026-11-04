'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { gallery } from '@/lib/cabin'
import { cn } from '@/lib/utils'

const layout = [
  'md:col-span-2 md:row-span-2',
  '',
  '',
  'md:col-span-2',
  '',
  'md:row-span-2',
  '',
  '',
  'md:col-span-2',
  '',
  '',
  '',
]

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const step = useCallback(
    (dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + gallery.length) % gallery.length)),
    [],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close, step])

  return (
    <section id="galeria" className="scroll-mt-20 bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Galeria</p>
            <h2 className="mt-5 font-serif text-4xl font-light leading-tight md:text-6xl">Exatamente como nas fotos.</h2>
          </div>
          <p className="max-w-sm text-pretty text-muted-foreground">
            {'É o que mais ouvimos dos hóspedes. Clique em qualquer imagem para ver em detalhes.'}
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {gallery.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setActive(i)}
              className={cn('group relative overflow-hidden focus-visible:outline-2 focus-visible:outline-primary', layout[i])}
              aria-label={`Ampliar foto: ${photo.alt}`}
            >
              <Image
                src={photo.src || '/placeholder.svg'}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/20" />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visualização da foto"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/95 p-4 animate-in fade-in duration-300"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 text-espresso-foreground/80 hover:text-espresso-foreground"
            aria-label="Fechar"
          >
            <X className="size-7" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            className="absolute left-3 p-2 text-espresso-foreground/80 hover:text-espresso-foreground md:left-8"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="size-9" />
          </button>
          <figure className="relative h-[80vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={gallery[active].src || '/placeholder.svg'} alt={gallery[active].alt} fill sizes="100vw" className="object-contain" />
            <figcaption className="absolute -bottom-9 inset-x-0 text-center text-xs uppercase tracking-[0.3em] text-espresso-foreground/60">
              {active + 1} / {gallery.length}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            className="absolute right-3 p-2 text-espresso-foreground/80 hover:text-espresso-foreground md:right-8"
            aria-label="Próxima foto"
          >
            <ChevronRight className="size-9" />
          </button>
        </div>
      )}
    </section>
  )
}
