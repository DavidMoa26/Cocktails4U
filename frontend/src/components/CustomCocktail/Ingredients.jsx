import "./Ingredients.css";
import Ingredient from "./Ingredient";

const Ingredients = ({ step, clicks }) => {
  if (step === "step1")
    return (
      <div className="ingredients">
        <Ingredient name="וודקה" clicksLeft={clicks} />
        <Ingredient name="וודקה-הדרים" clicksLeft={clicks} />
        <Ingredient name="ג'ין" clicksLeft={clicks} />
        <Ingredient name="רום" clicksLeft={clicks} />
        <Ingredient name="טקילה" clicksLeft={clicks} />
        <Ingredient name="וויסקי" clicksLeft={clicks} />
        <Ingredient name="נפולאון-מנדרין" clicksLeft={clicks} />
      </div>
    );
  // else if (step === "step2")
  //   return (
  //     <div className="ingredients" onClick={() => setCounter(counter - 1)}>
  //       <Ingredient name="קמפרי" disabled={counter} />
  //       <Ingredient name="קוואנטרו" disabled={counter} />
  //       <Ingredient name="מליבו" disabled={counter} />
  //       <Ingredient name="קלואה" disabled={counter} />
  //     </div>
  //   );
  // else if (step === "step3")
  //   return (
  //     <div className="ingredients" onClick={() => setCounter(counter - 1)}>
  //       <Ingredient name="סירופ בזיליקום" disabled={counter} />
  //       <Ingredient name="סירופ דובדבנים" disabled={counter} />
  //       <Ingredient name="מי סוכר" disabled={counter} />
  //     </div>
  //   );
  // else if (step === "step4")
  //   return (
  //     <div className="ingredients" onClick={() => setCounter(counter - 1)}>
  //       <Ingredient name="מיץ פסיפלורה" disabled={counter} />
  //       <Ingredient name="מחית אננס" disabled={counter} />
  //       <Ingredient name="מיקס פירות טרופיים" disabled={counter} />
  //       <Ingredient name="מחית תות" disabled={counter} />
  //       <Ingredient name="מיץ תפוזים" disabled={counter} />
  //       <Ingredient name="מיץ רימונים" disabled={counter} />
  //       <Ingredient name="מיץ ליים" disabled={counter} />
  //     </div>
  //   );
};
export default Ingredients;
