import { clippingParents } from "@popperjs/core";
import { IMG_URL } from "../utils/constants";
const RestaurantCart = ({resData}) => {
    const { name, cuisines, avgRating, deliveryTime ,cloudinaryImageId} = resData
  return (
    <>
      <div className="w-[200px] p-2 my-2 rounded-lg bg-gray-200 hover:bg-gray-300">
        <img
          src={`${IMG_URL}${cloudinaryImageId}`}
          className="rounded-lg shadow-lg"
        />
        <h4 className="font-bold py-2">{name}</h4>
        <h6>{cuisines.join(", ")}</h6>
        <h6>{avgRating} Stars</h6>
        <h6>{resData?.sla?.slaString}</h6>
      </div>
    </>
  );
};

//Higher order function 
//input - RestaurantCart ==> PromotedRestaurantCart

export const withPromotedLabel = (RestaurantCart) =>{
  return (props) =>{
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-1 rounded-lg">Open</label>
        <RestaurantCart {...props}/>
      </div>
    )
  }
}

export default RestaurantCart;
