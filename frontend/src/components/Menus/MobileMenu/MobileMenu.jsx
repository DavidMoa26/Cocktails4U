import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import "./MobileMenu.css";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";

const MobileMenu = () => {
  const { t } = useTranslation();
  const [mobileNav, setMobileNav] = useState(false);

  const navHandler = () => {
    setMobileNav(!mobileNav);
  };

  const style = mobileNav ? "mobile-menu" : "mobile-menu-hidden";

  return (
    <>
      <div className="menu-btn" onClick={navHandler}>
        {mobileNav ? (
          <CloseIcon style={{ fontSize: "2rem", color: "white" }} />
        ) : (
          <MenuIcon style={{ fontSize: "2rem", color: "white" }} />
        )}
      </div>
      <nav className={style} onClick={navHandler}>
        <ul>
          <li>
            <Link to="/">{t("Home")}</Link>
          </li>
          <li>
            <Link to="/product-category/cocktails">{t("Cocktails")}</Link>
          </li>
          <li>
            <Link to="/product-category/bar-products">{t("Bar Tools")}</Link>
          </li>
          <li>
            <Link to="/about-us">{t("About Us")}</Link>
          </li>
          <li>
            <Link to="/contact-us">{t("Contact Us")}</Link>
          </li>
          <li>
            <Link to="/shipping-policy">{t("Shipping Policy")}</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default MobileMenu;
