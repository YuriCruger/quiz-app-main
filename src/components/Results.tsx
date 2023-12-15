import { Quiz } from "@/types/repositoryType"
import { getQuizBackgroundClass } from '../utils/quizUtils';

interface ResultsProps {
    quizSelected: Quiz | null;
    points: number;
    setPoints: React.Dispatch<React.SetStateAction<number>>;
    setShowResults: React.Dispatch<React.SetStateAction<boolean>>
    setQuizSelected: React.Dispatch<React.SetStateAction<Quiz | null>>;
}

export default function Results({ 
     quizSelected,
     points,
     setPoints, 
     setShowResults,
     setQuizSelected }: ResultsProps) {

      function resetAll () {
        setPoints(0)
        setQuizSelected(null)
        setShowResults(false)
      }

    return (
        <div className="flex justify-between w-full px-40 mt-20 max-lg:w-full max-lg:px-20 max-lg:flex-col max-lg:gap-10 max-lg:mt-6 max-md:px-10">
            <div className="w-3/6 max-lg:w-full">
                <h2 className="text-5xl font-bold text-dark-theme dark:text-white max-lg:text-4xl">
                    Quiz completed <br className="max-xl:hidden"/> <span className="font-extrabold">You scored...</span>
                </h2>
            </div>

            <div className="w-2/6 max-lg:w-full">
                <div className="shadow-md h-80 rounded-md flex flex-col items-center justify-center gap-10 bg-white dark:bg-card-theme">
                <div className="flex items-center gap-4">
                    <div className={`shadow rounded-md ${getQuizBackgroundClass(quizSelected?.title)}`}>
                        <img src={quizSelected?.icon} alt={quizSelected?.title} />
                    </div>
                    <p className="font-bold text-2xl text-dark-theme dark:text-white">
                        {quizSelected?.title}
                    </p>
                </div>
                <p className="font-bold text-8xl text-dark-theme dark:text-white">
                    {points}
                </p>
                <p className="italic font-semibold text-steel-blue dark:text-light-blue">
                    out of 10
                </p>
                </div>

            <button 
            onClick={resetAll}
            className="mt-6 w-full min-h-[80px] py-2 px-4 shadow-md rounded-md font-bold text-white text-2xl bg-purple hover:bg-purple-hover transition duration-300 easy-in-out">
                Play Again
            </button>
            </div>

        </div>
    )
}
