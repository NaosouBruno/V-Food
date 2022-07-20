function NutriItem(props) {
  return (
    <li className="nutrition-container">
      <span className="nutrition-item">{props.itemName}</span>
      <span className="nutrition-item">
        {props.itemQuant}
        {props.type}
      </span>
    </li>
  );
}
export default NutriItem;
