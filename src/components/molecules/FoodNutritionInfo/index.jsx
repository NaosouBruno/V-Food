import "./nutri.scss";
import { NutriItem } from "../../molecules";
function NutriInfo(props) {
  return (
    <div className="nutrition">
      <h2 className="nutrition-title">Nutrition Information</h2>
      <ul>
        <NutriItem itemName="Calories" itemQuant="219.9" type="kcal" />
        <hr className="nutrition-line" />
        <NutriItem itemName="Total Fat" itemQuant="10.7" type="g" />
        <hr className="nutrition-line" />
        <NutriItem itemName="Protein" itemQuant="7.9" type="g" />
        <hr className="nutrition-line" />
        <NutriItem itemName="Carbohydrate" itemQuant="22.3" type="g" />
        <hr className="nutrition-line" />
        <NutriItem itemName="Cholesterol" itemQuant="37.4" type="mg" />
        <hr className="nutrition-line" />
      </ul>
      <p className="nutrition-description">
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
    </div>
  );
}
export default NutriInfo;
