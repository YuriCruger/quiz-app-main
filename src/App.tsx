//components
import TopBar from "./components/TopBar";
import MainContent from "./components/MainContent";
import QuizComponent from "./components/QuizComponent";
import Results from "./components/Results";
//hooks
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { SkeletonTheme } from 'react-loading-skeleton';
//types
import Repository from "./types/repositoryType";
import { Quiz } from "./types/repositoryType";
//contexts
import { useMyContext } from './contexts/Results';


function App() {
  const [quizSelected, setQuizSelected] = useState<Quiz | null>(null);
  const [points, setPoints] = useState<number>(0)
  const { showResults, setShowResults } = useMyContext();

  const { data, isFetching } = useQuery<Repository>(
    "quizzes",
    async () => {
      const response = await axios.get(
        "https://api.npoint.io/3dd9568841f33918c369"
      );
      return response.data;
    },
    {
      staleTime: 1000 * 60, //1 minute
    }
  );

  const handleQuizSelect = (quiz: Quiz) => {
    setQuizSelected(quiz);
  };

  return (
    <SkeletonTheme baseColor="#626C7F dark:#babec4">
      <main className="min-h-screen w-full bg-options flex flex-col items-center justify-center bg-patternBg bg-no-repeat bg-cover dark:bg-dark-theme dark:bg-patternBgDark max-lg:py-10">
        <TopBar
          quizSelected={quizSelected}
        />

        {!quizSelected && <MainContent
          data={data}
          isFetching={isFetching}
          handleQuizSelect={handleQuizSelect}
          quizSelected={quizSelected}
        />}

        {quizSelected && !showResults && (
          <QuizComponent
            quizSelected={quizSelected}
            setPoints={setPoints}
            showResults={showResults}
            setShowResults={setShowResults}
          />
        )}


        {showResults && <Results
          quizSelected={quizSelected}
          points={points}
          setPoints={setPoints}
          setShowResults={setShowResults}
          setQuizSelected={setQuizSelected}
        />}
      </main>
    </SkeletonTheme>
  );
}

export default App;
