import PropertyList from "@/components/PropertyList"
import FilterSort from "@/components/FilterSort"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Property Listings</h1>
      <FilterSort />
      <PropertyList />
    </main>
  )
}

