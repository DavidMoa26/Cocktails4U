import Product from "../Product/Product";
import { useSelector } from "react-redux";
import "./FilteredProducts.css";

const FilteredProducts = ({ filter, clicked }) => {
  const { items: products } = useSelector((state) => state.products);

  const FilteredProducts = products?.filter(
    (product) => product.subCategory === filter
  );

  const isHide = !clicked ? "none" : "";

  return (
    <div className="filtered-products" style={{ display: isHide }}>
      {FilteredProducts &&
        FilteredProducts?.reverse().map((product) => (
          <Product product={product} key={product._id} />
        ))}
    </div>
  );
};
export default FilteredProducts;
