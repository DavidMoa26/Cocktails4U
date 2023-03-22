import "./Ingredients.css";
import { useState } from "react";
import Ingredient from "./Ingredient";

const Ingredients = () => {
  return (
    <div className="ingredients">
      <Ingredient name="וודקה" />
      <Ingredient name="וודקה-הדרים" />
      <Ingredient name="ג'ין" />
      <Ingredient name="רום" />
      <Ingredient name="טקילה" />
      <Ingredient name="וויסקי" />
      <Ingredient name="נפולאון-מנדרין" />
    </div>
  );
};
export default Ingredients;
