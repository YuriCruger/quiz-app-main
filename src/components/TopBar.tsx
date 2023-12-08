import moonLight from "../../assets/images/icon-moon-light.svg";
import moonDark from "../../assets/images/icon-moon-dark.svg";
import sunLight from "../../assets/images/icon-sun-light.svg";
import sunDark from "../../assets/images/icon-sun-dark.svg";
import { Quiz } from "../types/repositoryType";
import { useState } from "react";
import { Switch } from "@/components/ui/switch"


interface TopBarProps {
  quizSelected: Quiz | null;
}

export default function Header({
  quizSelected,
}: TopBarProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const iconSun = darkMode ? sunLight : sunDark;
  const iconMoon = darkMode ? moonLight : moonDark;

  const getQuizBackgroundClass = (title: string | undefined) => {
    const classMap: Record<string, string> = {
      html: "bg-html",
      css: "bg-css",
      javascript: "bg-js",
      accessibility: "bg-accessibility",
    };
     
    return title && classMap[title.toLowerCase()]
  };

  function handleTheme () {
    document.documentElement.classList.toggle("dark")
    setDarkMode(!darkMode)
  }

  return (
    <header className="flex items-center justify-between w-full px-40 max-lg:w-full max-lg:px-20 max-lg:flex-row-reverse max-md:px-10">
      <div className="flex items-center gap-4">
      <div className={`shadow rounded-md ${getQuizBackgroundClass(quizSelected?.title)}`}>
        <img src={quizSelected?.icon} alt={quizSelected?.title} />
        </div>
        <p className="font-bold text-2xl text-dark-theme dark:text-white">
          {quizSelected?.title}
        </p>
      </div>

      <div className="flex gap-2">
        <img src={iconSun} alt="Icon Sun" />
        <Switch onClick={handleTheme}/>
        <img src={iconMoon} alt="Icon Moon" />
      </div>
    </header>
  );
}
