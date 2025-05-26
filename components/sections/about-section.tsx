"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { sectionsData } from "./sectionsData"

export default function AboutSection() {
  const { title, paragraphs, slides } = sectionsData.about
  const [current, setCurrent] = useState(0)
  const [slide, setSlide] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length)
        setSlide(false)
      }, 500)
    }, 3000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section id="about" className="pt-32 pb-16 md:pt-32 md:pb-24 bg-white">
      <div className="relative w-[90%] sm:w-[90%] md:w-[90%] mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative rounded-xl overflow-hidden max-w-md mx-auto md:max-w-none" style={{ aspectRatio: "16/9" }}>
              {slides.map((src, idx) => (
                <Image
                  key={src}
                  src={src}
                  alt="Cyclists in Malang"
                  width={640}
                  height={360}
                  className={`absolute inset-0 w-full h-full rounded-xl transition-opacity duration-200 ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                  style={{ objectFit: "contain", transitionProperty: "opacity" }}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-8 lg:pl-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-left md:text-left">
              {title}
            </h2>
            {paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-gray-600 mb-6 text-base text-left md:text-left">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}