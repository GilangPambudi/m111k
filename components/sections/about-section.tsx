import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="w-full md:w-4/5 mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Cyclists in Malang"
                width={600}
                height={500}
                className="w-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About the Event</h2>
            <p className="text-gray-600 mb-4">
              M111K merupakan acara sepeda yang diadakan di Malang, Jawa Timur, Indonesia. Acara ini bertujuan untuk merayakan event ini sebagai sarana mewujudkan kerjasama yang sinergis dan harmonis dengan perkumpulan-perkumpulan dan Komunitas sepeda, khususnya dengan perkumpulan dan Komunitas sepeda lipat yang ada di seluruh wilayah Republik Indonesia. 
            </p>
            <p className="text-gray-600 mb-4">
              M111K bukan sekadar ajang bersepeda, tetapi juga menjadi momentum silaturahmi antarpeserta dari berbagai daerah. Para penggemar sepeda lipat dapat saling mengenal, bertukar cerita, dan memperluas jaringan komunitas dalam suasana yang hangat dan penuh semangat kebersamaan.
            </p>
            <p className="text-gray-600">
              Selain itu, M111K juga menjadi wadah untuk mempromosikan gaya hidup sehat, cinta lingkungan, serta mengenalkan keindahan kota Malang kepada peserta dari luar daerah. Dengan rute yang menantang namun menyenangkan, acara ini diharapkan menjadi pengalaman berkesan yang membawa dampak positif bagi seluruh peserta dan masyarakat sekitar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
