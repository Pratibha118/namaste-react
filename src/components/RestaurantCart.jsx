import { IMG_URL } from "../utils/constants";
const RestaurantCart = ({resData}) => {
    const { name, cuisines, avgRating, deliveryTime ,cloudinaryImageId} = resData?.data
  return (
    <>
      <div className="res-card">
        <img
          className="cart-img"
          src={`${IMG_URL}${cloudinaryImageId}`}
        />
        <h4>{name}</h4>
        <h6>{cuisines.join(", ")}</h6>
        <h6>{avgRating} Stars</h6>
        <h6>{deliveryTime}</h6>
      </div>
    </>
  );
};

export default RestaurantCart;
