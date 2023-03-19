import "./NavMenu.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavMenu = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li className="navbar-dropdown">
          <Link to="/">{t("Home")}</Link>
        </li>
        <li className="navbar-dropdown">
          <Link to="/product-category/cocktails">{t("Cocktails")}</Link>
        </li>

        <li className="navbar-dropdown">
          <Link to="/product-category/bar-products">{t("Bar Tools")}</Link>
        </li>

        <li className="navbar-dropdown">
          <Link to="/about-us">{t("About Us")}</Link>
        </li>
        <li className="navbar-dropdown">
          <Link to="/contact-us">{t("Contact Us")}</Link>
        </li>

        <li className="navbar-dropdown">
          <Link to="/shipping-policy">{t("Shipping Policy")}</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavMenu;
