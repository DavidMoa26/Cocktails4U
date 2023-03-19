import "./Contact.css";
import { useTranslation } from "react-i18next";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="contact-section">
      <div>
        <h1>{t("Contact Us")}</h1>
        <h2>{t("Fill your details and we will get back to you as soon")}</h2>
      </div>
      <div className="contact-us-form">
        <ContactForm />
      </div>
      <div className="contact-details">
        <h2>{t("Contact Information")}</h2>
        <span>{t("Phone")} : 052XXXXXX</span>
        <span>{t("Email")} : info@Cocktails4Ua.com</span>
      </div>
    </section>
  );
};
export default Contact;
