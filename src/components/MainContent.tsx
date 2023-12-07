import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Repository from "../types/repositoryType";
import { Quiz } from "../types/repositoryType";

interface MainContentProps {
  handleQuizSelect: (quiz: Quiz) => void;
  data?: Repository;
  isFetching: boolean;
  darkMode: boolean;
  quizSelected: Quiz | null;
}

export default function MainContent({
  data,
  isFetching,
  darkMode,
  handleQuizSelect,
  quizSelected,
}: MainContentProps) {

    const getQuizBackgroundClass = (title: string) => {
        const classMap: Record<string, string> = {
          html: "bg-html",
          css: "bg-css",
          javascript: "bg-js",
          accessibility: "bg-accessibility",
        };
         
        return classMap[title.toLowerCase()]
      };

  return (
    <div className={`flex justify-between w-2/3 mt-20 ${ quizSelected && 'hidden' }`}>
      <div className="w-3/6">
        <h1
          className={`text-5xl font-bold ${
            darkMode ? "text-white" : "text-dark-theme"
          }`}
        >
          Welcome to the <br />{" "}
          <span className="font-extrabold">Frontend Quiz</span>
        </h1>
        <p
          className={`text-sm italic font-semibold mt-20 ${
            darkMode ? "text-light-blue" : "text-steel-blue"
          }`}
        >
          Pick a subject to get started.
        </p>
      </div>

      <div className="flex flex-col gap-6 h-fit text-2xl w-3/6">
        {isFetching ? (
          <Skeleton height={80} count={4} />
        ) : (
          data?.quizzes.map((quiz) => (
            <div
              key={quiz.title}
              className={`flex items-center gap-10 shadow-md px-4 py-2 rounded-md w-full font-bold cursor-pointer min-h-[80px] ${
                darkMode
                  ? "bg-dark-theme text-white"
                  : "bg-white text-dark-theme"
              }`}
              onClick={() => handleQuizSelect(quiz)}
            >
                <div className={`shadow rounded-md ${getQuizBackgroundClass(quiz.title)}`}>
              <img src={quiz.icon} alt={`${quiz.title} Icon`} />
                </div>
              {quiz.title}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
