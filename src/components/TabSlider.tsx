import "./TabSlider.css";
import { useEffect, useRef } from "react";

type sliderDataType = {
  heading: string;
  color: string;
  context: string;
}[];

const TabSlider = ({ sliderData }: { sliderData: sliderDataType }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scrolling speed
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="flex gap-2 px-4 overflow-x-scroll no-scroll sm:px-0 sm:mx-4 "
      ref={containerRef}
    >
      {sliderData.map((item) => (
        <div className="w-[300px]" key={item.heading}>
          <div
            className={`bg-black w-[300px]  rounded-t-xl px-4  py-1   ${item.color}`}
          >
            <div dangerouslySetInnerHTML={{ __html: item.heading }}></div>
          </div>
          <div className="bg-black px-4 w-[300px] py-2  rounded-b-xl mt-0.5 text-textGrey text-sm">
            {item.context}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabSlider;
