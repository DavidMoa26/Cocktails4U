import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../store/authSlice";
import Loader from "../../components/Loader/Loader";
import { useTranslation } from "react-i18next";
import FormInput from "../../components/FormInput/FormInput";
import "./Login.css";

const Login = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth && auth._id) {
      navigate("/");
    }
  }, [auth._id, auth, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };

  return (
    <section className="login-section">
      <h1>{t("Login")}</h1>
      {auth && auth.loginStatus === "rejected" ? (
        <h3 className="login-error">{t(`${auth.loginError.message}`)}</h3>
      ) : auth && auth.loginStatus === "pending" ? (
        <Loader />
      ) : null}
      <form onSubmit={submitHandler}>
        <FormInput
          label={t("Email")}
          type="email"
          placeholder="email@example.com"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <FormInput
          label={t("Password")}
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit">{t("Login")}</button>
        <p onClick={() => navigate("/register")} className="navigate-link">
          {" "}
          {t("Didn't sign up? Click to register")}
        </p>
      </form>
    </section>
  );
};
export default Login;
