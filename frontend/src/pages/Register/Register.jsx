import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../store/authSlice";
import { logout } from "../../store/authSlice";
import { useTranslation } from "react-i18next";
import Loader from "../../components/Loader/Loader";
import FormInput from "../../components/FormInput/FormInput";
import { Helmet } from "react-helmet-async";
import "./Register.css";

const Register = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const [wrongPasswords, setWrongPasswords] = useState(false);
  const [success, setSuccess] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    validatePassword: "",
    success: false,
  });

  useEffect(() => {
    if (auth._id) {
      dispatch(logout(null));
    }
  }, [navigate, auth._id, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (user.password !== user.validatePassword) {
      setWrongPasswords(true);
      return;
    } else {
      setSuccess(true);
      dispatch(registerUser(user));
    }
  };

  return (
    <section className="register-section">
      <Helmet>
        <title>הרשמה לאתר</title>
        <meta name="description" content="טופס הרשמה לאתר למשתמשים חדשים" />
        <link rel="canonical" href="/register" />
      </Helmet>
      <h1>{t("Registration to the site - new users")}</h1>
      {wrongPasswords && auth.registerStatus !== "rejected" ? (
        <h3 className="register-error">{t("Invalid Passwords")}</h3>
      ) : auth.registerStatus === "rejected" ? (
        <h3 className="register-error">{t(`${auth.registerError.message}`)}</h3>
      ) : success ? (
        <p className="register-success">
          {t("Please confirm the registration in the link sent to your email")}
        </p>
      ) : auth && auth.loginStatus === "pending" ? (
        <Loader />
      ) : null}

      <form onSubmit={submitHandler}>
        <FormInput
          label={t("Full Name")}
          type="text"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <FormInput
          label={t("Email")}
          type="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <FormInput
          label={t("Password")}
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <FormInput
          label={t("Confirm Password")}
          type="password"
          onChange={(e) =>
            setUser({ ...user, validatePassword: e.target.value })
          }
        />
        <button type="submit">{t("Register")}</button>
        <p onClick={() => navigate("/login")} className="navigate-link">
          {t("Registered user? Click here to login")}
        </p>
      </form>
    </section>
  );
};
export default Register;
