import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { AppShowcase } from '@/components/AppShowcase'
import { AIFeatures } from '@/components/AIFeatures'
import { getDictionary, type Locale } from './dictionaries'

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main>
        <Hero dict={dict} />
        <PrimaryFeatures dict={dict} />
        <SecondaryFeatures dict={dict} />
        <AIFeatures dict={dict} />
        <CallToAction dict={dict} />
        <AppShowcase dict={dict} />
        <Pricing dict={dict} />
        <Faqs dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  )
}
