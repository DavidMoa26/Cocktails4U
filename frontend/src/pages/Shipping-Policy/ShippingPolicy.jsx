import "./ShippingPolicy.css";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
const ShippingPolicy = () => {
  const { t } = useTranslation();

  return (
    <section className="shipping-policy-section">
      <Helmet>
        <title>מדיניות המשלוחים</title>
        <meta name="description" content="כל המידע על המשלוחים שלנו" />
        <link rel="canonical" href="/shipping-policy" />
      </Helmet>
      <h1>{t("Our shipping policy")}</h1>
      <ul>
        <li>
          {t(
            "Fast delivery - no extra charge for orders over NIS 349. An order placed by 10:30 a.m. during a business day will be delivered if possible on the same day between 4:00 p.m. and 9:00 p.m. An order placed after 10:30 will be delivered, if possible, on the business day following the order date. pay attention! In order to make a quick delivery, you must contact us by phone at 052XXXXXXX before placing the order"
          )}
        </li>
        <li>
          {t(
            "Home delivery - between 1-5 business days - NIS 50 (free for orders over NIS 349) *The times above do not include up to 2 days of packaging from the day the transaction is approved by the credit company"
          )}
        </li>
        <li>
          {t(
            "Delivery to the house - scattered deliveries between the hours of 8:00 - 21:00. A courier on our behalf will contact you before arrival. pay attention! If you are in a different place from the specified delivery address, you must contact us."
          )}
        </li>
        <li>
          {t(
            "It is important to note that we cannot take responsibility for delays by the shipping companies (Israel, Courier Service)"
          )}
        </li>
        <li>
          {t(
            "Home delivery to remote settlements (the Golan Heights, Eilat and the Dead Sea, Judea and Samaria and the area, and towns beyond the green line) can be delayed beyond 4 business days (+2 business days for packaging)"
          )}
        </li>
      </ul>
    </section>
  );
};
export default ShippingPolicy;
