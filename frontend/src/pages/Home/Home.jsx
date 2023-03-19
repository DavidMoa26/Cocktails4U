import "./Home.css";
import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Loader from "../../components/Loader/Loader";
import ContactForm from "../../components/ContactForm/ContactForm";

const PopularProducts = () => {
  const { items: products } = useSelector((state) => state.products);
  const popularProducts = products?.filter(
    (product) => product.isPopular === true
  );
  return (
    <>
      {popularProducts &&
        popularProducts
          ?.reverse()
          .map((product) => <Product product={product} key={product._id} />)}
    </>
  );
};

const Home = () => {
  const { status } = useSelector((state) => state.products);
  const { t } = useTranslation();

  return (
    <section className="home-section">
      <div className="middle-items">
        <div className="welcome">
          <h1>{t("Welcome to Cocktails4U")}</h1>
          <p>
            {t(
              "We have special cocktails that you must try, our cocktails are built by mixologists and bartenders in Israel in a very special and creative way. All cocktails contain premium alcohol, fresh fruit juices, and special herbs and spices adapted to the type of cocktail."
            )}
          </p>
        </div>

        <section className="products-section">
          <div className="popular-title">
            <h2> {t("The Most Popular")}</h2>
          </div>
          <div className="products-container">
            {status === "success" ? (
              <PopularProducts />
            ) : status === "pending" ? (
              <Loader />
            ) : null}
          </div>
        </section>
      </div>
      <div className="footer-container">
        <h1>{t("Fill your details and we will get back to you as soon")}</h1>
        <div className="footer-form">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </section>
  );
};
export default Home;
