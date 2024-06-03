const Info = ({ componentIndex }: { componentIndex: number }) => {
  return (
    <div
      className={`  flex  mt-10 mb-8
          ${componentIndex === 0 && "justify-center "}  
         ${
           componentIndex > 0 && "items-center mt-4 justify-items-start ml-4"
         } `}
    >
      {" "}
      <img
        src="/medidate.jpg"
        className={`h-16 w-16 rounded-3xl ${
          componentIndex > 0 && "h-9 w-9 rounded-xl"
        } `}
      />
      {componentIndex > 0 && (
        <p className="ml-5 text-sm text-textGrey">Your Journey Reflection</p>
      )}
    </div>
  );
};
export default Info;
