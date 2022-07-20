import "./ingredients.scss";
import { ListIngredients } from "../../molecules/index";
function Ingredients() {
  return (
    <div className="ingredients">
      <h2 className="ingredients__title">Ingredients</h2>
      <h3 className="ingredients__title ingredients__title--subTitle">
        For main dish
      </h3>
      <ul className="ingredients__list">
        <ListIngredients
          className="listIng__ingredient--marked"
          ingredient="Lorem ipsum dolor sit amet"
        />
        <hr className="listIng-line" />
        <ListIngredients
          className="listIng__ingredient"
          ingredient="Lorem ipsum dolor sit amet"
        />
        <hr className="listIng-line" />
        <ListIngredients
          className="listIng__ingredient"
          ingredient="Lorem ipsum dolor sit amet"
        />
        <hr className="listIng-line" />
        <ListIngredients
          className="listIng__ingredient"
          ingredient="Lorem ipsum dolor sit amet"
        />
        <hr className="listIng-line" />
        <ListIngredients
          className="listIng__ingredient"
          ingredient="Lorem ipsum dolor sit amet"
        />
        <hr className="listIng-line" />
      </ul>

      <h2 className="ingredients__title ingredients__title--subTitle">
        For the sauce
      </h2>

      <ul className="ingredients__list">
        <ListIngredients
          className="listIng__ingredient"
          ingredient="Lorem ipsum dolor sit amet"
        />
        <hr className="listIng-line" />
        <ListIngredients
          className="listIng__ingredient"
          ingredient="Lorem ipsum dolor sit amet"
        />
        <hr className="listIng-line" />
        <ListIngredients
          className="listIng__ingredient"
          ingredient="Lorem ipsum dolor sit amet"
        />
        <hr className="listIng-line" />
      </ul>
    </div>
  );
}
export default Ingredients;
