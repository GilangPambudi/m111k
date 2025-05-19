import Image from "next/image"
import { MapPin } from "lucide-react"

export default function RouteSection() {
  return (
    <section id="route" className="py-16 md:py-24 bg-white">
      <div className="w-full md:w-4/5 mx-auto px-4 py-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">The Route</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Experience the beauty of Malang through our carefully designed 111 km route, taking you through scenic
          landscapes, historical landmarks, and the vibrant city center.
        </p>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/placeholder.svg?height=500&width=1200"
            alt="M111 Cycling Route Map"
            width={1200}
            height={500}
            className="w-full object-cover"
          />
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
            <MapPin className="h-5 w-5 mr-2" />
            <span className="font-medium">Total Distance: 111 km</span>
          </div>
        </div>
      </div>
    </section>
  )
}
