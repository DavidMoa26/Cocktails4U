import "./CartProduct.css";
import { useDispatch } from "react-redux";
import { addToCart, decreaseCart, removeFromCart } from "../../store/cartSlice";
import { TbCurrencyShekel } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const Product = ({ product }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = () => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="cart-items" key={product._id}>
      <div className="cart-item">
        <div className="product-details-container">
          <div className="product-img">
            <img src={product.image} alt="" />
          </div>
          <div className="product-details">
            <span>{product.name}</span>
            <span onClick={handleRemoveFromCart}>{t("delete")}</span>
          </div>
        </div>
        <div className="product-qty-container">
          <div className="product-qty">
            <div onClick={handleDecreaseCart}>-</div>
            <span className="count">{product.cartQuantity}</span>
            <div onClick={handleAddToCart}>+</div>
          </div>
          <div className="product-total-price">
            {product.price * product.cartQuantity}
            <TbCurrencyShekel style={{ fontSize: "1.2rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
