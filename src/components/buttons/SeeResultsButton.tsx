import { useMyContext } from '../../contexts/Results';

interface SeeButtonProps {
    submitClicked: boolean
    currentQuestionIndex: number
}

export default function SeeResultsButton({ submitClicked, currentQuestionIndex }: SeeButtonProps) {
    const { setShowResults } = useMyContext();
  return (
    <button
          onClick={() => setShowResults(true)}
          className={`min-h-[80px] py-2 px-4 shadow-md rounded-md font-bold text-white text-2xl bg-purple hover:bg-purple-hover transition duration-300 easy-in-out ${
              submitClicked &&
              currentQuestionIndex === 9 ? '' : 'hidden'
            }`}
        >
          See Results
        </button>
  )
}
