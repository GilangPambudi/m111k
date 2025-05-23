"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import React from "react"
import Countdown from "react-countdown"

function useCountdown(targetDate: Date) {
    const [timeLeft, setTimeLeft] = React.useState(() => {
        const diff = targetDate.getTime() - new Date().getTime()
        return diff > 0 ? diff : 0
    })

    React.useEffect(() => {
        const interval = setInterval(() => {
            const diff = targetDate.getTime() - new Date().getTime()
            setTimeLeft(diff > 0 ? diff : 0)
        }, 1000)
        return () => clearInterval(interval)
    }, [targetDate])

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60)
    const seconds = Math.floor((timeLeft / 1000) % 60)

    return { days, hours, minutes, seconds, isFinished: timeLeft === 0 }
}

export default function HeroSection() {
    const [mounted, setMounted] = React.useState(false)
    React.useEffect(() => setMounted(true), [])

    const countdown = useCountdown(new Date("2025-06-21T05:00:00+07:00"))

    // Track if viewport is mobile size
    const [isMobile, setIsMobile] = React.useState(false)
    
    // Define backgrounds for different device sizes
    const desktopBackgrounds = ["/landing-01.png", "/landing-02.png"]
    const mobileBackgrounds = ["/mobile-landing-01.png", "/mobile-landing-02.png"]
    
    // Get the correct background array based on screen size
    const backgrounds = isMobile ? mobileBackgrounds : desktopBackgrounds
    
    const [bgIndex, setBgIndex] = React.useState(0)
    const [slide, setSlide] = React.useState(false)

    // Check for mobile viewport on mount and resize
    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768) // 768px is md breakpoint in Tailwind
        }
        
        // Initial check
        checkMobile()
        
        // Add resize listener
        window.addEventListener('resize', checkMobile)
        
        // Clean up
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    React.useEffect(() => {
        const interval = setInterval(() => {
            setSlide(true)
            setTimeout(() => {
                setBgIndex((prev) => (prev + 1) % backgrounds.length)
                setSlide(false)
            }, 500) // durasi animasi slide (ms)
        }, 3000)
        return () => clearInterval(interval)
    }, [backgrounds.length])

    return (
        <section
            id="home"
            className="relative sm:pt-8 md:pt-24 overflow-hidden min-h-screen bg-cover bg-center bg-no-repeat w-full flex items-center justify-center"
            style={{
            backgroundImage: `url('${backgrounds[bgIndex]}')`,
            transition: "background-image 0.5s linear"
            }}
        >
            {/* Overlay gelap */}
            <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />
            <div
            className={`absolute inset-0 pointer-events-none z-0 transition-transform duration-500 ${slide ? "-translate-x-full" : "translate-x-0"
                }`}
            />

            <div className="relative w-full md:w-5/6 mx-auto px-4 z-10">
                <div className="flex flex-col md:flex-row items-center">

                    {/* Kiri: Judul dan deskripsi */}
                    <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pr-10">
                        <h1 className="text-4xl md:text-7xl lg:text-7xl font-extrabold text-white mb-4 text-center md:text-left">
                            M111 The Reunion
                        </h1>
                        <p className="text-base md:text-lg text-white mb-6 text-center md:text-left">
                            M111 The Reunion adalah ajang spesial yang menyatukan semangat M109, M110, dan Jamselinas. Berlangsung di Malang yang sejuk, M111 hadir bukan sekadar event gowes, tapi juga momen nostalgia dan perayaan kebersamaan komunitas sepeda lipat dari seluruh Indonesia.
                        </p>

                        {/* Desktop button - hidden on mobile */}
                        <div className="hidden md:flex justify-start mb-8">
                            <Link
                                href="#register"
                                className="inline-flex items-center px-8 py-3 rounded-full bg-blue-600 text-white font-medium text-lg hover:bg-white transition-colors hover:text-primary"
                            >
                                Daftar Sekarang!
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Kanan: Countdown (lebih besar) */}
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-center justify-center md:justify-end ">
                        <div className="mb-3 md:mb-4 text-white text-xl md:text-3xl font-semibold text-center md:text-right">
                            Road to M111
                        </div>
                        {!mounted ? (
                            <div className="text-white font-bold text-2xl md:text-3xl text-center">Loading...</div>
                        ) : !countdown.isFinished ? (
                            <div className="flex flex-wrap justify-center items-end gap-3 md:gap-6">
                                {/* Hari */}
                                <div className="flex flex-col items-center bg-white/90 rounded-2xl px-4 py-4 md:px-6 md:py-6 text-blue-900 font-extrabold text-2xl md:text-4xl shadow-lg min-w-[60px] md:min-w-[80px] select-none">
                                    <span>{countdown.days}</span>
                                    <span className="text-sm md:text-base font-normal mt-1">Hari</span>
                                </div>
                                {/* Jam */}
                                <div className="flex flex-col items-center bg-white/90 rounded-2xl px-4 py-4 md:px-6 md:py-6 text-blue-900 font-extrabold text-2xl md:text-4xl shadow-lg min-w-[40px] md:min-w-[60px] select-none">
                                    <span>{String(countdown.hours).padStart(2, "0")}</span>
                                    <span className="text-sm md:text-base font-normal mt-1">Jam</span>
                                </div>
                                {/* Menit */}
                                <div className="flex flex-col items-center bg-white/90 rounded-2xl px-4 py-4 md:px-6 md:py-6 text-blue-900 font-extrabold text-2xl md:text-4xl shadow-lg min-w-[40px] md:min-w-[60px] select-none">
                                    <span>{String(countdown.minutes).padStart(2, "0")}</span>
                                    <span className="text-sm md:text-base font-normal mt-1">Menit</span>
                                </div>
                                {/* Detik */}
                                <div className="flex flex-col items-center bg-white/90 rounded-2xl px-4 py-4 md:px-6 md:py-6 text-blue-900 font-extrabold text-2xl md:text-4xl shadow-lg min-w-[40px] md:min-w-[60px] select-none">
                                    <span>{String(countdown.seconds).padStart(2, "0")}</span>
                                    <span className="text-sm md:text-base font-normal mt-1">Detik</span>
                                </div>
                            </div>
                        ) : (
                            <div className="text-white font-bold text-2xl md:text-3xl text-center">Waktu telah berakhir!</div>
                        )}
                        <div className="mt-4 text-white text-lg md:text-xl font-semibold text-center">
                            Save the Date | 21 Juni 2025
                        </div>
                    </div>
                </div>
                {/* Mobile button - shown only on mobile at bottom */}
                <div className="flex md:hidden justify-center mt-10 mb-4">
                    <Link
                        href="#register"
                        className="inline-flex items-center px-8 py-3 rounded-full bg-blue-600 text-white font-medium text-lg hover:bg-white transition-colors hover:text-primary"
                    >
                        Daftar Sekarang!
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
