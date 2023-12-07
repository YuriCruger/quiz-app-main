import { Quiz } from "@/types/repositoryType"

interface ResultsProps {
    darkMode: boolean
    quizSelected: Quiz | null
    points: number
    setPoints: React.Dispatch<React.SetStateAction<number>>;
    showResults: boolean
    setQuizSelected: React.Dispatch<React.SetStateAction<Quiz | null>>;
}

export default function Results({ 
     darkMode,
     quizSelected,
     points,
     setPoints, 
     showResults, 
     setQuizSelected }: ResultsProps) {

    const getQuizBackgroundClass = (title: string | undefined) => {
        const classMap: Record<string, string> = {
          html: "bg-html",
          css: "bg-css",
          javascript: "bg-js",
          accessibility: "bg-accessibility",
        };
         
        return title && classMap[title.toLowerCase()]
      };

      function resetAll () {
        setPoints(0)
        setQuizSelected(null)
      }

    return (
        <div className={`flex justify-between w-2/3 mt-20 ${!showResults && 'hidden'}`}>
            <div className="w-3/6">
                <h2
                    className={`text-6xl font-bold ${darkMode ? "text-white" : "text-dark-theme"
                        }`}
                >
                    Quiz completed <br /> <span className="font-extrabold">You scored...</span>
                </h2>
            </div>

            <div className="w-2/6">
                <div className={`shadow-md h-80 rounded-md flex flex-col items-center justify-center gap-10 ${darkMode ? 'bg-dark-theme' : 'bg-white'}`}>
                <div className="flex items-center gap-4">
                    <div className={`shadow rounded-md ${getQuizBackgroundClass(quizSelected?.title)}`}>
                        <img src={quizSelected?.icon} alt={quizSelected?.title} />
                    </div>
                    <p className={`font-bold text-2xl ${darkMode ? "text-white" : "text-dark-theme"}`}>
                        {quizSelected?.title}
                    </p>
                </div>
                <p 
                className={`font-bold text-8xl text-dark-theme ${darkMode ? "text-white" : "text-dark-theme"}`}
                >
                    {points}
                </p>
                <p className={`italic font-semibold ${
                    darkMode ? "text-light-blue" : "text-steel-blue"}`}
                >
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
