import { sectionsData } from "./sectionsData"
import { Briefcase, FileText, Bike } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const iconMap = {
  FileText,
  Briefcase,
  Bike,
}

export default function TimelineSection() {
  const timelineItems = sectionsData.timeline.map(item => ({
    ...item,
    icon: item.icon as keyof typeof iconMap,
  })) as Array<{ icon: keyof typeof iconMap; date: string; description: string; location?: string; locationUrl?: string }>

  return (
    <section id="timeline" className="py-24 md:py-32 bg-slate-100">
      <div className="relative w-[90%] sm:w-[90%] md:w-[90%] mx-auto px-4 z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 sm:mb-6">Timeline</h2>
        <div className="relative max-w-2xl mx-auto flex">
          <div className="relative w-full">
            <ul className="space-y-8 relative">
              {timelineItems.map((item, index) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap]
                return (
                  <li key={index} className="flex items-center relative">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 z-10 mr-4 flex-shrink-0 border-2">
                      <Icon className="h-6 w-6" />
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
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}