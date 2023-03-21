import "./BarProductsCategory.css";
import { useTranslation } from "react-i18next";
import FilteredProducts from "../../components/FilteredProducts/FilteredProducts";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>{t("Cocktails Categories")}</title>
        <meta
          name="description"
          content="קטגוריית כלי הבר שלנו אותם אנו מייבאים מספקים שונים בעולם"
        />
        <link rel="canonical" href="/product-category/bar-products" />
      </Helmet>
      <section className="bar-products-section">
        <h1>{t("COCKTAIL4U's barware")}</h1>
        <div className="bar-tools-category">
          {categories.map((category) => (
            <div
              className="category-titles"
              key={Math.random()}
              onClick={() => {
                chooseCategory(`${category.title}`);
                setCategoryClicked(true);
              }}
            >
              <div
                style={{
                  backgroundImage: "linear-gradient(to right, #F9B900, black)",
                }}
              >
                {t(
                  `${
                    category.title.charAt(0).toUpperCase() +
                    category.title.slice(1)
                  }`
                )}
              </div>
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
