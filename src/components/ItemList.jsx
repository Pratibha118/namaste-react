import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItem } from "../utils/slices/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddButton = (value) => {
    dispatch(addItem(value));
  };
  return (
    <>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="m-2 p-2 border-b-2 border-gray-200 text-left flex justify-between"
        >
          <div className="w-9/12 m-2">
            <div className="p-2  ">
              <div>{item?.card?.info?.name}</div>
              <div className="my-2">
                ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </div>
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
          </div>

          <div className="w-3/12 m-2">
            <div>
              <button
                className="bg-black text-white cursor-pointer m-1 p-1 rounded-lg"
                onClick={()=>handleAddButton(item)}
              >
                Add +
              </button>
            </div>
            <div>
              <img src={IMG_URL + item?.card?.info?.imageId} className="w-25" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
