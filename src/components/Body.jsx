import RestaurantCart, { withPromotedLabel } from "./RestaurantCart";
import mockData from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Search from "./Search";
import axios from "axios";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_LIST } from "../utils/constants";
import UserContext from "../utils/userContext/UserContext";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const networkStatus = useOnlineStatus();

  const {loggedInUser, setUserName} = useContext(UserContext)

  useEffect(() => {
    getResCarts();
  }, []);

  const getResCarts = async () => {
    //use CORS by pass extension to make this URL work
    const data = await axios.get(RES_LIST);
    setResList(
      data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredData(
      data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const PromotedRestaurantCart = withPromotedLabel(RestaurantCart);

  const handleTopRatedRes = () => {
    const topRatedRes = resList?.filter((res) => res.info.avgRating > 4.5);
    setFilteredData(topRatedRes);
  };

  const handleSearchClick = () => {
    const result = resList.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(result);
  };

  if (networkStatus === false) {
    return (
      <h3>
        Looks like you are offline, please check your internet connection!!
      </h3>
    );
  }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <div className="flex gap-4">
          <div className="px-4 py-2 flex items-center">
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="border border-black"
            />
            <button
              onClick={handleSearchClick}
              className="m-2 bg-blue-200 px-2 rounded-sm"
            >
              search
            </button>
          </div>
          <div className="flex align-middle px-2 py-2 m-2">
            <button
              onClick={handleTopRatedRes}
              className=" bg-blue-200 px-4 py-2 rounded-lg"
            >
              Top Rated Restaurants
            </button>
          </div>
          <input value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} className="border border-black" />
        </div>

        <div className="flex flex-wrap justify-evenly">
          {filteredData?.map((restaurant) => {
            return (
              <Link
                key={restaurant?.info?.id}
                to={`/restautants/${restaurant?.info?.id}`}
              >
                {
                  //if restaurant is promoted then show promoted label on it
                  restaurant?.info?.isOpen ? (
                    <PromotedRestaurantCart resData={restaurant?.info}/>
                  ) : (
                    <RestaurantCart resData={restaurant?.info} />
                  )
                }
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
