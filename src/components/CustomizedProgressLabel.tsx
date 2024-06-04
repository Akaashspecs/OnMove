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
        className="bg-red-500"
        width={"full"}
        dy={9}
        dx={110}
        textAnchor="start"
        fill="#666" // Set the text color
        fontSize={fontSize} // Set the font size
      >
        PROGRESS OVER TIME
      </text>
    </>
  );
};
