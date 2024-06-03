import { objectivesTabsData } from "../Utils/helpers";
import Heading from "./Heading";
import TabSlider from "./TabSlider";

const Objectives = () => {
  return (
    <div>
      <Heading text="Your Top 3 Objectives" />
      <div className="my-6">
        <TabSlider sliderData={objectivesTabsData} />
      </div>
    </div>
  );
};

export default Objectives;
