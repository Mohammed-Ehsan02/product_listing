import { NextResponse } from "next/server";
import properties from "@/data/properties.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let filteredProperties = [...properties];

  const search = searchParams.get("search");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const bedrooms = searchParams.get("bedrooms");
  const sort = searchParams.get("sort");

  // Apply search filter
  if (search) {
    filteredProperties = filteredProperties.filter((p) =>
      p.address.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Apply price filter
  if (minPrice) {
    filteredProperties = filteredProperties.filter((p) => p.price >= Number.parseInt(minPrice));
  }

  if (maxPrice) {
    filteredProperties = filteredProperties.filter((p) => p.price <= Number.parseInt(maxPrice));
  }

  // Apply bedroom filter
  if (bedrooms) {
    filteredProperties = filteredProperties.filter((p) => p.bedrooms >= Number.parseInt(bedrooms));
  }

  // Apply sorting
  switch (sort) {
    case "priceAsc":
      filteredProperties.sort((a, b) => a.price - b.price);
      break;
    case "priceDesc":
      filteredProperties.sort((a, b) => b.price - a.price);
      break;
    case "address":
      filteredProperties.sort((a, b) => a.address.localeCompare(b.address));
      break;
    default:
      filteredProperties.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
  }

  return NextResponse.json(filteredProperties);
}
