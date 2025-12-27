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
import { Contact } from '@/components/Contact'
import { getDictionary, defaultLocale } from './[lang]/dictionaries'

export default async function Home() {
  const dict = await getDictionary(defaultLocale)

  return (
    <>
      <Header dict={dict} lang={defaultLocale} />
      <main>
        <Hero dict={dict} />
        <PrimaryFeatures dict={dict} />
        <SecondaryFeatures dict={dict} />
        <AIFeatures dict={dict} />
        <CallToAction dict={dict} />
        <AppShowcase dict={dict} />
        <Pricing dict={dict} />
        <Faqs dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  )
}
