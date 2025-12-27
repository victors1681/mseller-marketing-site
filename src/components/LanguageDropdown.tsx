'use client'

import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import clsx from 'clsx'
import type { Locale } from '@/app/[lang]/dictionaries'

const languages = {
  en: { name: 'English', flag: '🇺🇸' },
  es: { name: 'Español (Latin America)', flag: '🇩🇴' },
}

export function LanguageDropdown() {
  const params = useParams()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const currentLang = (params?.lang as Locale) || 'en'

  // Remove the current language prefix from pathname to get the base path
  const pathWithoutLang = pathname.replace(`/${currentLang}`, '') || '/'

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
        aria-label="Change language"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span>{languages[currentLang].flag}</span>
        <svg
          className={clsx(
            'h-4 w-4 transition-transform',
            isOpen && 'rotate-180',
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 z-20 mt-2 w-48 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu">
              {Object.entries(languages).map(([code, { name, flag }]) => (
                <Link
                  key={code}
                  href={`/${code}${pathWithoutLang}`}
                  className={clsx(
                    'flex items-center gap-3 px-4 py-2 text-sm hover:bg-slate-100',
                    currentLang === code
                      ? 'bg-slate-50 font-semibold text-blue-600'
                      : 'text-slate-700',
                  )}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-xl">{flag}</span>
                  <span>{name}</span>
                  {currentLang === code && (
                    <svg
                      className="ml-auto h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
