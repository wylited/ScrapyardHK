'use client'

import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react"
import { Button } from "@/components/ui/button"
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
      {/* Top bar */}
      <header className="w-full p-4 flex justify-end bg-background border-b">
        <Button variant="ghost">Login</Button>
      </header>

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Welcome to Our Hackathon</h1>
          <Button size="lg" onClick={() => setIsOpen(true)}>Sign Up for Scrapyard</Button>
        </div>
      </main>

      {/* Fillout Popup Embed */}
      {isOpen && (
        <FilloutPopupEmbed
          filloutId="fopmQDDwgRus"
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
