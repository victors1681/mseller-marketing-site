'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { LanguageDropdown } from '@/components/LanguageDropdown'
import type { Dictionary, Locale } from '@/app/[lang]/dictionaries'

function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label={dict.common.toggleNavigation}
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <Transition>
        <TransitionChild
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <PopoverOverlay className="fixed inset-0 bg-slate-300/50" />
        </TransitionChild>
        <TransitionChild
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <PopoverPanel className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5">
            <MobileNavLink href="#features">
              {dict.navigation.features}
            </MobileNavLink>
            <MobileNavLink href="#app-showcase">
              {dict.navigation.appShowcase}
            </MobileNavLink>
            <MobileNavLink href="#pricing">
              {dict.navigation.pricing}
            </MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href={`/${lang}/login`}>
              {dict.navigation.signIn}
            </MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <div className="px-2 py-2">
              <div className="mb-2 text-sm font-medium text-slate-600">
                {lang === 'es' ? 'Idioma' : 'Language'}
              </div>
              <LanguageDropdown />
            </div>
          </PopoverPanel>
        </TransitionChild>
      </Transition>
    </Popover>
  )
}

export function Header({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href={`/${lang}`} aria-label={dict.common.home}>
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#features">{dict.navigation.features}</NavLink>
              <NavLink href="#app-showcase">
                {dict.navigation.appShowcase}
              </NavLink>
              <NavLink href="#pricing">{dict.navigation.pricing}</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href={`/${lang}/login`}>
                {dict.navigation.signIn}
              </NavLink>
            </div>
            <Button href={`/${lang}/register`} color="blue">
              <span>
                {dict.hero.cta.primary.split(' ')[0]}{' '}
                {dict.hero.cta.primary.split(' ')[1]}{' '}
                <span className="hidden lg:inline">
                  {dict.hero.cta.primary.split(' ').slice(2).join(' ')}
                </span>
              </span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation dict={dict} lang={lang} />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
