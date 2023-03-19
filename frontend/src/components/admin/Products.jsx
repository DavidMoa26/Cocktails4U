import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";
import CreateProduct from "./CreateProduct";
import { useSelector } from "react-redux";

const Products = () => {
  const navigate = useNavigate();
  const { items: products } = useSelector((state) => state.products);

  return (
    <>
      <AdminHeaders>
        <h2>Products</h2>

        <PrimaryButton
          onClick={() => navigate("/admin/products/create-product")}
        >
          Create
        </PrimaryButton>
      </AdminHeaders>

      <Outlet />

      <CreateProduct />
      {products &&
        products.map((cartItem) => (
          <div className="cart-item" key={cartItem._id}>
            <div className="cart-product">
              <img src={cartItem.image} alt={cartItem.name} />
              <div>
                <h3>{cartItem.name}</h3>
                <p>{cartItem.desc}</p>
              </div>
            </div>
            <button>Remove</button>
          </div>
        ))}
    </>
  );
};

export default Products;
