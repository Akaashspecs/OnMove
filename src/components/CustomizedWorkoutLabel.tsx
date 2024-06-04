export const CustomizedWorkoutLabel = ({
  chartWidth,
}: {
  chartWidth: number;
}) => {
  const fontSize = 11;

  return (
    <>
      <text
        dy={9}
        dx={100}
        textAnchor="start"
        fill="#666" // Set the text color
        fontSize={fontSize} // Set the font size
      >
        CONSISTENCY
      </text>

      <text
        dy={9}
        dx={chartWidth - 95}
        textAnchor="start"
        fill="#666" // Set the text color
        fontSize={fontSize} // Set the font size
      >
        MONTHLY TREND
      </text>
      <rect x={chartWidth - 130} y={3} width={30} height={2} fill="#7D86EB" />
    </>
  );
};
