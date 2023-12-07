import { useQuery } from "react-query";
import TopBar from "./components/TopBar";
import Repository from "./types/repositoryType";
import { Quiz } from "./types/repositoryType";
import axios from "axios";
import { useState } from "react";
import MainContent from "./components/MainContent";
import QuizComponent from "./components/QuizComponent";
import { SkeletonTheme } from 'react-loading-skeleton';
import Results from "./components/Results";

function App() {
  const [quizSelected, setQuizSelected] = useState<Quiz | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0)
  const [showResults, setShowResults] = useState<boolean>(false)

  function handleChangeDarkMode() {
    setDarkMode(!darkMode);
  }

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
    <SkeletonTheme baseColor={darkMode ? '#626C7F' : '#babec4'}>
    <main
      className={`h-screen w-full bg-white flex flex-col items-center justify-center bg-patternBg bg-no-repeat bg-cover ${
        darkMode && "bg-darkness bg-patternBgDark"
      }`}
    >
      <TopBar 
      handleChangeDarkMode={handleChangeDarkMode} 
      darkMode={darkMode}
      quizSelected={quizSelected}
       />

      <MainContent 
      data={data} 
      isFetching={isFetching} 
      darkMode={darkMode} 
      handleQuizSelect={handleQuizSelect}
      quizSelected={quizSelected}
      />

      <QuizComponent 
      quizSelected={quizSelected} 
      darkMode={darkMode} 
      setPoints={setPoints}
      showResults={showResults}
      setShowResults={setShowResults}
      />

      <Results 
      darkMode={darkMode} 
      quizSelected={quizSelected}
      points={points}
      setPoints={setPoints}
      showResults={showResults}
      setQuizSelected={setQuizSelected}
       />
    </main>
    </SkeletonTheme>
  );
}

export default App;
