"use client";
import { Property } from "@/types/property";
import Link from "next/link";

type PropertyCardProps = {
  property: Property;
};

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md p-4">
      <Link href={`/properties/${property.id}`}>
        <img src={property.image} alt={property.address} className="w-full h-48 object-cover cursor-pointer" />
      </Link>
      <h2 className="text-lg font-bold mt-2">{property.address}</h2>
      <p className="text-gray-600">Size: {property.size} sqft</p>
      <p className="text-gray-600">Bedrooms: {property.bedrooms}</p>
      <p className="text-gray-600 font-bold">${property.price.toLocaleString()}</p>
    </div>
  );
}
