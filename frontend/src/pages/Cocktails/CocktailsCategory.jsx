import "./CocktailsCategory.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import FilteredProducts from "../../components/FilteredProducts/FilteredProducts";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const CocktailsCategory = () => {
  const { t } = useTranslation();
  const [categoryClicked, setCategoryClicked] = useState(false);
  const { status } = useSelector((state) => state.products);
  const [categories, setCategories] = useState([
    {
      title: "Special Cocktails",
      isClicked: false,
    },
    {
      title: "Classic Cocktails",
      isClicked: false,
    },
    {
      title: "Custom Cocktails",
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
      <section className="cocktails-category-section">
        <Helmet>
          <title>{t("Cocktails Categories")}</title>
          <meta
            name="description"
            content="קטגוריית הקוקטיילים שלנו - ניתן לבחור בין קוקטיילים אשר רקחנו בעצמנו או קוקטיילים קלאסים מפורסמים"
          />
          <link rel="canonical" href="/product-category/cocktails" />
        </Helmet>
        <h1>{t("Our Cocktails Categories")}</h1>
        <div className="cocktails-category">
          {categories.map((category) => (
            <div
              key={Math.random()}
              onClick={() => {
                chooseCategory(`${category.title}`);
                setCategoryClicked(true);
              }}
            >
              <h2
                style={{
                  backgroundImage: "linear-gradient(to right, #F9B900, black)",
                }}
              >
                {t(category.title)}
              </h2>
            </div>
          ))}
        </div>
      </section>

      <section className="all-cocktails">
        <h2>
          {categoryClicked
            ? categories.map(
                (category) => category.isClicked && t(`${category.title}`)
              )
            : t("All Cocktails")}
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
export default CocktailsCategory;
