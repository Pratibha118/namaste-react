import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
 const onlineStatus = useOnlineStatus();
  return (
    <>
      <div className="header-container">
        <div className="logo-container">
          <img className="logo"
          src={LOGO_URL} />
        </div>
        <div className="menu-container">
          <ul>
            <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contactus'>ContactUs</Link></li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};
