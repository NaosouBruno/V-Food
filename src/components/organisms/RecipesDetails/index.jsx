import { FoodInfo } from "../../molecules/";
import { Navbar, NewsletterForm, Footer } from "../../organisms";
import "./recipeDetails.scss";
function RecipesDetails() {
  return (
    <div>
      <Navbar />
      <FoodInfo />

      <NewsletterForm />
      <Footer />
    </div>
  );
}
export default RecipesDetails;
