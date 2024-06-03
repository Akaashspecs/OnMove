export const RenderCustomizedLabel = ({
  chartWidth,
}: {
  chartWidth: number;
}) => {
  const fontSize = 11;
  const textPadding = 5; // Adjust the padding around the text

  return (
    <>
      <text
        dy={8}
        dx={100}
        textAnchor="start"
        fill="#666" // Set the text color
        fontSize={fontSize} // Set the font size
      >
        CONSISTENCY
      </text>

      <text
        dy={8}
        dx={chartWidth - 95}
        textAnchor="start"
        fill="#666" // Set the text color
        fontSize={fontSize} // Set the font size
      >
        MONTHLY TREND
      </text>
      <rect
        x={chartWidth - 130} // Adjust the x position of the rectangle
        y={3} // Adjust the y position of the rectangle
        width={30} // Adjust the width of the rectangle
        height={2} // Adjust the height of the rectangle
        fill="#7D86EB" // Set the background color
      />
    </>
  );
};
