interface NextButtonProps {
    handleNextQuestion: () => void;
    submitClicked: boolean;
    currentQuestionIndex: number;
}

export default function NextQuestionButton({ handleNextQuestion, submitClicked, currentQuestionIndex }: NextButtonProps) {
  return (
    <button
          onClick={handleNextQuestion}
          className={`min-h-[80px] py-2 px-4 shadow-md rounded-md font-bold text-white text-2xl bg-purple hover:bg-purple-hover transition duration-300 easy-in-out ${
            !submitClicked || currentQuestionIndex === 9 ? 'hidden' : ''
            }`}
        >
          Next Question
        </button>
  )
}
