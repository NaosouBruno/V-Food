function FoodSpecificationsDuo(props) {
  return (
    <div className="foodSpecifications">
      <div className="foodSpecifications-container">
        <div className="foodSpecifications-content">
          <img src={props.rightImg} />
          <span className="foodSpecifications-container--titleType">
            {props.rightTitle}
          </span>
        </div>
        <span className="foodSpecifications-container--titleType">
          {props.rightSubTitle}
        </span>
      </div>
    </div>
  );
}
export default FoodSpecificationsDuo;
