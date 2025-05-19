import { Calendar } from "lucide-react"

export default function TimelineSection() {
  const timelineItems = [
    {
      date: "25 Mei 2025",
      description: "Pendaftaran Khusus Alumni M109K, M110K, dan JAMSELINAS",
      icon: Calendar,
    },
    {
      date: "28 Mei 2025",
      description: "Pendaftaran Umum",
      icon: Calendar,
    },
    {
      date: "14 Juni 2025",
      description: "Pendaftaran Ditutup",
      icon: Calendar,
    },
    {
      date: "20 Juni 2025",
      description: "Pengambilan Ridepack",
      icon: Calendar,
    },
    {
      date: "21 Juni 2025",
      description: "Official Ride",
      icon: Calendar,
    },
  ]

  return (
    <section id="timeline" className="py-16 md:py-24 bg-white">
      <div className="w-full md:w-4/5 mx-auto px-4 py-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Event Timeline</h2>
        <div className="relative max-w-2xl mx-auto flex">
          {/* Garis vertikal di kiri */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-200" aria-hidden="true" style={{ left: '24px' }} />
            <ul className="space-y-12">
              {timelineItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  {/* Titik & Icon di garis */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 z-10">
                      <item.icon className="h-6 w-6" />
                    </div>
                  </div>
                  {/* Konten di kanan */}
                  <div className="ml-6">
                    <h3 className="text-base font-bold text-gray-900">{item.date}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
