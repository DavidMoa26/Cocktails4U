import { useSelector } from "react-redux";
import CartProducts from "../../components/Cart/CartProducts";
import "./Cart.css";
import CartSummary from "../../components/Cart/CartSummary";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Shipping from "../../components/Shipping/Shipping";

// 3:05:29

const Cart = ({ onClose }) => {
  const { t } = useTranslation();
  const cart = useSelector((state) => state.cart);

  const [clicked, setClicked] = useState(false);

  const shippingClicked = (data) => {
    const isClicked = data;
    setClicked(isClicked);
  };

  return !clicked ? (
    <section className="cart-container">
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>{t("Your cart is empty")}</p>
          <div className="start-shopping">
            <span className="back-to-store" onClick={onClose}>
              {" "}
              {t("Go shopping")}
            </span>
          </div>
        </div>
      ) : (
        <div className="cart-products">
          <h2>{t("Your cart")}</h2>
          {cart && <CartProducts cart={cart} />}
          {
            <CartSummary
              cart={cart}
              onClose={onClose}
              onData={shippingClicked}
            />
          }
          <span className="back-to-store" onClick={onClose}>
            {" "}
            {t("Go shopping")}
          </span>
        </div>
      )}
    </section>
  ) : (
    <Shipping total={cart.cartTotalAmount} />
  );
};
export default Cart;
