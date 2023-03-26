import { AiFillCheckCircle } from "react-icons/ai";
import { useState } from "react";
import "./Ingredient.css";

const Ingredient = ({ name, clicksLeft }) => {
  const [click, setClick] = useState(false);
  const [clicks, setClicks] = useState(clicksLeft);

  return (
    <button
      className="ingredient"
      onClick={() => {
        setClick(!click);
        setClicks(clicks - 1);
      }}
    >
      {name}
      {click && (
        <AiFillCheckCircle style={{ color: "green", margin: "0 0.2rem" }} />
      )}
    </button>
  );
};
export default Ingredient;
