import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        srcSet={LOGO_URL}
      />
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
