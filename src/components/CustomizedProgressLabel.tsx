export const RenderCustomizedProgressLabel = ({
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
        dx={chartWidth - 230}
        textAnchor="start"
        fill="#666" // Set the text color
        fontSize={fontSize} // Set the font size
      >
        PROGRESS OVER TIME
      </text>
    </>
  );
};
