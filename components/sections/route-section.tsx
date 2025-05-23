import { MapPin, Flag } from "lucide-react"

const routeSteps = [
  {
    title: "Start",
    description: "The Shalimar Boutique Hotel Malang",
    address: "Jl. Cerme No.16, Oro-oro Dowo, Kec. Klojen, Kota Malang, Jawa Timur 65112",
    icon: MapPin,
    color: "blue",
    href: "https://g.co/kgs/xyfummh",
  },
  {
    title: "Finish",
    description: "Balaikota Malang",
    address: "Jl. Tugu No.1, Kiduldalem, Kec. Klojen, Kota Malang, Jawa Timur 65119",
    icon: Flag,
    color: "blue",
    href: "https://g.co/kgs/1wQ5nQ",
  },
]

// Helper function untuk warna
const getColorClass = (color: string, type: string) => {
  if (color === "blue") {
    if (type === "bg") return "bg-blue-500";
    if (type === "bgLight") return "bg-blue-50";
    if (type === "text") return "text-blue-800";
    if (type === "line") return "bg-blue-300";
  } else if (color === "green") {
    if (type === "bg") return "bg-green-500";
    if (type === "bgLight") return "bg-green-50";
    if (type === "text") return "text-green-800";
    if (type === "line") return "bg-green-300";
  }
  return "";
};

export default function RouteSection() {
  return (
    <section id="route" className="py-16 md:py-24 bg-white">
      <div className="relative w-[90%] sm:w-[90%] md:w-5/6 mx-auto px-4 z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 sm:mb-6">Route</h2>
        <div className="max-w-4xl mx-auto">
          {/* Desktop: Layout Horizontal (hidden di mobile) */}
          <div className="hidden md:block relative">
            <div className="flex flex-row justify-between relative">
              {routeSteps.map((step, idx) => (
                <div className="w-1/2 px-2 relative" key={`desktop-${idx}`}>
                  {/* Horizontal line: only render between points */}
                  {idx < routeSteps.length - 1 && (
                    <div
                      className={`absolute top-[27px] h-1 ${getColorClass(step.color, "line")} z-0`}
                      style={{
                        left: 'calc(50% + 15px)',
                        right: 'calc(-50% + 15px)',
                      }}
                      aria-hidden="true"
                    />
                  )}
                  <div className="flex flex-col items-center">
                    <div
                      className={`${getColorClass(step.color, "bg")} text-white rounded-full p-3 shadow-md z-10 mb-4`}
                    >
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div className={`${getColorClass(step.color, "bgLight")} p-5 rounded-lg shadow-sm w-full`}>
                      <h3
                        className={`text-2xl font-bold ${getColorClass(step.color, "text")} text-center`}
                      >
                        {step.title}
                      </h3>
                      <div className="mt-3 text-gray-700 font-medium text-center text-lg">
                        {step.description}
                      </div>
                      {/* Address & Link */}
                      <div className="mt-2 text-center">
                        <a
                          href={step.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 text-base block"
                        >
                          {step.address}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Layout Vertikal (hidden di desktop) */}
          <div className="md:hidden relative">
            <div className="relative w-full">
              <ul className="space-y-8 relative">
                {routeSteps.map((step, idx) => (
                  <li key={`mobile-${idx}`} className="flex items-start relative">
                    {/* Vertical line: hanya render antara item */}
                    {idx !== routeSteps.length - 1 && (
                      <div
                        className={`absolute left-6 top-12 w-1 ${getColorClass(step.color, "line")}`}
                        style={{
                          height: '100%',
                          transform: 'translateX(-50%)',
                          zIndex: 0,
                        }}
                        aria-hidden="true"
                      />
                    )}
                    {/* Icon */}
                    <div className="flex flex-col items-center z-10">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-full ${getColorClass(step.color, "bg")} text-white`}>
                        <step.icon className="h-6 w-6" />
                      </div>
                    </div>
                    {/* Content */}
                    <div className={`ml-6 ${getColorClass(step.color, "bgLight")} p-4 rounded-lg shadow-sm flex-grow`}>
                      <h3 className={`text-lg font-bold ${getColorClass(step.color, "text")}`}>{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                      <a
                        href={step.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm block"
                      >
                        {step.address}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mt-6">
            <MapPin className="h-5 w-5 mr-2" />
            <span className="font-medium">Total Jarak: 50 km</span>
          </div>
        </div>
      </div>
    </section>
  )
}