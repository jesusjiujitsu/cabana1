'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { cabinConfig } from '@/lib/cabin'

const links = [
  { href: '#avaliacoes', label: 'Hóspedes' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#detalhes', label: 'Detalhes' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled || open
          ? 'bg-espresso/95 py-3 shadow-lg shadow-black/10 backdrop-blur-md'
          : 'bg-gradient-to-b from-black/60 to-transparent py-5',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#inicio" className="flex flex-col leading-none text-espresso-foreground">
          <span className="font-serif text-2xl tracking-wide md:text-[1.7rem]">{cabinConfig.name}</span>
          <span className="mt-1 text-[0.62rem] uppercase tracking-[0.35em] text-espresso-foreground/70">
            {cabinConfig.locationShort}
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.25em] text-espresso-foreground/80 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href={cabinConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent/80 bg-accent/10 px-5 py-2.5 text-xs uppercase tracking-[0.25em] text-accent backdrop-blur-sm transition-all hover:bg-accent hover:text-accent-foreground"
          >
            Reservar
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="p-2 text-espresso-foreground md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-espresso-foreground/10 bg-espresso px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.25em] text-espresso-foreground/80"
              >
                {link.label}
              </a>
            ))}
            <a
              href={cabinConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 text-center bg-accent py-3 text-xs uppercase tracking-[0.25em] text-accent-foreground"
            >
              Reservar
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
