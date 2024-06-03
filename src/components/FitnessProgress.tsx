import { fitnessScoreProress } from "../Utils/helpers";
import Heading from "./Heading";
import { useEffect, useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { RenderCustomizedProgressLabel } from "./CustomizedProgressLabel";

const FitnessProgress = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const data = [
    { name: "FEB 1st half", uv: 0.2 },
    { name: "FEB 2st half", uv: 1.6 },
    { name: "MARCH 1st half", uv: 2.2 },
    { name: "MARCH 2st half", uv: 3.8 },
    { name: "APRIL 1st half", uv: 3.2 },
    { name: "APRIL 2nd half", uv: 3.7 },
    { name: "MAY 1st half", uv: 5.0 },
    { name: "MAY 2st half", uv: 5.5 },
    { name: "JUNE 1st half", uv: 3.8 },
    { name: "JUNE 2st half", uv: 4.2 },
    { name: "JULY 1st half", uv: 6.4 },
    { name: "JULY 2nd half", uv: 7.5 },
  ];

  const handleClamp = () => {
    setIsOpen(!isOpen);
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
      {isOpen === false && (
        <>
          {" "}
          <span className="gap-1 ml-4 text-xs uppercase text-textGrey text-gap">
            P e r f o r m a c e
          </span>
          <span className="gap-1 ml-3 text-xs uppercase text-textGrey text-gap">
            S t a t s
          </span>
          <Heading text="Fitness Score Progress" headingClass="mt-2" />
        </>
      )}
      <div className="mt-4 ">
        <LineChart
          width={chartWidth}
          height={200}
          data={data}
          margin={{ top: 20, bottom: 2 }}
        >
          <XAxis
            padding={{ left: 6 }}
            dataKey="name"
            label={<RenderCustomizedProgressLabel chartWidth={chartWidth} />}
            tick={{ width: 80 }}
            tickSize={3}
          />
          <YAxis
            label={{
              value: "TOTAL SCORE",
              angle: -90,
              fontSize: 12,
              position: "insideBottomLeft",
              offset: 35,
            }}
            axisLine={false}
            className="mt-7"
          />
          <CartesianGrid opacity={0.3} vertical={false} />
          <defs>
            <linearGradient id="gradient" x1="8%" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#58C778" stopOpacity={0.8} />
              <stop offset="30%" stopColor="#F8C255" stopOpacity={0.7} />
              <stop offset="90%" stopColor="#FD5356" stopOpacity={0.9} />
            </linearGradient>
          </defs>
          <Line
            dot={false}
            type="linear"
            dataKey="uv"
            stroke="url(#gradient)"
            strokeWidth={3}
            isAnimationActive={false}
          >
            {" "}
          </Line>
        </LineChart>
      </div>
      <div
        className={`text-textWhite px-4 mt-3 ${
          isOpen ? "line-clamp-none" : "line-clamp-2"
        }`}
      >
        {" "}
        <div dangerouslySetInnerHTML={{ __html: fitnessScoreProress }}></div>
      </div>
      <div className={`text-textGrey  mx-4 mt-2 mb-3 `} onClick={handleClamp}>
        {isOpen ? "Show Less" : "Show More"}
      </div>
    </div>
  );
};

export default FitnessProgress;
