import Image from "next/image"
import Link from "next/link"
import properties from "@/data/properties.json"

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = properties.find((p) => p.id === Number.parseInt(params.id))

  if (!property) {
    return <div>Property not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to listings
      </Link>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.address}
          width={800}
          height={400}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{property.address}</h1>
          <p className="text-gray-600 mb-4">
            {property.size} sq ft | {property.bedrooms} bedrooms
          </p>
          <p className="text-green-600 font-bold text-2xl mb-4">${property.price.toLocaleString()}</p>
          <p className="text-gray-500">Added on {new Date(property.dateAdded).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}

