'use client'

import { Container } from '@/components/Container'
import type { Dictionary } from '@/app/[lang]/dictionaries'
import { motion } from 'framer-motion'
import {
  BoltIcon,
  CloudArrowDownIcon,
  MapPinIcon,
  UserGroupIcon,
  SignalSlashIcon,
  ClockIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import mainScreen from '@/images/screenshots/main-screen.png'
import orderScreen from '@/images/screenshots/order screen.png'
import productsScreen from '@/images/screenshots/products-screen.png'
import customerScreen from '@/images/screenshots/customer screen.png'
import collectionsHistory from '@/images/screenshots/collections-history.png'
import collectionScreen from '@/images/screenshots/collection screen.png'

const features = [
  {
    name: 'Lightning Fast Orders',
    description:
      'Take orders in seconds with our intuitive native iOS interface.',
    icon: BoltIcon,
  },
  {
    name: 'Work Offline',
    description:
      'Keep working without internet. Sync automatically when connected.',
    icon: SignalSlashIcon,
  },
  {
    name: 'Geolocation',
    description:
      'Track routes, optimize visits, and verify customer locations.',
    icon: MapPinIcon,
  },
  {
    name: 'Customer Management',
    description: 'Complete customer database at your fingertips.',
    icon: UserGroupIcon,
  },
  {
    name: 'Payments & Collections',
    description: 'Process payments and manage collections on the go.',
    icon: CreditCardIcon,
  },
  {
    name: 'Real-time Sync',
    description: 'All your data synced instantly across devices.',
    icon: CloudArrowDownIcon,
  },
]

export function AppShowcase({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="app-showcase"
      className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 py-20 sm:py-32"
    >
      {/* Background decoration */}
      <div className="bg-grid-slate-100/[0.05] absolute inset-0 bg-[size:60px_60px]" />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-blue-400 ring-1 ring-inset ring-slate-700">
              <DevicePhoneMobileIcon className="h-5 w-5" />
              {dict.appShowcase?.badge || 'Now Available on iOS'}
            </div>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {dict.appShowcase?.title || 'MSeller for iOS'}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              {dict.appShowcase?.subtitle ||
                'Made specially for Sales Representatives and Drivers. Native iOS app with intuitive design, lightning-fast performance, and offline capabilities.'}
            </p>
          </motion.div>

          {/* App Store Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <a
              href="https://apps.apple.com/us/app/mseller/id6496435577"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              {dict.appShowcase?.appStoreButton || 'Download on the App Store'}
            </a>
          </motion.div>
        </div>

        {/* Screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-16"
        >
          <div className="relative">
            {/* Horizontal Scrolling Container */}
            <div className="scrollbar-hide flex gap-4 overflow-x-auto overflow-y-hidden pb-4">
              {[
                {
                  id: 1,
                  image: mainScreen,
                  alt: 'MSeller Dashboard - Sales overview, metrics, and quick actions',
                },
                {
                  id: 2,
                  image: orderScreen,
                  alt: 'Create Order - Fast product selection and ordering interface',
                },
                {
                  id: 3,
                  image: productsScreen,
                  alt: 'Product Catalog - Browse and search products with real-time inventory',
                },
                {
                  id: 4,
                  image: customerScreen,
                  alt: 'Customer Details - Complete customer information and account management',
                },
                {
                  id: 5,
                  image: collectionsHistory,
                  alt: 'Collections History - Track payments and collection records',
                },
                {
                  id: 6,
                  image: collectionScreen,
                  alt: 'Collection Screen - Process payments and manage collections',
                },
              ].map((screenshot, index) => (
                <motion.div
                  key={screenshot.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0 + index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="group relative flex-shrink-0 cursor-pointer"
                  style={{ width: '240px' }}
                >
                  <motion.div
                    className="relative aspect-[9/19.5] overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-2xl ring-1 ring-white/10"
                    transition={{ duration: 0.15 }}
                  >
                    {/* Phone Frame */}
                    <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/20" />

                    {/* Screenshot Image */}
                    <div className="h-full w-full">
                      <Image
                        src={screenshot.image}
                        alt={screenshot.alt}
                        className="h-full w-full object-cover"
                        placeholder="blur"
                      />
                    </div>

                    {/* Reflection effect */}
                    <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-white/0 via-white/5 to-white/0" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-20 max-w-6xl"
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-slate-800/50 p-6 ring-1 ring-slate-700/50 transition-all hover:bg-slate-800 hover:ring-slate-600"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-110">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-lg font-medium text-slate-300">
            {dict.appShowcase?.ctaText ||
              'Join thousands of sales teams using MSeller'}
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/us/app/mseller/id6496435577"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
            >
              Get started free
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
