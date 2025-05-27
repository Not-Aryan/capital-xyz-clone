import React from 'react'
import Link from 'next/link'

interface CapitalLogoProps {
  className?: string
}

export function CapitalLogo({ className = '' }: CapitalLogoProps) {
  return (
    <Link href="/" className={`font-bold tracking-tight uppercase text-lg ${className}`}>
      Capital
    </Link>
  )
}
