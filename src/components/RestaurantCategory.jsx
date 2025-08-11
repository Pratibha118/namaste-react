import ItemList from "./ItemList";
// import { useState } from "react";

const RestaurantCategory = ({ data , showItemList , setShowIndex}) => {

  const handleAccordian = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* Header of accordian */}
      <div
        className="w-6/12 bg-gray-100 mx-auto my-4 shadow-lg p-4"
        onClick={handleAccordian}
      >
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {/* Border of accordian */}
        {showItemList ? <ItemList items={data.itemCards} /> : <></>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
