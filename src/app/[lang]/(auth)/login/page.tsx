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
    title: dict.auth.login.metaTitle,
  }
}

export default async function Login({
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
        {dict.auth.login.title}
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        {dict.auth.login.noAccount}{' '}
        <Link
          href={`/${lang}/register`}
          className="font-medium text-blue-600 hover:underline"
        >
          {dict.auth.login.signUpLink}
        </Link>{' '}
        {dict.auth.login.signUpCta}
      </p>
      <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
        <TextField
          label={dict.auth.login.emailLabel}
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
          label={dict.auth.login.passwordLabel}
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
        <div>
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              {dict.auth.login.submitButton}{' '}
              <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}
