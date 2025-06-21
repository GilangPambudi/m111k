"use client"

import React from "react"
import Swal from "sweetalert2"
import { sectionsData } from "./sectionsData"

export default function ThanksSection() {
    const { title, paragraphs } = sectionsData.hero

    // Function to handle thank you button click
    const handleThankYouClick = (e: React.MouseEvent) => {
        e.preventDefault()

        // Show SweetAlert
        Swal.fire({
            title: "Informasi",
            html: `<p>Terimakasih kepada seluruh peserta event M111. Sampai jumpa di M112!</p>`,
            icon: "info",
            confirmButtonText: "OK",
            confirmButtonColor: "#2563eb", // Tailwind's blue-600
        })
    }

    return (
        <section
            id="thanks"
            className="relative sm:pt-8 md:pt-24 overflow-hidden min-h-screen bg-cover bg-center bg-no-repeat w-full flex items-center justify-center"
            style={{
                backgroundImage: `url('/landing-01.png')`,
            }}
        >
            {/* Overlay gelap */}
            <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />

            <div className="relative w-full max-w-3xl mx-auto px-4 z-10 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-4">
                    {title}
                </h1>
                <p className="text-base md:text-lg text-white mb-8">
                    {paragraphs}
                </p>
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-2xl md:text-4xl px-10 py-6 rounded-full shadow-2xl transition-colors mb-4 tracking-wider"
                    style={{ letterSpacing: "0.1em" }}
                    onClick={handleThankYouClick}
                >
                    TERIMA KASIH!
                </button>
            </div>
        </section>
    )
}