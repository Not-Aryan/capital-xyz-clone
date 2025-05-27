import React from 'react'

export function ApySection() {
  return (
    <section className="w-full py-20 light-bg text-capital-black">
      <div className="capital-container text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">
          Earn 4% APY on all<br />of your money
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-capital-black/80">
          Free, high-yield banking services with automated fundraising built right in.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <div className="w-10 h-10 rounded-full bg-capital-black/10 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 12L11 15L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="w-10 h-10 rounded-full bg-capital-black/10 flex items-center justify-center">
            <span className="font-gt-america-mono text-xs">x</span>
          </div>

          <div className="w-10 h-10 rounded-full bg-capital-black/10 flex items-center justify-center">
            <span className="font-gt-america-mono text-xs">y</span>
          </div>

          <div className="w-10 h-10 rounded-full bg-capital-black/10 flex items-center justify-center">
            <span className="font-gt-america-mono text-xs">z</span>
          </div>

          <div className="w-10 h-10 rounded-full bg-capital-black/10 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
