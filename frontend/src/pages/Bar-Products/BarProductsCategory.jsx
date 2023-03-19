import "./BarProductsCategory.css";
import { useTranslation } from "react-i18next";
import FilteredProducts from "../../components/FilteredProducts/FilteredProducts";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";
import { useSelector } from "react-redux";

const BarProducts = () => {
  const { t } = useTranslation();
  const { status } = useSelector((state) => state.products);

  const [categoryClicked, setCategoryClicked] = useState(false);

  const [categories, setCategories] = useState([
    {
      title: "shakers",
      isClicked: false,
    },
    {
      title: "jiggers",
      isClicked: false,
    },
    {
      title: "muddlers",
      isClicked: false,
    },
    {
      title: "strainers",
      isClicked: false,
    },
    {
      title: "spoons",
      isClicked: false,
    },
    {
      title: "accessories",
      isClicked: false,
    },
  ]);

  const chooseCategory = (title) => {
    const clickedCategory = categories.map((category) => {
      return {
        title: category.title,
        isClicked: category.title === title,
      };
    });

    setCategories(clickedCategory);
  };

  return (
    <>
      <section className="bar-products-section">
        <h1>{t("Bar Tools")}</h1>
        <div className="bar-tools-category">
          {categories.map((category) => (
            <div
              key={Math.random()}
              onClick={() => {
                chooseCategory(`${category.title}`);
                setCategoryClicked(true);
              }}
            >
              <h3>
                {t(
                  `${
                    category.title.charAt(0).toUpperCase() +
                    category.title.slice(1)
                  }`
                )}
              </h3>
            </div>
          ))}
        </div>
      </section>
      <section className="all-bar-tools">
        <h2>
          {categoryClicked
            ? categories.map(
                (category) =>
                  category.isClicked &&
                  t(
                    `${
                      category.title.charAt(0).toUpperCase() +
                      category.title.slice(1)
                    }`
                  )
              )
            : t("All Tools")}
        </h2>
        <>
          {status === "success" && !categoryClicked ? (
            categories.map((category) => (
              <FilteredProducts
                key={Math.random()}
                filter={category.title}
                clicked={!category.isClicked}
              />
            ))
          ) : categoryClicked ? (
            categories.map((category) => (
              <FilteredProducts
                key={Math.random()}
                filter={category.title}
                clicked={category.isClicked}
              />
            ))
          ) : status === "pending" ? (
            <Loader />
          ) : null}
        </>
      </section>
    </>
  );
};
export default BarProducts;
