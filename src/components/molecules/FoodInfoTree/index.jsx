function FoodSpecificationsTree(props) {
  return (
    <div className="foodSpecifications-container">
      <img src={props.leftImg} />
      <div className="foodSpecifications-content ">
        <span className="foodSpecifications-container--titleTimer">
          {props.leftTitle}
        </span>
        <span className="foodSpecifications-container--titleMinutes">
          {props.leftSubTitle}
        </span>
      </div>
    </div>
  );
}
export default FoodSpecificationsTree;
