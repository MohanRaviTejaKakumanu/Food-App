import { APP_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="head">
      <div className="logo-container">
        <img className="logo" src={APP_LOGO}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>CART</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
