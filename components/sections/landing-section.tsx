import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function LandingSection() {
  return (
    <section
      id="landing"
      className="relative pt-16 overflow-hidden min-h-screen bg-cover bg-center bg-no-repeat w-full flex items-center justify-center"
  style={{
    backgroundImage: "url('/siluet.webp')"
  }}
    >
      {/* Overlay biru gelap dengan opacity 50% */}
      <div className="absolute inset-0 bg-blue-900 opacity-85 pointer-events-none z-0" />
      <div className="relative w-full md:w-4/5 mx-auto px-4 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-6xl md:text-7xl lg:text-7xl font-extrabold text-white mb-4">
              M111 Family Reunion
            </h1>
            <p className="text-lg text-white mb-6">
              Bergabunglah bersama kami dalam pengalaman bersepeda tak terlupakan untuk merayakan HUT ke-111 Kota Malang. Jelajahi rute indah dan jadilah bagian dari sejarah.
            </p>
            <Link
              href="#register"
              className="inline-flex items-center px-8 py-3 rounded-full bg-white text-primary font-medium text-lg hover:bg-blue-600 transition-colors hover:text-white"
            >
              Daftar Sekarang!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
