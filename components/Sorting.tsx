"use client";
import { Dispatch, SetStateAction } from "react";

type SortingProps = {
  setSortOrder: Dispatch<SetStateAction<string>>;
};

export default function Sorting({ setSortOrder }: SortingProps) {
  return (
    <div className="flex gap-4 mb-4">
      <button className="p-2 border rounded" onClick={() => setSortOrder("price")}>Sort by Price</button>
      <button className="p-2 border rounded" onClick={() => setSortOrder("recent")}>Sort by Recent</button>
      <button className="p-2 border rounded" onClick={() => setSortOrder("alphabet")}>Sort Alphabetically</button>
    </div>
  );
}