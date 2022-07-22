import "./info.scss";
import Timer from "/assets/Timer.svg";
import ForkKnife from "/assets/ForkKnife.svg";
import Food from "/assets/Food03.png";
import Share from "/assets/share.png";
import Print from "/assets/printer.png";
import {
  FoodSpecificationsDuo,
  FoodSpecificationsTree,
  NutriInfo,
  NutriIcon,
} from "../../molecules/index";
import John from "/assets/john.png";
function FoodInfo() {
  return (
    <section className="foodInfo">
      <h2 className="foodInfo-title">Health Japanese Fried Rice</h2>
      <div className="foodInfo-container">
        <div className="foodSpecifications">
          <FoodSpecificationsTree
            leftImg={John}
            leftTitle="John Smith"
            leftSubTitle="15 March 2022"
          />
          <FoodSpecificationsTree
            leftImg={Timer}
            leftTitle="COOK TIME"
            leftSubTitle="15 MINUTES"
          />
        </div>
        <div className="foodInfo-containerImg">
          <img src={Food} className="foodInfo-dish" />
        </div>
        <div className="foodSpecifications">
          <FoodSpecificationsTree
            leftImg={Timer}
            leftTitle="PREP TIME"
            leftSubTitle="15 minutes"
          />
          <FoodSpecificationsDuo rightImg={ForkKnife} rightTitle="Chicken" />
        </div>
      </div>
      <NutriInfo />
      <div className="foodInfo-options">
        <NutriIcon icon={Print} title="Print" />
        <NutriIcon icon={Share} title="Share" />
      </div>
    </section>
  );
}
export default FoodInfo;
