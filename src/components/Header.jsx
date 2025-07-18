import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import mylogo from "url:../utils/images/Bhojanam_logo.png";

export const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <>
      <div className="flex justify-between bg-pink-100 shadow-lg ">
        <div>
          <img alt="App logo" src={mylogo} className="w-24" />
        </div>
        <div className="flex items-center" >
          <ul className="flex mx-4 gap-4">
            <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contactus">ContactUs</Link>
            </li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};
