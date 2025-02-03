"use client";
import { Dispatch, SetStateAction } from "react";

type FiltersProps = {
  setFilters: Dispatch<SetStateAction<{ price: string; bedrooms: string }>>;
};

export default function Filters({ setFilters }: FiltersProps) {
  return (
    <div className="flex gap-4 mb-4">
      <input
        type="number"
        placeholder="Max Price"
        className="p-2 border rounded"
        onChange={(e) => setFilters((prev) => ({ ...prev, price: e.target.value }))}
      />
      <select
        className="p-2 border rounded"
        onChange={(e) => setFilters((prev) => ({ ...prev, bedrooms: e.target.value }))}
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