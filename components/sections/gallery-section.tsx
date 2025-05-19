import Image from "next/image"

export default function GallerySection() {
  // Array of gallery images for easier management
  const galleryImages = [
    { id: 1, alt: "Cycling Event Photo 1" },
    { id: 2, alt: "Cycling Event Photo 2" },
    { id: 3, alt: "Cycling Event Photo 3" },
    { id: 4, alt: "Cycling Event Photo 4" },
    { id: 5, alt: "Cycling Event Photo 5" },
    { id: 6, alt: "Cycling Event Photo 6" },
  ]

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="w-full md:w-4/5 mx-auto px-4 py-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Event Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="rounded-xl overflow-hidden shadow-md">
              <Image
                src={`/placeholder.svg?height=400&width=600`}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
