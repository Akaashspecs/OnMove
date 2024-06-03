import { FuturePlanData } from "../Utils/helpers";
import Heading from "./Heading";
import TabSlider from "./TabSlider";

const FuturePlan = () => {
  return (
    <div>
      <Heading text="Stratigies To Build" />
      <div className="mt-6 mb-10">
        <TabSlider sliderData={FuturePlanData} />
      </div>
    </div>
  );
};

export default FuturePlan;
