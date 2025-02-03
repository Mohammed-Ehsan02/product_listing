"use client"; // Ensures the component runs on the client side

import { useParams } from "next/navigation";
import propertiesData from "@/data/properties.json";

export default function PropertyDetails() {
  const params = useParams();
  const propertyId = params?.id ? parseInt(params.id as string, 10) : NaN;

  if (isNaN(propertyId)) {
    return <p className="text-red-500">Invalid property ID.</p>;
  }

  const property = propertiesData.find((p) => p.id === propertyId);

  if (!property) {
    return <p className="text-gray-600">Property not found.</p>;
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">{property.address}</h1>
      <img src={property.image} alt={property.address} className="w-full h-64 object-cover mt-4" />
      <p className="mt-2 text-gray-600">Size: {property.size} sqft</p>
      <p className="text-gray-600">Bedrooms: {property.bedrooms}</p>
      <p className="text-gray-600 font-bold">${property.price.toLocaleString()}</p>
    </div>
  );
}
