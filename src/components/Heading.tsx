const Heading = ({
  text,
  headingClass,
}: {
  text: string;
  headingClass?: string;
}) => {
  const combinedClassname = `${headingClass}  text-lightPurple text-2xl font-medium  mx-4  `;
  return <div className={combinedClassname}>{text}</div>;
};

export default Heading;
