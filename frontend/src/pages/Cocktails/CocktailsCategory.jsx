import "./CocktailsCategory.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import FilteredProducts from "../../components/FilteredProducts/FilteredProducts";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";

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
        <h1>{t("Cocktails Categories")}</h1>
        <div className="cocktails-category">
          {categories.map((category) => (
            <div
              key={Math.random()}
              onClick={() => {
                chooseCategory(`${category.title}`);
                setCategoryClicked(true);
              }}
            >
              <h3>{t(category.title)}</h3>
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
