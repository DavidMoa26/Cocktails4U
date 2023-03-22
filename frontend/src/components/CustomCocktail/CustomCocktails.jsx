import "./CustomCocktail.css";
import { useState } from "react";
import Modal from "../Modal/Modal";
import CocktailSteps from "./CocktailSteps/CocktailSteps";
import { useNavigate } from "react-router-dom";

const CustomCocktails = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="base-container">
      <h3>אתם תבחרו את המרכיבים ואנחנו נכין לכם את הקוקטייל</h3>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        לחצ/י כאן כדי להתחיל
      </button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <CocktailSteps step1 step2 step3 />
      </Modal>
    </div>
  );
};
export default CustomCocktails;
