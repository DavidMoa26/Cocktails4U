import "./CartSummary.css";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { TbCurrencyShekel } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const CartSummary = ({ cart, onClose, onData }) => {
  const { t } = useTranslation();
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/login");
    onClose();
  };

  function handleClick() {
    onData(true);
  }

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <div className="cart-summary">
      <div className="cart-checkout">
        <div className="subtotal">
          <span>{t("Total")} : </span>
          <span className="amount">
            {cart.cartTotalAmount}
            <TbCurrencyShekel style={{ fontSize: "1.5rem" }} />
          </span>
        </div>
        <div className="pay-buttons">
          <button onClick={handleClick}>{t("Continue Payment")}</button>
          {!auth._id && (
            <button className="cart-login" onClick={loginHandler}>
              {t("Login / Register to get discount")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default CartSummary;
