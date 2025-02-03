"use client";
import { Dispatch, SetStateAction } from "react";

type FiltersProps = {
  setFilters: Dispatch<SetStateAction<{ price?: number; bedrooms?: number }>>;
};

export default function Filters({ setFilters }: FiltersProps) {
  return (
    <div className="flex gap-4 mb-4">
      <input
        type="number"
        placeholder="Max Price"
        className="p-2 border rounded"
        onChange={(e) => {
          const value = e.target.value ? parseInt(e.target.value, 10) : undefined;
          setFilters((prev) => ({ ...prev, price: value }));
        }}
      />
      <select
        className="p-2 border rounded"
        onChange={(e) => {
          const value = e.target.value ? parseInt(e.target.value, 10) : undefined;
          setFilters((prev) => ({ ...prev, bedrooms: value }));
        }}
      >
        <option value="">Bedrooms</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4+</option>
      </select>
    </div>
  );
}
