import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartList = useSelector((state) => state.cart.items);

  return (
    <div>
      <h1 className="text-center font-bold">Cart</h1>
      <div className="w-6/12 mx-auto">
        <ItemList items={cartList} />
      </div>
    </div>
  );
};

export default Cart;
