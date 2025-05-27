import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function FounderSection() {
  return (
    <section className="w-full py-20 dark-bg">
      <div className="capital-container">
        <div className="mb-12">
          <Link
            href="/founders"
            className="inline-flex items-center gap-2 text-capital-cream mb-6"
          >
            <span className="text-capital-red">Capital Founder Series</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <h2 className="text-3xl md:text-4xl">
            Banking services for the needs<br />of today's founders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group">
            <Link href="/founders/devin" className="block">
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden mb-4">
                <Image
                  src="/founder1.jpg"
                  alt="Devin Lewtan"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  unoptimized
                />
              </div>

              <h5 className="text-lg mb-1">Devin Lewtan</h5>
              <p className="text-sm text-white/60">Co-Founder of Mad Realities</p>
            </Link>
          </div>

          <div className="group">
            <Link href="/founders/vinay" className="block">
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden mb-4">
                <Image
                  src="/founder2.jpg"
                  alt="Vinay Menda"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  unoptimized
                />
              </div>

              <h5 className="text-lg mb-1">Vinay Menda</h5>
              <p className="text-sm text-white/60">Co-Founder of Blank Street Coffee</p>
            </Link>
          </div>

          <div className="group">
            <Link href="/founders/ankur" className="block">
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden mb-4">
                <Image
                  src="/founder3.jpg"
                  alt="Ankur Nagpal"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  unoptimized
                />
              </div>

              <h5 className="text-lg mb-1">Ankur Nagpal</h5>
              <p className="text-sm text-white/60">Founder of Ocho</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
