'use client'

import Head from "next/head";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import { FilloutPopupEmbed } from "@fillout/react"
import "@fillout/react/style.css"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return(
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Scrapyard HK</title>
        <meta name="description" content="Scrapyard HK Hackathon Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      <Hero isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="font-mono text-2xl">JetBrains Mono text</div>
      <div className="font-phantom text-2xl">Phantom Sans text</div>
      <div className="font-grotesk text-2xl">Space Grotesk text</div>
      {/* Fillout Popup Embed */}
      {isOpen && (
        <FilloutPopupEmbed
          filloutId="fopmQDDwgRus"
          dynamicResize
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  )

}
