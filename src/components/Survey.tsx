import { SurveyData } from "../Utils/helpers";

const Survey = () => {
  return (
    <div>
      <div className="mt-6 mb-10">
        <div dangerouslySetInnerHTML={{ __html: SurveyData }} />
      </div>
    </div>
  );
};

export default Survey;
