'use client'

import Head from "next/head";
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Hero from "@/components/hero"
import Paper from "@/components/paper"
import RundownSchedule from "@/components/rundown"
import BentoGrid from "@/components/bento"
import FAQ from "@/components/faq"
import LoginButton from "@/components/login_button"
import { FilloutPopupEmbed } from "@fillout/react"
import "@fillout/react/style.css"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Scrapyard Hong Kong",
    "startDate": "2025-03-15T09:00:00+08:00",
    "endDate": "2025-03-16T18:00:00+08:00",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "South Island School",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "78 Tat Chee Ave, Kowloon Tong",
        "addressLocality": "Hong Kong",
        "postalCode": "000000",
        "addressCountry": "HK"
      }
    },
    "image": [
      "https://scrapyard.hk/working.JPG"
    ],
    "description": "Join over 250 visionaries for 2 days at a safehouse. Build something extraordinary from the ordinary.",
    "organizer": {
      "@type": "Organization",
      "name": "Scrapyard Hong Kong",
      "url": "https://scrapyard.hk"
    }
  };

  useEffect(() => {
    console.log(` ###   ### ###   ##  ###  #   #  ##  ###  ###   
#     #  # #  #  ##  #  # #   #  ##  #  # #  #  
#    #     #  # #  # #  #  # #  #  # #  # #   # 
 ##  #     ###  #  # ###    #   #  # ###  #   # 
   # #     # #  #### #      #   #### # #  #   # 
   #  #    #  # #  # #      #   #  # #  # #  #  
###    ### #  # #  # #      #   #  # #  # ### 

Hey hacker! Register for Scrapyard Hong Kong at https://scrapyard.hk/register. We hope to see you there!`)
  }, [])

  return(
    <div className="min-h-screen flex flex-col bg-[#212121] text-white">
      <Head>
        <title>Scrapyard Hong Kong</title>
        <meta name="description" content="Join over 250 visionaries for 2 days at TBC. Build something extraordinary from the ordinary." />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify(eventJsonLd)}
        </script>
      </Head>
      <div className="sticky top-2 z-50 w-full h-0">
        <div className="container w-full px-4">
          <div className="">
            <LoginButton />
          </div>
        </div>
      </div>
      <Hero isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="pt-8 py-4 flex justify-center w-full">
        <Button
          className="border border-[#e4f0ff] bg-transparent hover:bg-[#e4f0ff] hover:text-black px-4 mx-4 py-3 text-lg"
          onClick={() => scrollToSection("letter")}>
          Letter
        </Button>
        <Button
          className="border border-[#e4f0ff] bg-transparent hover:bg-[#e4f0ff] hover:text-black px-4 mx-4 py-3 text-lg"
          onClick={() => scrollToSection("rundown")}>
          Rundown
        </Button>
        <Button
          className="border border-[#e4f0ff] bg-transparent hover:bg-[#e4f0ff] hover:text-black px-4 mx-4 py-3 text-lg"
          onClick={() => scrollToSection("faq")}>
          FAQ
        </Button>
      </div>

      <BentoGrid/>

      <div id="letter">
      <div className="text-2xl md:text-5xl text-center mt-2 font-phantom">A letter has arrived, traveller</div>
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
        <p>Join over 250 visionaries like yourself for 2 days at Venue TBC.</p>
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
        <p className="font-grotesk italic text-right pr-4">Valentina Banner, Dhairya Shah</p>
        <p className="font-grotesk italic text-right pr-4">Alex Climie, Kevin Wang, Rufus Lee, Linus Choi</p>
        <p className="font-grotesk italic text-right pr-4">Madelyn Lee, Hadrian Lau, Aelita Chan</p>
      </Paper>
    </div>


      <div id="rundown" className="flex items-center justify-center h-[80vh]">
        <div className="text-2xl md:text-5xl font-phantom text-center flex flex-col justify-center max-w-3xl w-full h-full">
          <p className="m-4">The 2 Day Rundown</p>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=400&wkst=1&ctz=Asia%2FHong_Kong&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=AGENDA&showDate=0&showNav=0&title=Scrapyard%20HK&src=YzY3ZmE2YjE0OWU5Mzk2OGM1Y2ZmMmNiZjg3MTE0MDYwY2JhMGNiNGI4N2M3OGI3ZGNmZjFlMjkwNTkyNGI1M0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F4511E&hl=en"
            style={{ borderWidth: 0 }}
            height="400"
            className="h-full"
            title="Scrapyard HK Calendar"
          ></iframe>
        </div>
      </div>

      <div id="faq">
        <div className="text-2xl md:text-5xl text-center mt-8 font-phantom">Frequently Asked Questions</div>
        <FAQ/>
      </div>

      {/* Fillout Popup Embed */}
      {isOpen && (
        <FilloutPopupEmbed
          filloutId="fopmQDDwgRus"
          dynamicResize
          inheritParameters
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  )

}
