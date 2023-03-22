import React from "react";
import { useNavigate } from "react-router-dom";
import "./CocktailSteps.css";

const CheckoutSteps = ({ step1, step2, step3 }) => {
  const navigate = useNavigate();

  return (
    <div className="cocktail-step">
      <div onClick={() => navigate("custom-cocktail/step1")}>
        {step1 && <span>משקה בסיס</span>}
      </div>
      <div onClick={() => navigate("custom-cocktail/step2")}>
        {step2 && <span>מיצים ומחיות</span>}
      </div>
      <div onClick={() => navigate("custom-cocktail/step3")}>
        {step3 && <span>תבלינים, עשבי תיבול</span>}
      </div>
    </div>
  );
};

export default CheckoutSteps;
