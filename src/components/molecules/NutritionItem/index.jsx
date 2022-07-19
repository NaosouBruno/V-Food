function NutriItem(props) {
  return (
    <div className="nutrition-container">
      <span className="nutrition-item">{props.itemName}</span>
      <span className="nutrition-item">
        {props.itemQuant}
        {props.type}
      </span>
    </div>
  );
}
export default NutriItem;
