"use client";
import { useState, useEffect } from "react";
import propertiesData from "@/data/properties.json";
import PropertyList from "@/components/PropertyList";
import Filters from "@/components/Filters";
import Sorting from "@/components/Sorting";
import { filterProperties } from "@/utils/filterProperties";
import { sortProperties } from "@/utils/sortProperties";
import { Property } from "@/types/property";

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>(propertiesData);
  const [filters, setFilters] = useState<{ price?: number; bedrooms?: number }>({});
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    let updatedProperties = filterProperties(propertiesData, filters);
    updatedProperties = sortProperties(updatedProperties, sortOrder);
    setProperties(updatedProperties);
  }, [filters, sortOrder]);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Properties</h1>
      <Filters setFilters={setFilters} />
      <Sorting setSortOrder={setSortOrder} />
      <PropertyList properties={properties} />
    </div>
  );
}
