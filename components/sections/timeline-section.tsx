import { Briefcase, CircleX, FileText, Bike, Mail } from "lucide-react"

export default function TimelineSection() {
  const timelineItems = [
    {
      date: "24 - 27 Mei 2025",
      description: "Pendaftaran Khusus M109 / M110 / Jamselinas Malang",
      icon: Mail,
    },
    {
      date: "28 Mei 2025",
      description: "Pendaftaran Umum",
      icon: FileText,
    },
    {
      date: "14 Juni 2025",
      description: "Pendaftaran Ditutup",
      icon: CircleX,
    },
    {
      date: "20 Juni 2025",
      description: "Pengambilan Ridepack",
      icon: Briefcase,
    },
    {
      date: "21 Juni 2025",
      description: "Official Ride",
      icon: Bike,
    },
  ]

  return (
    <section id="timeline" className="py-16 md:py-24 bg-white">
      <div className="w-full md:w-4/5 mx-auto px-4 py-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Event Timeline</h2>
        <div className="relative max-w-2xl mx-auto flex">
          {/* Garis vertikal di kiri */}
          <div className="relative w-full">
            <ul className="space-y-12 relative">
              {timelineItems.map((item, index) => (
                <li key={index} className="flex items-center relative">
                  {/* Vertical line: only render between first and last icon */}
                  {index !== timelineItems.length - 1 && (
                    <div
                      className="absolute left-6 top-12 w-1 bg-blue-200"
                      style={{
                        height: index === timelineItems.length - 1 ? 'calc(100% - 3rem)' : '100%',
                        zIndex: 0,
                      }}
                      aria-hidden="true"
                    />
                  )}
                  {/* Icon */}
                  <div className="flex flex-col items-center z-10">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                      <item.icon className="h-6 w-6" />
                    </div>
                  </div>
                  {/* Content */}
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
