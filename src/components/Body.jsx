import RestaurantCart from "./RestaurantCart";
import mockData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [resList, setResList] = useState(mockData);

    const handleTopRatedRes = () =>{
        const topRatedRes = mockData?.filter((res)=>res.data.avgRating > 4.0)
        setResList(topRatedRes);
    }

  return (
    <>
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={handleTopRatedRes}>
            Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
          {resList?.map((restaurant) => {
            return (
              <RestaurantCart key={restaurant.data.id} resData={restaurant} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
