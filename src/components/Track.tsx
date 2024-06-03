import { TrackContent, trackParagraph } from "../Utils/helpers";
import Heading from "./Heading";
import TabSlider from "./TabSlider";

const Track = () => {
  return (
    <div>
      <Heading text="What More We Want To Track" />
      <div className="mt-6 mb-10">
        <div dangerouslySetInnerHTML={{ __html: trackParagraph }} />
        <TabSlider sliderData={TrackContent} />
      </div>
    </div>
  );
};

export default Track;
