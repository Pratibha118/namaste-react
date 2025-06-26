import { LOGO_URL } from "../utils/constants";
export const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="logo-container">
          <img className="logo"
          src={LOGO_URL} />
        </div>
        <div className="menu-container">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};
