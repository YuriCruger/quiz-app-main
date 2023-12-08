//hooks
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
//types
import Repository from "../types/repositoryType";
import { Quiz } from "../types/repositoryType";
//functions?
import { getQuizBackgroundClass } from '../utils/quizUtils';

interface MainContentProps {
  handleQuizSelect: (quiz: Quiz) => void;
  data?: Repository;
  isFetching: boolean;
  quizSelected: Quiz | null;
}

export default function MainContent({
  data,
  isFetching,
  handleQuizSelect,
}: MainContentProps) {

  return (
    <div className="flex justify-between w-full px-40 mt-20 gap-10 max-lg:flex-col max-lg:w-full max-lg:px-20 max-lg:mt-6 max-md:px-10">
      <div className="w-3/6 max-lg:w-full">
        <h1 className="text-5xl font-bold text-dark-theme dark:text-white max-lg:text-4xl">
          Welcome to the <br className="max-xl:hidden"/> <span className="font-extrabold">Frontend Quiz</span>
        </h1>
        <p className="text-sm italic font-semibold mt-20 text-steel-blue dark:text-light-blue max-lg:mt-10">
          Pick a subject to get started.
        </p>
      </div>

      <div className="flex flex-col gap-6 h-fit text-2xl w-3/6 max-lg:w-full">
        {isFetching ? (
          <Skeleton height={80} count={4} />
        ) : (
          data?.quizzes.map((quiz) => (
            <div
              key={quiz.title}
              className="flex items-center gap-10 shadow-md px-4 py-2 rounded-md w-full font-bold cursor-pointer min-h-[80px] bg-white text-dark-theme dark:bg-dark-theme dark:text-white"
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
