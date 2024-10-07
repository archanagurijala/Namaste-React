import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  let btnName = "Login";

  const [buttonName, setButtonName] = useState("Login");
  return (
    <div className="header">
      <img className="logo" srcSet={LOGO_URL} />
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <button
            className="login"
            onClick={() => {
              btnName = "Logout";
              buttonName === "Login" ? setButtonName("Log out"): setButtonName("Login");
              console.log(buttonName)
            }}>
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
