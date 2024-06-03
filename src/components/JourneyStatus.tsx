import { journeystatus } from "../Utils/helpers";

const JourneyStatus = () => (
  <div className="flex gap-2">
    {journeystatus.map((item) => {
      return (
        <div className="bg-mediumGrey h-[90px] w-3 rounded-2xl relative">
          <div
            style={{
              height: item.percentage,
            }}
            className={`  w-3 rounded-2xl absolute bottom-0 ${item.color}`}
          />
        </div>
      );
    })}
  </div>
);

export default JourneyStatus;
