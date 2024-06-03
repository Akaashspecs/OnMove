import Button from "./Button";
import FitnessProgress from "./FitnessProgress";
import FuturePlan from "./FuturePlan";
import JourneyReflection from "./JourneyReflections";
import Objectives from "./Objectives";
import Stratigies from "./Strategies";
import Survey from "./Survey";
import Track from "./Track";
import WorkoutProgress from "./WorkoutProgress";

const ComponentSlider = ({
  componentIndex,
  setComponentIndex,
}: {
  componentIndex: number;
  setComponentIndex: (x: number) => void;
}) => {
  const components = [
    { id: 0, component: <JourneyReflection /> },
    { id: 1, component: <Objectives /> },
    { id: 2, component: <WorkoutProgress /> },
    { id: 3, component: <FitnessProgress /> },
    { id: 4, component: <Stratigies /> },
    { id: 5, component: <FuturePlan /> },
    { id: 6, component: <Track /> },
    { id: 7, component: <Survey /> },
  ];

  const nextComponent = () => {
    setComponentIndex(componentIndex + 1);
  };

  const previousComponent = () => {
    setComponentIndex(componentIndex - 1);
  };

  return (
    <div>
      <div>{components[componentIndex]?.component}</div>
      <div className="flex justify-center gap-2 ">
        {components.map((item) => (
          <div
            key={item.id}
            className={`bg-mediumGrey h-1 w-6 rounded-lg ${
              item.id <= componentIndex && "bg-textWhite"
            }`}
          />
        ))}
      </div>
      {componentIndex < components.length - 1 && (
        <Button text="Next" changeIndex={nextComponent} />
      )}
      {componentIndex === components.length - 1 && (
        <Button text="Take Survey" />
      )}

      {componentIndex > 0 && (
        <div
          className="mb-6 text-lg text-center text-lightPurple"
          onClick={previousComponent}
        >
          Back
        </div>
      )}
    </div>
  );
};

export default ComponentSlider;
