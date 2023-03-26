import React from "react";
import "./CocktailSteps.css";
import Ingredients from "../Ingredients";

const CheckoutSteps = () => {
  return (
    <div className="cocktail-steps-container">
      <div className="cocktail-steps-description">
        <h2>בחרו משקה בסיס</h2>
        <p>
          משקה בסיס לקוקטייל הוא משקה המשמש כבסיס ליצירת קוקטיילים שונים. ישנם
          מספר משקאות בסיס שנהוג להשתמש בהם בקוקטיילים, וכל אחד מהם משתמש
          במרכיבים שונים כדי לתת טעם וריח מיוחד לקוקטייל.
        </p>
        <Ingredients step="step1" clicks={5} />
      </div>
      <div className="cocktail-steps-description">
        <h2>ליקר \ אפרטיף</h2>
        <p>
          ניתן להוסיף (אך לא חובה) ליקר או אפרטיף כדי לשלב עם משקה הבסיס שלנו
          סוג נוסף של אלכוהול לקבלת טעמים נוספים
        </p>
        <Ingredients step="step2" clicks={4} />
      </div>
      <div className="cocktail-steps-description">
        <h2>תמציות וסירופים</h2>
        <p>
          הסירופים והתמציות שלנו נרקחים בצורה מיוחדת ויצרתית מפירות ועשבי תיבול
          טריים, הם נועדו כדי להחליף את הסוכר ולקבל ממתיק מעניין ואלגנטי
        </p>
        <Ingredients step="step3" clicks={3} />
      </div>
      <div className="cocktail-steps-description">
        <h2>מיצים ומחיות טריים</h2>
        <p>
          כדי לקבל קוקטייל מנצח עלינו להשתמש באלכוהול איכותי, מיצים או מחיות
          מפירות טריים שנסחטים קרוב למועד שתיית הקוקטייל
        </p>
        <Ingredients step="step4" clicks={2} />
      </div>
      <div>
        <span>מחיר : 59 ש''ח</span>
        <button>הוסף לסל</button>
      </div>
    </div>
  );
};

export default CheckoutSteps;
