import { objectivesTabsData, StretegiesToBuild } from "../Utils/helpers";
import Heading from "./Heading";
import TabSlider from "./TabSlider";

const Stratigies = () => {
  return (
    <div>
      <Heading text="Stratigies To Build" />
      <div className="mt-6 mb-10">
        <TabSlider sliderData={StretegiesToBuild} />
      </div>
    </div>
  );
};

export default Stratigies;
