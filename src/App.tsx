import { useState } from "react";
import ComponentSlider from "./components/ConponentSlider";
import { RxCross1 } from "react-icons/rx";
import Info from "./components/Info";
export default function App() {
  const [componentIndex, setComponentIndex] = useState<number>(0);

  return (
    <div className="bg-black h-screen relative">
      <div className="bg-darkGrey absolute bottom-0 w-full rounded-t-xl">
        <div className="text-center flex justify-center items-center bg-black rounded-full text-crossGrey  absolute top-4 right-4 w-9 h-9 ">
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
