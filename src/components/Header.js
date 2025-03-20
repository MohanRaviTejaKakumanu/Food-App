import { APP_LOGO } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btn_name, setBtn_Name] = useState("login");
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
          <li>
            <button
              className="login_logout_btn"
              onClick={() => {
                btn_name == "login"
                  ? setBtn_Name("logout")
                  : setBtn_Name("login");
              }}
            >
              {btn_name}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
