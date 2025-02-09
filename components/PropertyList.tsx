"use client";

import { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import { useSearchParams } from "next/navigation";

interface Property {
  id: number;
  address: string;
  size: number;
  bedrooms: number;
  price: number;
  image: string;
  dateAdded: string;
}

const PropertyList = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true); // Set loading state
      try {
        const res = await fetch(`/api/properties?${searchParams.toString()}`);
        const data = await res.json();
        setProperties(data);
      } catch (error) {
        console.error("Failed to fetch properties", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [searchParams.toString()]); // Make sure to track stringified search params

  if (loading) {
    return <div>Loading properties...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.length > 0 ? (
        properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))
      ) : (
        <div>No properties found.</div>
      )}
    </div>
  );
};

export default PropertyList;
