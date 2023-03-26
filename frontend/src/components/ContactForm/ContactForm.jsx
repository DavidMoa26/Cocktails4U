import { useEffect, useState } from "react";
import FormInput from "../FormInput/FormInput";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { contact } from "../../store/authSlice";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import "./ContactForm.css";

const ContactForm = () => {
  const { t } = useTranslation();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [validateForm, setValidateForm] = useState(false);
  const validateStyle = `${validateForm ? "allowed" : "not-allowed "}`;

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (
      user.name.length > 0 &&
      user.phone.length === 10 &&
      user.message.length >= 5
    ) {
      setValidateForm(true);
    } else {
      setValidateForm(false);
    }
  }, [user]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(contact(user));
  };
  return (
    <div className="contact-form">
      {auth.sendStatus === "pending" ? (
        <Loader />
      ) : auth.sendStatus === "success" ? (
        <h1>{t("form has been sent successfully !")}</h1>
      ) : (
        <form onSubmit={submitHandler}>
          <FormInput
            label={t("Full Name")}
            type="text"
            id="name"
            name="user_name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <FormInput
            label={t("Email")}
            type="email"
            placeholder="email@example.com"
            id="email"
            name="user_email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <FormInput
            label={t("Phone")}
            type="text"
            id="phone"
            name="user_phone"
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
          <div className="input-form-container">
            <label>{t("Your Message")}</label>
            <textarea
              cols={40}
              rows={3}
              id="message"
              name="user_message"
              onChange={(e) => setUser({ ...user, message: e.target.value })}
            />
          </div>
          <button
            disabled={!validateForm}
            type="submit"
            className={validateStyle}
          >
            {t("Send")}
          </button>
        </form>
      )}
    </div>
  );
};
export default ContactForm;
