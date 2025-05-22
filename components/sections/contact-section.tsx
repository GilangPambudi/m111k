import Image from "next/image"
import { Phone, Mail, Instagram } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="w-full sm:w-[90%] md:w-4/5 mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative rounded-xl overflow-hidden max-w-md mx-auto md:max-w-none">
              <Image
                src="NFB_FEST.png"
                alt="Contact Us"
                width={600}
                height={500}
                className="w-full object-cover rounded-xl h-[300px] sm:h-[400px] md:h-[500px]"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-8 lg:pl-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center md:text-left">Contact Person</h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base text-center md:text-left">
              Punya pertanyaan tentang M111? Tim kami siap membantu Anda dengan segala pertanyaan. Hubungi kami melalui WhatsApp untuk respon tercepat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:space-x-3 sm:gap-0 mt-4 items-center md:items-start">
              <a
                href="https://wa.me/6212345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-800 transition-colors w-full sm:w-auto justify-center"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="whitespace-nowrap">Chat on WhatsApp</span>
              </a>

              {/* <a
                href="https://instagram.com/ngalamfoldingbike"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-medium hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700 transition-colors w-full sm:w-auto justify-center"
              >
                <Instagram className="h-5 w-5 mr-2" />
                <span className="whitespace-nowrap">Follow on Instagram</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}