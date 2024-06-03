import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ComposedChart,
  Line,
  CartesianGrid,
} from "recharts";
import { workoutProgressContent } from "../Utils/helpers";
import { RenderCustomizedLabel } from "./CustomizedLabel";
import Heading from "./Heading";

const WorkoutProgress = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClamp = () => {
    setIsOpen(!isOpen);
  };

  const data = [
    { name: "Jan", uv: 3 },
    { name: "Feb", uv: 6 },
    { name: "March", uv: 15 },
    { name: "April", uv: 23 },
  ];

  const getParabolicPath = ({
    x,
    y,
    width,
    height,
    controlPointOffset,
    item,
  }: {
    x: number;
    y: number;
    width: number;
    height: number;
    controlPointOffset: number;
    item: number;
  }) =>
    `M${x - controlPointOffset},${y + height}
   Q${x + width / 2},${
      (height === 18.75 && y - height + item * 4) ||
      (height === 37.5 && y - height + item * 8) ||
      (height === 93.75 && y - height + item * 21) ||
      (height === 143.75 && y - height + item * 33) ||
      y
    } ${x + width + controlPointOffset},${y + height} 
   Z`;

  const getNormalParabolicPath = ({
    x,
    y,
    width,
    height,
    controlPointOffset,
  }: {
    x: number;
    y: number;
    width: number;
    height: number;
    controlPointOffset: number;
  }) =>
    `M${x - controlPointOffset},${y + height}
   Q${x + width / 2},${y - height} ${x + width + controlPointOffset},${
      y + height
    } 
   Z`;

  const TriangleBar = (props: any) => {
    const { x, y, width, height, controlPointOffset } = props;

    const fillColor = `${
      (height >= 50 && height <= 100 && "#F8C255") ||
      (height < 50 && "#FD5356") ||
      (height > 100 && "#4bea7f")
    }`;

    const Arr = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
      <>
        {Arr.map((item, index) => {
          if (item > 1) {
            return (
              <path
                key={index}
                d={getParabolicPath({
                  x,
                  y,
                  width,
                  height,
                  controlPointOffset,
                  item,
                })}
                fill={fillColor}
                stroke={`${
                  (height >= 50 && height <= 100 && "#c69b44") ||
                  (height < 50 && "#ca4245") ||
                  (height > 100 && "#4bea7f")
                }`}
                fillOpacity={0}
              />
            );
          } else
            return (
              <path
                key={index}
                d={getNormalParabolicPath({
                  x,
                  y,
                  width,
                  height,
                  controlPointOffset,
                })}
                fill={fillColor}
                stroke={`${
                  (height >= 50 && height <= 100 && "#c69b44") ||
                  (height < 50 && "#ca4245") ||
                  (height > 100 && "#4bea7f")
                }`}
                fillOpacity={0.5}
              />
            );
        })}
      </>
    );
  };

  const [chartWidth, setChartWidth] = useState(400); // Initial width

  useEffect(() => {
    // Update the chart width when the window is resized
    const handleResize = () => {
      setChartWidth(window.innerWidth < 430 ? window.innerWidth - 20 : 400);
    };

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
        <ComposedChart
          barSize={58}
          width={chartWidth}
          height={200}
          data={data}
          margin={{ top: 20 }}
        >
          <XAxis
            padding={{ left: 6 }}
            dataKey="name"
            label={<RenderCustomizedLabel chartWidth={chartWidth} />}
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
            shape={<TriangleBar controlPointOffset={15} data={data} />}
          />
          <Line
            dot={false}
            type="linear"
            dataKey="uv"
            stroke="#7D86EB"
            strokeWidth={3}
          />
        </ComposedChart>
      </div>
      <div
        className={`text-textWhite px-4 mt-3 ${
          isOpen ? "line-clamp-none" : "line-clamp-2"
        }`}
      >
        {" "}
        {workoutProgressContent}
      </div>
      <div className={`text-textGrey  mx-4 mt-2 mb-3 `} onClick={handleClamp}>
        {isOpen ? "Show Less" : "Show More"}
      </div>
    </div>
  );
};

export default WorkoutProgress;
