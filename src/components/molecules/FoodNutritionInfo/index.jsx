import "./nutri.scss";
function NutriInfo(props) {
  return (
    <div className="nutrition">
      <h2 className="nutrition-title">Nutrition Information</h2>
      <div className="nutrition-container">
        <span className="nutrition-item">{props.itemName}</span>
        <span className="nutrition-item">{props.itemQuant} kcal</span>
      </div>
      <hr className="nutrition-line" />
    </div>
  );
}
export default NutriInfo;
