import "./AboutUs.css";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <section className="about-us-section">
      <h1>{t("About Us")}</h1>
      <div className="about-us-content">
        <div className="img-content"></div>
        <div className="about-us-text">
          <p>
            {t(
              "It all started several years ago, when we researched the leading bars in Israel and the world where we gained professional knowledge, we always dreamed of sharing this knowledge"
            )}
          </p>
          <p>
            {t(
              "After several months of thinking and formulating the idea, we decided to share our knowledge with you and founded Cocktails 4 U. Cocktails from the most senior professionals in Israel who have won and participated in bartending competitions in Israel and around the world."
            )}
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
