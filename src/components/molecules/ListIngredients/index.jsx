import "./listIngredients.scss";
function ListIngredients(props) {
  return (
    <li className="listIng">
      <input type="checkbox" className="listIng__checked" />
      <label className={`listIng__ingredient ${props.className}`}>
        {props.ingredient}
      </label>
    </li>
  );
}
export default ListIngredients;
