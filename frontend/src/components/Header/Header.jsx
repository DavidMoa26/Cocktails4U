import MobileMenu from "../Menus/MobileMenu/MobileMenu";
import NavMenu from "../Menus/NavMenu/NavMenu";
import "./Header.css";
import Logo from "../../assets/logo.webp";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import Translation from "../Translation/Translation";
import { useTranslation } from "react-i18next";
import Modal from "../Modal/Modal";
import Cart from "../../pages/Cart/Cart";

const Header = () => {
  const { t } = useTranslation();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [qtyIsChanged, setQtyIsChanged] = useState(false);
  const bump = `nav-bag ${qtyIsChanged ? `bump` : ""}`;

  const auth = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout(null));
  };

  const adminHandler = () => {
    navigate("/admin/summary");
  };
  const loginHandler = (e) => {
    navigate("/login");
  };
  const registerHandler = () => {
    navigate("/register");
  };

  useEffect(() => {
    if (cart.cartItems.length === 0) {
      return;
    }
    setQtyIsChanged(true);

    const timer = setTimeout(() => {
      setQtyIsChanged(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cart]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <Translation />
      <div className={bump}>
        <div className="cart" onClick={() => setIsOpen(true)}>
          <ShoppingCartIcon style={{ fontSize: "3rem" }} />
          <span className="bag-qty">
            <span>{cart.cartItems.length}</span>
          </span>
        </div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <Cart onClose={() => setIsOpen(false)} />
        </Modal>
      </div>

      <div className="header-menu">
        <div className="header-logo">
          <img src={Logo} alt="logo" onClick={() => navigate("/")} />
        </div>
        <NavMenu />
        <MobileMenu />
      </div>
      <div className="header-buttons">
        {auth._id ? (
          <div className="">
            {auth.isAdmin ? (
              <button className="left-btn" onClick={adminHandler}>
                {t("Control Panel")}
              </button>
            ) : null}
            <button onClick={logoutHandler}>{t("Logout")}</button>
          </div>
        ) : (
          <div>
            <button onClick={loginHandler}>{t("Login")}</button>
            <button onClick={registerHandler}>{t("Register")}</button>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
