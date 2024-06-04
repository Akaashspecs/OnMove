import { useEffect, useState } from "react";
import {
  Bar,
  XAxis,
  YAxis,
  ComposedChart,
  Line,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  workoutProgressContent,
  workoutProgressGraphData,
} from "../Utils/helpers";
import { CustomizedWorkoutLabel } from "./CustomizedWorkoutLabel";
import Heading from "./Heading";
import ParabolicBar from "./ParabolicBar";

const WorkoutProgress = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [chartWidth, setChartWidth] = useState(400);
  const handleClamp = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth < 430 ? window.innerWidth - 20 : 400);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mt-5">
      <span className="gap-1 ml-4 text-xs uppercase text-textGrey text-gap">
        P e r f o r m a c e
      </span>
      <span className="gap-1 ml-3 text-xs uppercase text-textGrey text-gap">
        S t a t s
      </span>
      <Heading text="Workout Consistency Progress" headingClass="mt-0 mb-4" />
      <div className="mt-7">
        <ResponsiveContainer width="95%" height={200}>
          <ComposedChart
            barSize={58}
            data={workoutProgressGraphData}
            margin={{ top: 20 }}
          >
            <XAxis
              padding={{ left: 6, right: 8 }}
              dataKey="name"
              label={<CustomizedWorkoutLabel chartWidth={chartWidth} />}
            />
            <YAxis
              label={{
                value: "NO. OF WORKOUTS",
                angle: -90,
                fontSize: 12,
                position: "insideBottomLeft",
                offset: 25,
              }}
              axisLine={false}
              className="mt-7"
            />
            <CartesianGrid opacity={0.3} vertical={false} />
            <Bar
              dataKey="uv"
              stroke="#000000"
              opacity={90}
              shape={
                <ParabolicBar
                  controlPointOffset={15}
                  data={workoutProgressGraphData}
                />
              }
            />
            <Line
              dot={false}
              type="linear"
              dataKey="uv"
              stroke="#7D86EB"
              strokeWidth={3}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div
        className={`text-textWhite px-4 mt-3 ${
          isOpen ? "line-clamp-none" : "line-clamp-2"
        }`}
      >
        {" "}
        {workoutProgressContent}
      </div>
      <div className={`text-textGrey  mx-4 mt-2 mb-8  `} onClick={handleClamp}>
        {isOpen ? "Show Less" : "Show More"}
      </div>
    </div>
  );
};

export default WorkoutProgress;
