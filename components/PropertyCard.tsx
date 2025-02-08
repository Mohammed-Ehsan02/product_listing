import Image from "next/image"
import Link from "next/link"

interface PropertyCardProps {
  property: {
    id: number
    address: string
    size: number
    bedrooms: number
    price: number
    image: string
    dateAdded: string
  }
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Link href={`/property/${property.id}`}>
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.address}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{property.address}</h2>
        <p className="text-gray-600 mb-2">
          {property.size} sq ft | {property.bedrooms} bedrooms
        </p>
        <p className="text-green-600 font-bold text-lg mb-2">${property.price.toLocaleString()}</p>
        <p className="text-gray-500 text-sm">Added on {new Date(property.dateAdded).toLocaleDateString()}</p>
      </div>
    </div>
  )
}

