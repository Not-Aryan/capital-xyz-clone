import React from 'react'
import Link from 'next/link'
import { CapitalLogo } from './ui/capital-logo'
import { Button } from './ui/button'

export function Header() {
  return (
    <header className="w-full py-4">
      <div className="capital-container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CapitalLogo className="text-primary" />
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-primary hover:text-primary/80 transition-colors">
            Twitter
          </Link>
          <Link href="/founders" className="text-primary hover:text-primary/80 transition-colors">
            Founders
          </Link>
          <Link href="/team" className="text-primary hover:text-primary/80 transition-colors">
            Team
          </Link>
          <Link href="/support" className="text-primary hover:text-primary/80 transition-colors">
            Support
          </Link>
          <Link href="https://rho.co" className="capital-button text-base px-6 py-2">
            Start
          </Link>
        </div>
      </div>
    </header>
  )
}
