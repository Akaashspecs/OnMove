import Heading from "./Heading";
import JourneyStatus from "./JourneyStatus";

const JourneyReflection = () => {
  return (
    <div className="mb-8">
      <Heading text="Your Journey Reflection " />
      <div className="text-textWhite mt-3 mx-4">
        Your dedication to fitness despite long work hours is inspiring. Keep
        experimenting and staying consistent - you're on the right path!
      </div>

      <div className="text-2xl mt-5 mx-4 text-textWhite font-medium">
        Let's glance at your journey,{" "}
        <div className="text-lightPurple"> Kritika!</div>
      </div>
      <div className="flex justify-center mt-6">
        <JourneyStatus />
      </div>
    </div>
  );
};

export default JourneyReflection;
