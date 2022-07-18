import { FoodInfo, FoodIngredient } from "../../molecules/";
import "./recipeDetails.scss";
function RecipesDetails() {
  return (
    <div>
      <h1>Recipe Details</h1>
      <FoodInfo />
      <FoodIngredient />
    </div>
  );
}
export default RecipesDetails;
