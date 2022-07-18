import "./info.scss";
import Timer from "/assets/Timer.svg";
import ForkKnife from "/assets/ForkKnife.svg";
function FoodInfo() {
  return (
    <div className="foodInfo">
      <h2 className="foodInfo-title">Health Japanese Fried Rice</h2>
      <div className="foodSpecifications">
        <div className="foodSpecifications-container">
          <div className="foodSpecifications-content ">
            <img src={Timer} />
            <span className="foodSpecifications-container--titleTimer">
              COOK TIME
            </span>
          </div>
          <span className="foodSpecifications-container--titleMinutes">
            15 MINUTES
          </span>
        </div>
        <div className="foodSpecifications-content">
          <img src={ForkKnife} />
          <span className="foodSpecifications-container--titleType">
            Chicken
          </span>
        </div>
      </div>
    </div>
  );
}
export default FoodInfo;
