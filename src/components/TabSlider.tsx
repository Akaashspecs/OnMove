type sliderDataType = {
  heading: string;
  color: string;
  context: string;
}[];

const TabSlider = ({ sliderData }: { sliderData: sliderDataType }) => {
  return (
    <div className="flex gap-2 px-4 overflow-y-scroll">
      {sliderData.map((item) => (
        <div className="w-72" key={item.heading}>
          <div
            className={`bg-black w-72  rounded-t-xl px-4 py-1   ${item.color}`}
          >
            <div dangerouslySetInnerHTML={{ __html: item.heading }}></div>
          </div>
          <div className="bg-black px-4 w-72 py-2  rounded-b-xl mt-0.5 text-textGrey text-sm">
            {item.context}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabSlider;
