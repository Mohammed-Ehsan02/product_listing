import propertiesData from "@/data/properties.json";

export default function PropertyDetails({ params }: { params: { id: string } }) {
  const property = propertiesData.find((p) => p.id === Number(params.id));

  if (!property) {
    return <p>Property not found.</p>;
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">{property.address}</h1>
      <img src={property.image} alt={property.address} className="w-full h-64 object-cover mt-4" />
      <p className="mt-2 text-gray-600">Size: {property.size} sqft</p>
      <p className="text-gray-600">Bedrooms: {property.bedrooms}</p>
      <p className="text-gray-600">Price: ${property.price.toLocaleString()}</p>
    </div>
  );
}
