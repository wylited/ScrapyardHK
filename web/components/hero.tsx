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
    <div className="relative h-screen overflow-hidden rounded-b-3xl">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/cutting-mat.png')",
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#f2f2f2',
          backgroundPosition: 'top',
          backgroundSize: 'cover',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white mx-4">
        <Image
          src="/wordmark.svg"
          alt="Hackathon Logo"
          width={500}
          height={100}
          className="mb-4 drop-shadow-2xl"
        />

        <h1 className="text-3xl md:text-4xl lg:text-5xl
                       font-extrabold text-center mx-16
                       transform hover:scale-105 transition-transform duration-300
                       ">
          The<span className="text-red-400 font-phantom bg-slate-900 rounded-md"> highschool hackathon </span>where your wacky ideas become<span className="text-blue-400 bg-slate-900 rounded-md"> wonderful inventions. </span>
        </h1>

        <Button
          className="font-phantom my-4 bg-yellow text-black hover:bg-red-300 hover:drop-shadow-2xl font-bold text-2xl md:text-3xl"
          onClick={() => setIsOpen(true)}
        >
          Sign Up Now!
        </Button>

        <p className="text-2xl font-grotesk">March 15-16  @ <a href="https://maps.app.goo.gl/BRhV8SoBx5p19r6n6" className="underline hover:text-cyan-200" target="_blank">HKPC Building</a></p>
      </div>
    </div>
  )
}
