import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Reviews } from '@/components/reviews'
import { Experience } from '@/components/experience'
import { Moments } from '@/components/moments'
import { Gallery } from '@/components/gallery'
import { Details } from '@/components/details'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Reviews />
        <Experience />
        <Moments />
        <Gallery />
        <Details />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
