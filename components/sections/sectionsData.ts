import {
  MapPin,
  Flag,
  FileText,
  Briefcase,
  Bike,
  Globe,
  CreditCard,
  Mail,
  Contact,
} from "lucide-react";

export const sectionsData = {

  hero: {
    title: "M111 The Reunion",
    paragraphs: [
      "M111 The Reunion adalah ajang spesial yang menyatukan semangat M109, M110, dan Jamselinas XIII Malang. Berlangsung di Malang yang sejuk, M111 hadir bukan sekadar event gowes, tapi juga momen nostalgia dan perayaan kebersamaan komunitas sepeda lipat dari seluruh Indonesia.",
    ],
    buttonText: "Daftar Sekarang!",
    buttonLink: "#registration",
    buttonIcon: "ArrowRight",
  },

  about: {
    title: "About the Event",
    paragraphs: [
      "M111 The Reunion merupakan ajang istimewa yang mengusung spirit Family Reunion untuk menyatukan semangat tiga event sebelumnya yaitu M109, M110, dan Jamselinas XIII Malang. Para pesepeda lipat dari berbagai daerah akan berkumpul kembali dalam suasana hangat dan penuh keakraban.",
      "Kota Malang yang sejuk dan penuh pesona dikenal sebagai salah satu destinasi favorit para pesepeda dengan rute-rute yang bervariasi. Momen M111 The Reunion ini akan semakin terasa spesial bagi seluruh peserta karena bertepatan dengan perayaan HUT ke-111 Kota Malang, menambah makna kebersamaan dalam suasana penuh sejarah.",
    ],
    slides: [
      "/slide-01.png?height=360&width=640",
      "/slide-02.png?height=360&width=640",
    ],
  },

  timeline: [
    {
      date: "24 - 27 Mei 2025",
      description:
        "Pendaftar Khusus Alumni M109 / M110 / Jamselinas XIII Malang",
      icon: "FileText",
    },
    {
      date: "28 - 30 Mei 2025",
      description: "Pendaftar Umum (Kuota Terbatas)",
      icon: "FileText",
    },
    {
      date: "20 Juni 2025",
      description: "Pengambilan Ridepack",
      location: "Lokasi: The Shalimar Boutique Hotel Malang",
      locationUrl: "https://g.co/kgs/sgHHNJf",
      icon: "Briefcase",
    },
    {
      date: "21 Juni 2025",
      description: "Official Ride",
      location: "Start: The Shalimar Boutique Hotel Malang",
      locationUrl: "https://g.co/kgs/sgHHNJf",
      icon: "Bike",
    },
  ],

  flow: [
    {
      title: "Kunjungi Landing Page",
      description: "Klik tombol “Daftar Sekarang” di atas.",
      icon: "Globe",
    },
    {
      title: "Isi Form & Daftar",
      description:
        "Lengkapi data diri dan informasi yang diminta. Setelah semua benar, tekan tombol “Daftar” untuk melanjutkan.",
      icon: "FileText",
    },
    {
      title: "Ikuti Instruksi Pembayaran",
      description:
        "Kamu akan diarahkan ke halaman pembayaran. Ikuti langkah-langkahnya dan segera bayar agar pendaftaranmu bisa diproses.",
      icon: "CreditCard",
    },
    {
      title: "Terima Email Invoice & Konfirmasi",
      description:
        "Langsung setelah daftar, kamu akan mendapat email berisi invoice. Setelah pembayaran terkonfirmasi, statusmu otomatis berubah jadi Peserta M111!",
      icon: "Mail",
    },
  ],

  route: [
    {
      title: "Start",
      description: "The Shalimar Boutique Hotel Malang",
      address:
        "Jl. Cerme No.16, Oro-oro Dowo, Kec. Klojen, Kota Malang, Jawa Timur 65112",
      icon: MapPin, // ⬅️ Diubah dari string jadi komponen
      color: "blue",
      href: "https://maps.app.goo.gl/PKo85JPdkYibEo8h6",
    },
    {
      title: "Finish",
      description: "Balaikota Malang",
      address:
        "Jl. Tugu No.1, Kiduldalem, Kec. Klojen, Kota Malang, Jawa Timur 65119",
      icon: Flag, // ⬅️ Diubah juga
      color: "blue",
      href: "https://maps.app.goo.gl/Cwz7QnZe8Fp6K1iBA",
    },
  ],
  
  contact: {
    title: "Contact Us",
    description: "Punya pertanyaan tentang M111? Tim kami siap membantu Anda dengan segala pertanyaan. Hubungi kami melalui WhatsApp untuk respon tercepat.",
  },
};
