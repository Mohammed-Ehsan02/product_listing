"use client";
import { Property } from "@/types/property";
import PropertyCard from "./PropertyCard";

type PropertyListProps = {
  properties: Property[];
};

export default function PropertyList({ properties }: PropertyListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
