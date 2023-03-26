import "./CustomCocktail.css";
import { useState } from "react";
import Modal from "../Modal/Modal";
import CocktailSteps from "./CocktailSteps/CocktailSteps";

const CustomCocktails = ({ hide }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="base-container" style={{ display: hide }}>
      <h3>אתם תבחרו את המרכיבים ואנחנו נכין לכם את הקוקטייל</h3>
      <button
        style={{ cursor: "not-allowed" }}
        onClick={() => {
          setIsOpen(true);
        }}
        disabled
      >
        לחצ/י כאן כדי להתחיל
      </button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <CocktailSteps />
      </Modal>
    </div>
  );
};
export default CustomCocktails;
