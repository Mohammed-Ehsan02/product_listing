"use client"

import { useState, useEffect, Suspense } from "react"
import PropertyCard from "./PropertyCard"
import { useSearchParams } from "next/navigation"

interface Property {
  id: number
  address: string
  size: number
  bedrooms: number
  price: number
  image: string
  dateAdded: string
}

const PropertyList = () => {
  const [properties, setProperties] = useState<Property[]>([])
  const searchParams = useSearchParams()

  useEffect(() => {
    const fetchProperties = async () => {
      const res = await fetch(`/api/properties?${searchParams.toString()}`)
      const data = await res.json()
      setProperties(data)
    }

    fetchProperties()
  }, [searchParams])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  )
}

export default function PropertyListWithSuspense() {
  return (
    <Suspense fallback={<div>Loading properties...</div>}>
      <PropertyList />
    </Suspense>
  )
}
