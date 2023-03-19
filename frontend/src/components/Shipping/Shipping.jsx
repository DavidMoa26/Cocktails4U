import "../FormInput/FormInput";
import FormInput from "../FormInput/FormInput";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Shipping.css";
import { TbCurrencyShekel } from "react-icons/tb";

const Shipping = ({ total }) => {
  const { t } = useTranslation();

  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    phone: "",
    address: "",
    message: "",
    shipping: total > 349 ? 0 : 70,
  });

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const calculateShipping = (e) => {
    if (total > 349) return;
    setShippingDetails({
      ...shippingDetails,
      shipping: Number(e.target.value),
    });
  };

  return (
    <div className="shipping-form">
      <h1>מידע למשלוח</h1>
      <form onSubmit={submitHandler}>
        <FormInput
          label={t("Full Name")}
          type="text"
          onChange={(e) =>
            setShippingDetails({ ...shippingDetails, name: e.target.value })
          }
        />

        <FormInput
          label={t("Phone")}
          type="text"
          onChange={(e) =>
            setShippingDetails({ ...shippingDetails, phone: e.target.value })
          }
        />
        <FormInput
          label={t("Address for shipping")}
          type="text"
          placeholder={t("Ex : Rothschild avenue 24, Tel-Aviv")}
          onChange={(e) =>
            setShippingDetails({ ...shippingDetails, address: e.target.value })
          }
        />
        <FormInput
          label={t("Notes for shipping")}
          type="text"
          placeholder={t(
            "Ex : Leave the delivery at the door if no one is home"
          )}
          onChange={(e) =>
            setShippingDetails({ ...shippingDetails, message: e.target.value })
          }
        />
        <div className="shipping-choice">
          <div>
            <label>
              <input
                type="radio"
                name="radio-group"
                value={70}
                defaultChecked
                onChange={calculateShipping}
              />
              {t(
                "Fast delivery up to 24 hours - free over NIS 349 or an additional NIS 70"
              )}
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="radio-group"
                value={50}
                onChange={calculateShipping}
              />
              {t(
                "Standard delivery - between 1-5 free businesses over 349 NIS or 50 NIS"
              )}
            </label>
          </div>
          <div className="total-shipping">
            {t("Total")} : {total + shippingDetails.shipping}
            <TbCurrencyShekel style={{ fontSize: "21px" }} />
          </div>
        </div>
        <button type="submit">{t("To Payment")}</button>
      </form>
    </div>
  );
};
export default Shipping;
