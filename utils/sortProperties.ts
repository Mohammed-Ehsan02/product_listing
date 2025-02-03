import { Property } from "@/types/property";

export function sortProperties(properties: Property[], sortOrder: string) {
  if (sortOrder === "price") {
    return [...properties].sort((a, b) => a.price - b.price);
  }
  if (sortOrder === "recent") {
    return [...properties].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  }
  if (sortOrder === "alphabet") {
    return [...properties].sort((a, b) => a.address.localeCompare(b.address));
  }
  return properties;
}
