import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const result = useRestaurantMenuData(resId);
  const [showItemList, setShowItemList] = useState(false);
  const [showIndex, setShowIndex] = useState(null);
  

  if (!result) return <Shimmer />;

   console.log(result)
  const { name, avgRating, cuisines, sla, costForTwoMessage } =
    result?.data?.data?.cards[2]?.card?.card?.info;

   

  const { itemCards } =
    result?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card.card;

  const categories =
    result?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <div className="text-center">
        <h1 className="m-6 font-bold text-2xl">{name}</h1>
        <div className="flex justify-evenly">
          <div>
            <p>{cuisines.join(", ")}</p>
          </div>
          <div>
            <p>{avgRating} ratings</p>
          </div>
        </div>
        <div className="flex justify-evenly my-4">
          <p>{costForTwoMessage}</p>
          <p>{sla?.slaString}</p>

        </div>

        <h5 className="text-center text-lg font-bold">Menu</h5>

        {categories?.map((category, index) => {
          //catergory accordian
          return (
            <RestaurantCategory
              key={category?.card?.card?.categoryId}
              data={category?.card?.card}
              showItemList={index === showIndex && showItemList === false ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          );

          // return (
          //   <div
          //     key={card?.card?.info?.id}
          //     className="flex justify-between px-4 my-4"
          //   >
          //     <div>
          //       <h6>{card?.card?.info?.name}</h6>
          //       {card?.card?.info?.isVeg === 1 ? (
          //         <img
          //           src="data:image/png;base64,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"
          //           className="w-5"
          //         />
          //       ) : (
          //         <img
          //           className="w-5"
          //           src="https://t3.ftcdn.net/jpg/06/09/29/66/360_F_609296657_KDmMfhFZ2VNuTkMn2uc1q3nd453UZJXk.jpg"
          //         />
          //       )}

          //       <label>Rs. {card?.card?.info?.defaultPrice / 100}</label>
          //     </div>

          //     <div>
          //       <img
          //         className="w-24"
          //         src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${card?.card?.info?.imageId}`}
          //       />
          //     </div>
          //   </div>
          // );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
