import { type Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import { getDictionary, type Locale } from '../../dictionaries'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang)
  return {
    title: dict.auth.register.metaTitle,
  }
}

export default async function Register({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <SlimLayout>
      <div className="flex">
        <Link href={`/${lang}`} aria-label={dict.common.home}>
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        {dict.auth.register.title}
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        {dict.auth.register.hasAccount}{' '}
        <Link
          href={`/${lang}/login`}
          className="font-medium text-blue-600 hover:underline"
        >
          {dict.auth.register.signInLink}
        </Link>{' '}
        {dict.auth.register.signInCta}
      </p>
      <form
        action="#"
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
      >
        <TextField
          className="col-span-full"
          label={dict.auth.register.nameLabel}
          name="name"
          type="text"
          autoComplete="name"
          required
        />
        <TextField
          className="col-span-full"
          label={dict.auth.register.emailLabel}
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
          className="col-span-full"
          label={dict.auth.register.passwordLabel}
          name="password"
          type="password"
          autoComplete="new-password"
          required
        />
        <div className="col-span-full">
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              {dict.auth.register.submitButton}{' '}
              <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}
