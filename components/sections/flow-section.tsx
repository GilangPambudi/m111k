import { Globe, FileText, CreditCard, Mail } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function FlowSection() {
  const flowItems = [
    {
      title: "Kunjungi Landing Page",
      description: 'Klik tombol “Daftar Sekarang” di atas.',
      icon: Globe,
    },
    {
      title: "Isi Form & Daftar",
      description: 'Lengkapi data diri dan informasi yang diminta. Setelah semua benar, tekan tombol “Daftar” untuk melanjutkan.',
      icon: FileText,
    },
    {
      title: "Ikuti Instruksi Pembayaran",
      description: 'Kamu akan diarahkan ke halaman pembayaran. Ikuti langkah-langkahnya dan segera bayar agar pendaftaranmu bisa diproses.',
      icon: CreditCard,
    },
    {
      title: "Terima Email Invoice & Konfirmasi",
      description: 'Langsung setelah daftar, kamu akan mendapat email berisi invoice. Setelah pembayaran terkonfirmasi, statusmu otomatis berubah jadi Peserta M111!',
      icon: Mail,
    },
  ]

  return (
    <section id="flow" className="py-16 md:py-24 bg-white">
      <div className="w-full md:w-5/6 mx-auto px-4 py-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Registration Steps</h2>
        <div className="relative max-w-2xl mx-auto flex">
          <div className="relative w-full">
            <ul className="space-y-4">
              {flowItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  <Card className="flex flex-row items-center w-full">
                    <div className="flex flex-col items-center pl-6 pr-6 py-6">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 z-10 text-2xl">
                        <item.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <CardHeader className="pl-0">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription className="text-base">{item.description}</CardDescription>
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