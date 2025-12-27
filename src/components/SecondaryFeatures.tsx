import type { Dictionary } from '@/app/[lang]/dictionaries'
import { Container } from '@/components/Container'

export function SecondaryFeatures({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {dict.secondaryFeatures.title}
          </h2>
          <p className="mt-6 text-lg tracking-tight text-slate-700">
            {dict.secondaryFeatures.subtitle}
          </p>
        </div>
      </Container>
    </section>
  )
}
