import RestaurantCart from "./RestaurantCart";
import mockData from "../utils/mockData";
import { useEffect, useState } from "react";
import Search from "./Search";
import axios from "axios";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_LIST } from "../utils/constants";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const networkStatus = useOnlineStatus();

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
      <h3>Looks like you are offline, please check your internet connection!!</h3>
    );
  }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter">
          <div className="search-box">
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button onClick={handleSearchClick}>search</button>
          </div>
          <div>
            <button className="filter-btn" onClick={handleTopRatedRes}>
              Top Rated Restaurants
            </button>
          </div>
        </div>

        <div className="res-container">
          {filteredData?.map((restaurant) => {
            return (
              <Link
                key={restaurant?.info?.id}
                to={`/restautants/${restaurant?.info?.id}`}
              >
                <RestaurantCart resData={restaurant?.info} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
