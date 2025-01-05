'use client'

import Head from "next/head";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Hero from "@/components/hero"
import Paper from "@/components/paper"
import { FilloutPopupEmbed } from "@fillout/react"
import "@fillout/react/style.css"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return(
    <div className="min-h-screen flex flex-col bg-[#212121] text-white">
      <Head>
        <title>Scrapyard HK</title>
        <meta name="description" content="Scrapyard HK Hackathon Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      <Hero isOpen={isOpen} setIsOpen={setIsOpen} />

      <Paper title="The Scrapyard Calls" date="January 6, 2025" sub={Math.ceil((new Date(new Date().getFullYear(), 2, 15) - new Date()) / (1000 * 60 * 60 * 24)) + (new Date() > new Date(new Date().getFullYear(), 2, 15) ? 365 : 0) + " days left"}>
        <p className="font-bold">Greetings, Young Inventor.</p>
        <br/>
        <p>In a world overflowing with forgotten tech and discarded dreams, a call rises from the digital landscape. It’s time for a creative revolution.</p>
        <br/>
        <p>Our cities brim with electronic waste. Schools buzz with untapped potential. Brilliant ideas lie dormant, waiting for a spark.</p>
        <br/>
        <p>This is the dawn of a new era of innovation.</p>
        <br/>
        <p>One thing remains unchanged: the power of imagination. Circuits still spark, code still compiles, and creativity still flourishes.</p>
        <br/>
        <p>Join over 250 visionaries like yourself for 2 days at MiT Innovation Node.</p>
        <br/>
        <p>Build something extraordinary from the ordinary. Transform the discarded into the remarkable.</p>
        <br/>
        <p>What will you create? The future is counting on you. From scraps, you’ll forge wonders that could change the world.</p>
        <br/>
        <p>Will you craft a robot from recycled parts? Design an app that breathes new life into old devices? Or invent a machine that does the impossible?</p>
        <br/>
        <p>The choice is yours. The ideas are limitless. The potential is limitless.</p>
        <br/>
        <p>Welcome to Scrapyard Hong Kong, where one person's trash becomes another's breakthrough.</p>
        <br/>
        <p>Are you ready to redefine what’s possible?</p>
        <br/>
        <p className="font-bold">From the Scrapyard Hong Kong team...</p>
      </Paper>
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
