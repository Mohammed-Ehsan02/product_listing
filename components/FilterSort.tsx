"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function FilterSortContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get search parameters safely
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
  const [bedrooms, setBedrooms] = useState(searchParams.get("bedrooms") || "");
  const [sort, setSort] = useState(searchParams.get("sort") || "dateAdded");

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (bedrooms) params.set("bedrooms", bedrooms);
    if (sort) params.set("sort", sort);
    router.push(`/?${params.toString()}`);
  }, [search, minPrice, maxPrice, bedrooms, sort, router]);

  return (
    <div className="mb-8 flex flex-wrap gap-4">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search properties..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded px-2 py-1 w-64"
      />
      
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="border rounded px-2 py-1"
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="border rounded px-2 py-1"
      />
      <select
        value={bedrooms}
        onChange={(e) => setBedrooms(e.target.value)}
        className="border rounded px-2 py-1"
      >
        <option value="">Any Bedrooms</option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
        <option value="4">4+</option>
        <option value="5">5+</option>
      </select>
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border rounded px-2 py-1"
      >
        <option value="dateAdded">Most Recent</option>
        <option value="priceAsc">Price (Low to High)</option>
        <option value="priceDesc">Price (High to Low)</option>
        <option value="address">Address (A-Z)</option>
      </select>
    </div>
  );
}

// Wrap in Suspense to avoid hydration issues
export default function FilterSort() {
  return (
    <Suspense fallback={<div>Loading filters...</div>}>
      <FilterSortContent />
    </Suspense>
  );
}
