import { FoodInfo, FoodIngredient } from "../../molecules/";
import { Navbar, NewsletterForm, Footer } from "../../organisms";
import "./recipeDetails.scss";
function RecipesDetails() {
  return (
    <div>
      <Navbar />
      <FoodInfo />
      <FoodIngredient />
      <NewsletterForm />
      <Footer />
    </div>
  );
}
export default RecipesDetails;
