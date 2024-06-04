import { FaArrowRight } from "react-icons/fa6";

const Button = ({
  componentIndex,
  text,
  changeIndex,
}: {
  componentIndex?: number;
  text: string;
  changeIndex?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div
      className={`flex justify-center h-12 pt-2 mx-4 mt-3 cursor-pointer ${
        componentIndex === 0 ? "mb-10" : "mb-3"
      } text-lg font-medium bg-lightPurple text-darkGrey rounded-xl`}
      onClick={changeIndex}
    >
      {text}
      <FaArrowRight className="text-base mt-1.5" />
    </div>
  );
};

export default Button;
