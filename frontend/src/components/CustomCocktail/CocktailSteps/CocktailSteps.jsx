import React from "react";
import { useNavigate } from "react-router-dom";
import "./CocktailSteps.css";
import Ingredients from "../Ingredients";

const CheckoutSteps = ({ step1, step2, step3 }) => {
  const navigate = useNavigate();

  return (
    <div className="cocktail-steps-container">
      <div className="cocktail-steps-description">
        <h2>בחרו משקה בסיס</h2>
        <p>
          משקה בסיס לקוקטייל הוא משקה המשמש כבסיס ליצירת קוקטיילים שונים. ישנם
          מספר משקאות בסיס שנהוג להשתמש בהם בקוקטיילים, וכל אחד מהם משתמש
          במרכיבים שונים כדי לתת טעם וריח מיוחד לקוקטייל.
        </p>
        <Ingredients />
      </div>
      <div className="cocktail-steps-description">
        <h2>ליקר \ אפרטיף</h2>
        <p>
          ניתן להוסיף (אך לא חובה) ליקר או אפרטיף כדי לשלב עם משקה הבסיס שלנו
          סוג נוסף של אלכוהול לקבלת טעמים נוספים
        </p>
        <Ingredients />
      </div>
      <div className="cocktail-steps-description">
        <h2>תמציות וסירופים</h2>
        <p>
          הסירופים והתמציות שלנו נרקחים בצורה מיוחדת ויצרתית מפירות ועשבי תיבול
          טריים, הם נועדו כדי להחליף את הסוכר ולקבל ממתיק מעניין ואלגנטי
        </p>
        <Ingredients />
      </div>
      <div className="cocktail-steps-description">
        <h2>מיצים ומחיות טריים</h2>
        <p>
          כדי לקבל קוקטייל מנצח עלינו להשתמש באלכוהול איכותי, מיצים או מחיות
          מפירות טריים שנסחטים קרוב למועד שתיית הקוקטייל
        </p>
        <Ingredients />
      </div>
      <div>
        <span>מחיר : 59 ש''ח</span>
        <button>הוסף לסל</button>
      </div>
    </div>
  );
};

export default CheckoutSteps;
