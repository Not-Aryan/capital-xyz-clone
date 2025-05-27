import React from 'react'
import Link from 'next/link'

export function CtaSection() {
  return (
    <section className="w-full py-24 dark-bg">
      <div className="capital-container text-center">
        <Link
          href="https://rho.co"
          className="inline-flex items-center justify-center capital-red-bg hover:bg-[#cc4d42] text-white text-2xl w-40 h-40 rounded-full transition-colors"
        >
          Start
        </Link>
      </div>
    </section>
  )
}
