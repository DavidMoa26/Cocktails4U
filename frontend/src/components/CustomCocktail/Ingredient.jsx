import { AiFillCheckCircle } from "react-icons/ai";
import { useState } from "react";
import "./Ingredient.css";

const Ingredient = ({ name }) => {
  const [click, setClick] = useState(false);
  return (
    <div className="ingredient" onClick={() => setClick(!click)}>
      {name}
      {click && (
        <AiFillCheckCircle style={{ color: "green", margin: "0 0.2rem" }} />
      )}
    </div>
  );
};
export default Ingredient;
