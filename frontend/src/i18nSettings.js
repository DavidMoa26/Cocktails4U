import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";


const i18nSettings = () => {
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
                loadPath: "/locales/{{lng}}/translation.json",
            },
        });
}

export default i18nSettings