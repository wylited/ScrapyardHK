"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"

const BentoGrid = () => {
    const items = ["Computer Science", "Engineering", "Design Technology",  "Robotics", "Machine Learning", "3D Modelling", "Animation", "Graphic Design", "Software Development", ]
    const [api, setApi] = useState<any>()
    const plugin = Autoplay({ delay: 1250, stopOnInteraction: false })

    return (
        <div className="max-w-6xl mx-auto p-4 font-phantom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First box - Calling All */}
        <div className="relative overflow-hidden rounded-xl border border-[#e4f0ff] p-2 md:p-4 flex flex-col justify-between h-full">
            <h2 className="text-white text-4xl font-bold mb-4">CALLING ALL...</h2>

            <Carousel
                plugins={[plugin]}
                setApi={setApi}
                className="w-full"
            >
                <CarouselContent>
                    {items.map((item, index) => (
                        <CarouselItem key={index} className="flex justify-center">
                            <div className="text-white text-5xl font-bold flex items-center text-center gap-4">
                                {item}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <div className="text-right text-white text-4xl font-bold mt-4">
                ...students
            </div>
        </div>

        {/* Second box - Build Anything */}
        <div className="relative border border-[#e4f0ff] text-white p-6 rounded-xl ">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            BUILD <span className="text-cyan-400">ANYTHING</span>
          </h2>
          <p className="text-lg mb-4">
            Build the craziest projects you can imagine. Games, Apps, Websites,
            Programming languages, even hardware with...
          </p>
          <div className="flex items-center justify-center">
            <div className="text-5xl font-bold text-yellow">
              250+
              <div className="text-lg text-white">participants</div>
            </div>
          </div>
        </div>

        {/* Third box - Workshops */}
        <div className="border border-[#e4f0ff] text-white p-6 rounded-xl md:col-span-2">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
              <h3 className="text-xl font-bold mb-2">Free Workshops</h3>
              <p className="text-gray-300 mb-4">
                On various topics to help you out, including:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>3D modelling</li>
                <li>Rust programming</li>
                <li>Web development</li>
                <li>PyGame</li>
                <li>Eccentric Ergonomics</li>
              </ul>
            </div>
            {/*Show an image in between if we are on bigger than sm*/}
            <div className="hidden md:block w-1/2">
              <img
                src="/working.JPG"
                alt="3D modeling"
                className="rounded-lg"
              />
            </div>
            <div className="md:ml-8">
              <ul className="list-disc list-inside space-y-1">
                <li>Quantum Computing</li>
                <li>Building a language</li>
                <li>Design PCBs</li>
                <li>Kawaii logo design</li>
                <li>Using laser cutters</li>
                <li>Arduinos...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
