import ItemCard from "@/components/ItemCard/ItemCard";
import React from "react";

const ShoppingListPage = () => {
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center ">
          Shopping Lists
        </h1>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        <ItemCard />
      </div>
    </div>
  );
};

export default ShoppingListPage;
