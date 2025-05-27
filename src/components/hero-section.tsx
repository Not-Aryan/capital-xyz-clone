import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="pt-8 pb-16 md:pt-16 md:pb-24">
      <div className="capital-container">
        <div className="text-center mb-8">
          <Link
            href="/svb"
            className="inline-flex items-center gap-2 bg-capital-cream/10 text-capital-cream px-4 py-2 rounded-full text-sm mb-8"
          >
            Expedited onboarding for SVB customers
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-4 leading-tight max-w-4xl mx-auto">
            Modern companies<br />are built on Capital
          </h1>
        </div>

        <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-[16/9] relative bg-black/40">
            <Image
              src="/dashboard.jpg"
              alt="Capital Dashboard"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  )
}
