import Product from "../Product/Product";
import { useSelector } from "react-redux";
import "./FilteredProducts.css";
import CustomCocktails from "../CustomCocktail/CustomCocktails";

const FilteredProducts = ({ filter, clicked, concat }) => {
  const { items: products } = useSelector((state) => state.products);

  const FilteredProducts = products?.filter(
    (product) => product.subCategory === filter
  );

  const isHide = !clicked ? "none" : "";

  if (filter === "Custom Cocktails") return <CustomCocktails hide={isHide} />;

  if (concat === true)
    return (
      FilteredProducts &&
      FilteredProducts?.reverse().map((product) => (
        <Product product={product} key={product._id} />
      ))
    );

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
