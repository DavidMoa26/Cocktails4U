import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import { useTranslation } from "react-i18next";
import "./ContactForm.css";

const ContactForm = () => {
  const { t } = useTranslation();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact-form">
      <form onSubmit={submitHandler}>
        <FormInput
          label={t("Full Name")}
          type="text"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <FormInput
          label={t("Email")}
          type="email"
          placeholder="email@example.com"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <FormInput
          label={t("Phone")}
          type="text"
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
        />
        <div className="input-form-container">
          <label>{t("Your Message")}</label>
          <textarea
            cols={40}
            rows={3}
            onChange={(e) => setUser({ ...user, message: e.target.value })}
          />
        </div>
        <button type="submit">{t("Send")}</button>
      </form>
    </div>
  );
};
export default ContactForm;
