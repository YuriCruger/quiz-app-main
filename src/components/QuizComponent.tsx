import { useState } from "react";
import { Quiz } from "../types/repositoryType";
import iconError from '../../assets/images/icon-error.svg'
import SubmitButton from './buttons/SubButton'
import NextQuestionButton from "./buttons/NextQuestionButton";
import SeeResultsButton from "./buttons/SeeResultsButton";
import { Progress } from "@/components/ui/progress"


interface QuizProps {
  quizSelected: Quiz | null;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  showResults: boolean
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>
}

export default function QuizComponent({ quizSelected, setPoints }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);
  const [submitClicked, setSubmitClicked] = useState<boolean>(false);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < (quizSelected?.questions.length || 0) - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
      setSubmitClicked(false);
    }
  };

  const handleSubmit = () => {
    if (!selectedOption) {
      setShowError(true);
      return;
    }
    setSubmitClicked(true);
    setSelectedOption(null)
    if (selectedOption === quizSelected?.questions[currentQuestionIndex].answer) {
      setPoints((prevPoints) => prevPoints + 1);
    }
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowError(false);
  };

  return (
    <div className="flex justify-between w-full px-40 mt-20 gap-10 max-lg:w-full max-lg:px-20 max-lg:flex-col max-lg:gap-10 max-lg:mt-6 max-md:px-10">
      <div className="flex flex-col justify-between w-3/6 max-lg:w-full max-lg:pr-0">
        <div className="flex flex-col gap-10 max-lg:pr-0 max-lg:mb-6 max-lg:gap-6">
          <p className="text-sm italic font-semibold text-steel-blue dark:text-light-blue">
            Question <span>{currentQuestionIndex + 1}</span> of{" "}
            {quizSelected?.questions.length}
          </p>
          <h2 className="text-5xl font-bold text-dark-theme dark:text-white max-lg:text-4xl">
            {quizSelected?.questions[currentQuestionIndex].question}
          </h2>
        </div>
        <Progress value={currentQuestionIndex}/>
      </div>

      <div className="flex flex-col gap-6 h-fit text-2xl w-3/6 max-lg:w-full">
        {quizSelected?.questions[currentQuestionIndex].options.map(
          (option, index) => (
            <form key={option}>
              <div
                key={option}
                className={`flex items-center gap-10 shadow-md px-4 py-2 rounded-md w-full font-bold cursor-pointer min-h-[80px] bg-white text-dark-theme dark:bg-dark-theme dark:text-white ${
                  selectedOption === option && "border-2 border-purple"} ${submitClicked
                    ? option === quizSelected?.questions[currentQuestionIndex].answer
                      ? 'border-2 border-green-500'
                      : 'border-2 border-red-500'
                    : ''
                  }`}

                onClick={() => handleOptionClick(option)}
              >
                <div className="bg-options px-3 py-1 rounded-md">
                <div className="text-dark-theme">{String.fromCharCode(65 + index)}</div>
                </div>
                <h2 className="pr-6">{option}</h2>
              </div>
            </form>
          )
        )}

        <SubmitButton handleSubmit={handleSubmit} submitClicked={submitClicked}/>

        <NextQuestionButton 
        handleNextQuestion={handleNextQuestion} 
        submitClicked={submitClicked}
        currentQuestionIndex={currentQuestionIndex}
        />

        {showError && (
          <div className="flex items-center mx-auto gap-4">
            <img src={iconError} alt="" />
            <span className='text-red-500 text-lg'>Please select an answer</span>
          </div>
        )}

        <SeeResultsButton 
        submitClicked={submitClicked}
        currentQuestionIndex={currentQuestionIndex}
        />
      </div>
    </div>
  );
}
