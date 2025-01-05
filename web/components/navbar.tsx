// components/navbar.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react'

export default function Navbar({ isOpen, setIsOpen }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 rounded-b-md",
      scrolled ? "bg-white shadow-md" : "bg-white"
    )}>
      <div className="max-w-7xl mx-auto pr-4 sm:pr-6 lg:pr-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="https://hackclub.com/">
              <Image
                src="https://assets.hackclub.com/flag-orpheus-left.svg"
                alt="Scrapyard HK Logo"
                width={113}
                height={64}
                className="h-16 w-auto mr-16"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/rundown"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Rundown
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              FAQ
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(true)}
            >
              Sign Up
            </Button>
            <Button>
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
