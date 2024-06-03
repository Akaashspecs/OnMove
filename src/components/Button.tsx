import { FaArrowRight } from "react-icons/fa6";

const Button = ({
  text,
  changeIndex,
}: {
  text: string;
  changeIndex?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div
      className="text-lg mx-4 my-3  bg-lightPurple font-medium h-12 text-darkGrey pt-2  flex  justify-center rounded-xl"
      onClick={changeIndex}
    >
      {text}
      <FaArrowRight className="text-base mt-1.5" />
    </div>
  );
};

export default Button;
