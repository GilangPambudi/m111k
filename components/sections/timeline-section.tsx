import { Briefcase, CircleX, FileText, Bike, Mail } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function TimelineSection() {
  const timelineItems = [
    {
      date: "24 - 27 Mei 2025",
      description: "Pendaftar Khusus Alumni M109 / M110 / Jamselinas XIII Malang",
      icon: FileText,
    },
    {
      date: "28 - 30 Mei 2025",
      description: "Pendaftar Umum (Kuota Terbatas)",
      icon: FileText,
    },
    // {
    //   date: "14 Juni 2025",
    //   description: "Pendaftaran Ditutup",
    //   icon: CircleX,
    // },
    {
      date: "20 Juni 2025",
      description: "Pengambilan Ridepack",
      location: "Lokasi: The Shalimar Boutique Hotel Malang",
      locationUrl: "https://g.co/kgs/sgHHNJf",
      icon: Briefcase,
    },
    {
      date: "21 Juni 2025",
      description: "Official Ride",
      location: "Start: The Shalimar Boutique Hotel Malang",
      locationUrl: "https://g.co/kgs/sgHHNJf",
      icon: Bike,
    },
  ]

  return (
    <section id="timeline" className="py-24 md:py-24 bg-white">
      <div className="relative w-[90%] sm:w-[90%] md:w-5/6 mx-auto px-4 z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 sm:mb-6">Timeline</h2>
        <div className="relative max-w-2xl mx-auto flex">
          <div className="relative w-full">
            <ul className="space-y-8 relative">
              {timelineItems.map((item, index) => (
                <li key={index} className="flex items-center relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 z-10 mr-4 flex-shrink-0 border-2">
                    <item.icon className="h-6 w-6" />
                  </div>
                  {/* Vertical line: only render between items */}
                  {index !== timelineItems.length - 1 && (
                    <div
                      className="absolute left-6 top-12 w-1 bg-blue-300"
                      style={{
                        height: "calc(100% + 24px)",
                        transform: 'translateX(-50%) translateY(20%)',
                        zIndex: 0,
                      }}
                      aria-hidden="true"
                    />
                  )}
                  <Card className="flex-1">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.date}</CardTitle>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                      {item.location && (
                        <CardDescription className="text-base">
                          {item.locationUrl ? (
                            <a
                              href={item.locationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              {item.location}
                            </a>
                          ) : (
                            <span className="text-blue-600">{item.location}</span>
                          )}
                        </CardDescription>
                      )}
                    </CardHeader>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}