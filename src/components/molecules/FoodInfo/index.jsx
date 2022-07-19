import "./info.scss";
import Timer from "/assets/Timer.svg";
import ForkKnife from "/assets/ForkKnife.svg";
import Food from "/assets/Food03.png";
import {
  FoodSpecificationsDuo,
  FoodSpecificationsTree,
  NutriInfo,
} from "../../molecules/index";
import John from "/assets/john.png";
function FoodInfo() {
  return (
    <div className="foodInfo">
      <h2 className="foodInfo-title">Health Japanese Fried Rice</h2>
      <div className="foodSpecifications">
        <FoodSpecificationsTree
          leftImg={Timer}
          leftTitle="COOK TIME"
          leftSubTitle="15 MINUTES"
        />
        <FoodSpecificationsDuo rightImg={ForkKnife} rightTitle="Chicken" />
      </div>
      <img src={Food} className="foodInfo-dish" />
      <div className="foodSpecifications">
        <FoodSpecificationsTree
          leftImg={John}
          leftTitle="John Smith"
          leftSubTitle="15 March 2022"
        />
        <FoodSpecificationsTree
          leftImg={Timer}
          leftTitle="PREP TIME"
          leftSubTitle="15 minutes"
        />
      </div>
      <NutriInfo itemName="Caloreis" itemQuant="219.9" />
    </div>
  );
}
export default FoodInfo;