import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function MobileSection() {
  return (
    <section className="w-full py-20 light-bg text-capital-black">
      <div className="capital-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
              Capital<br />wherever<br />you are
            </h2>
            <p className="text-lg mb-8 text-capital-black/80">
              Access your Capital account on iOS and web.
            </p>

            <Link
              href="https://apps.apple.com/us/app/capital-tools-for-founders/id6443572380"
              className="inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                width={120}
                height={40}
                unoptimized
              />
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[1/2] relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/mobile-app.jpg"
                alt="Capital Mobile App"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
