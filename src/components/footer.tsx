'use client'

import React from 'react'
import Link from 'next/link'
import { CapitalLogo } from './ui/capital-logo'

export function Footer() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('contact@capital.xyz')
  }

  return (
    <footer className="w-full py-8 dark-bg border-t border-white/10">
      <div className="capital-container">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-sm text-white/60 gap-4">
          <div className="flex items-center gap-4">
            <Link href="/policies/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span>|</span>
            <Link href="/policies/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <button
              onClick={copyToClipboard}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
              <span className="ml-1">contact@capital.xyz</span>
            </button>
          </div>

          <div>
            <p>Capital Software & Services Inc. is a financial technology company and is not a bank.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
