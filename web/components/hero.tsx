//components/hero.tsx
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Hero({ isOpen, setIsOpen }) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 z-0 rounded-b-3xl"
        style={{
          backgroundImage: "url('/cutting-mat.png')",
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#f2f2f2',
          backgroundPosition: 'top',
          backgroundSize: 'contain',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <Image
          src="/wordmark.svg"
          alt="Hackathon Logo"
          width={500}
          height={100}
          className="mb-8"
        />

        <h1 className="text-5xl font-bold mb-4">The Highschool Hackathon</h1>

        <Button
          size="lg"
          className="mb-4 bg-yellow text-black hover:bg-red-300 font-bold text-2xl"
          onClick={() => setIsOpen(true)}
        >
          Sign Up Now!
        </Button>

        <p className="text-xl">March 15-16 2025 @ <a href="https://maps.app.goo.gl/BRhV8SoBx5p19r6n6" className="underline hover:text-cyan-200" target="_blank">HKPC Building</a></p>
      </div>
    </div>
  )
}
