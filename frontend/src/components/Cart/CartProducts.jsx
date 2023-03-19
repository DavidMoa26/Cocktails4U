import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTotals } from "../../store/cartSlice";
import CartProduct from "./CartProduct";

const Products = ({ cart }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <section>
      {cart &&
        cart.cartItems.map((product) => (
          <CartProduct product={product} key={product._id} />
        ))}
    </section>
  );
};
export default Products;
