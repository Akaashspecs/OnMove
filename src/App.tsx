import { useState } from "react";
import ComponentSlider from "./components/ConponentSlider";
import { RxCross1 } from "react-icons/rx";
import Info from "./components/Info";
export default function App() {
  const [componentIndex, setComponentIndex] = useState<number>(0);

  return (
    <div className="relative items-center justify-center h-screen bg-black sm:flex">
      <div className="no-scroll absolute bottom-0 w-full sm:h-min sm:w-[600px] sm:relative bg-darkGrey rounded-t-xl sm:rounded-xl max-h-[calc(100vh-20%)] overflow-y-scroll sm:overflow-auto  ">
        <div className="absolute flex items-center justify-center text-center bg-black rounded-full text-crossGrey top-4 right-4 w-9 h-9 ">
          <RxCross1 />
        </div>
        <Info componentIndex={componentIndex} />
        <ComponentSlider
          componentIndex={componentIndex}
          setComponentIndex={setComponentIndex}
        />
      </div>
    </div>
  );
}
