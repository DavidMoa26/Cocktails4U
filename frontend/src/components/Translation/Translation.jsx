import i18n from "i18next";
import i18next from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import cookies from "js-cookie";
import { useEffect, useState } from "react";
import "./Translation.css";
import { MdLanguage } from "react-icons/md";
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "he"],
    fallbackLng: "he",
    detection: {
      order: [
        "htmlTag",
        "localStorage",
        "querystring",
        "cookie",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locals/{{lng}}/translation.json",
    },
  });

const Translation = () => {
  const languages = [
    {
      code: "en",
      name: "English",
      dir: "ltr",
      country_code: "en",
    },
    {
      code: "he",
      name: "עברית",
      dir: "rtl",
      country_code: "he",
    },
  ];

  const [drop, setDrop] = useState(true);

  const changeLanguageHandler = () => {
    currentLanguage.country_code === "he"
      ? i18next.changeLanguage("en")
      : i18next.changeLanguage("he");
  };

  const currentLanguageCode = cookies.get("i18next") || "he";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = "Cocktails 4 U";
  }, [currentLanguage, t]);

  return (
    <div
      className="translation-container"
      dir="rtl"
      onClick={() => setDrop(!drop)}
      onMouseLeave={() => setDrop(false)}
    >
      <div className="translation-icon">
        <MdLanguage
          style={{ color: "white", fontSize: "2rem" }}
          onClick={changeLanguageHandler}
        />
      </div>
    </div>
  );
};
export default Translation;
