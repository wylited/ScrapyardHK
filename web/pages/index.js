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
      <p>
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
        lorem ipsum
      </p>

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
