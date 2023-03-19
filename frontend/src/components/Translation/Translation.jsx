import i18n from "i18next";
import i18next from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import cookies from "js-cookie";
import { useEffect, useState } from "react";
import "./Translation.css";
import { MdLanguage } from "react-icons/md";
import { GoArrowSmallDown } from "react-icons/go";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
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

  const [drop, setDrop] = useState(false);

  const dropMenu = ` ${drop ? `dropdown-lang` : "translation-languages"}`;

  const currentLanguageCode = cookies.get("i18next") || "he";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    console.log("Setting page stuff");
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
      <div className="translation-icons">
        <GoArrowSmallDown
          style={{
            color: "white",
            fontSize: "1rem",
            position: "relative",
            right: "1rem",
          }}
        />
        <MdLanguage style={{ color: "white", fontSize: "2rem" }} />
      </div>

      <div className={dropMenu}>
        {languages.map(({ code, name, country_code }) => (
          <span
            key={country_code}
            onClick={() => {
              i18next.changeLanguage(code);
            }}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Translation;
