import { APP_LOGO } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btn_name, setBtn_Name] = useState("login");
  useEffect(() => {}, []);

  return (
    <div className="head">
      <div className="logo-container">
        <img className="logo" src={APP_LOGO}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"} className="link">
              HOME
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="link">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="link">
              CONTACT
            </Link>
          </li>
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
