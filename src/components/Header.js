import { APP_LOGO } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn_name, setBtn_Name] = useState("login");
  useEffect(() => {}, []);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-white m-1 p-1 shadow-xl">
      <div className="logo-container">
        <img className="w-[90]" src={APP_LOGO}></img>
      </div>
      <div className="flex">
        <ul className="flex items-center">
          <li className="px-2 font-bold">
            OnlineStatus:{onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-2 font-bold text-xl">
            <Link to={"/"}>HOME</Link>
          </li>
          <li className="px-2 font-bold text-xl">
            <Link to={"/about"}>ABOUT</Link>
          </li>
          <li className="px-2 font-bold text-xl">
            <Link to={"/contact"}>CONTACT</Link>
          </li>
          <li className="px-2 font-bold text-xl">CART</li>
          <li className="px-2 font-bold text-xl">
            <Link to={"/grocery"}>GROCERY</Link>
          </li>
          <li className="px-2">
            <button
              className="border px-3.5 py-1 cursor-pointer rounded-sm hover:border-2"
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
