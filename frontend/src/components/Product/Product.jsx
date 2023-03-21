import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import "./Product.css";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { TbCurrencyShekel } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const Product = ({ product }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div key={product._id} className="product">
      <img
        src={product.image}
        alt={product.name}
        width="100px"
        height="auto"
        loading="eager"
        title="product-image"
      />
      <div className="details">
        {product.category === "cocktails" && (
          <p className="cocktail-size">{t("size : 200 ml")}</p>
        )}
        <h3>{t(`${product.name}`)}</h3>
        {product.category === "cocktails" && (
          <p className="cocktail-content">{product.content}</p>
        )}
        <div className="price">
          <span dir="rtl">
            {product.price}{" "}
            <TbCurrencyShekel style={{ fontSize: "1.5rem", width: "20px" }} />
          </span>
        </div>
      </div>
      <div className="product-btn">
        <button onClick={() => handleAddToCart(product)}>
          {t("Add To Cart")}
        </button>
        <button className="details-button" onClick={() => setIsOpen(true)}>
          {t("Details")}
        </button>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <h3>{t(`${product.name}`)}</h3>
        <img src={product.image} alt={product.name} />
        <span>{product.desc}</span>
        <div>
          <button onClick={() => setIsOpen(false)}>{t("Close")}</button>
          <button onClick={() => handleAddToCart(product)}>
            {t("Add To Cart")}
          </button>
        </div>
      </Modal>
    </div>
  );
};
export default Product;
