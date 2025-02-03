import { Property } from "@/types/property";

export function filterProperties(properties: Property[], filters: { price?: number; bedrooms?: number }) {
  return properties.filter((property) => {
    const matchesPrice = filters.price !== undefined ? property.price <= filters.price : true;
    const matchesBedrooms = filters.bedrooms !== undefined ? property.bedrooms === filters.bedrooms : true;
    return matchesPrice && matchesBedrooms;
  });
}
