import moonLight from "../../assets/images/icon-moon-light.svg";
import moonDark from "../../assets/images/icon-moon-dark.svg";
import sunLight from "../../assets/images/icon-sun-light.svg";
import sunDark from "../../assets/images/icon-sun-dark.svg";
import { Quiz } from "../types/repositoryType";

interface TopBarProps {
  darkMode: boolean;
  handleChangeDarkMode: () => void;
  quizSelected: Quiz | null;
}

export default function Header({
  darkMode,
  handleChangeDarkMode,
  quizSelected,
}: TopBarProps) {
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

  return (
    <header className="flex items-center justify-between w-2/3">
      <div className="flex items-center gap-4">
      <div className={`shadow rounded-md ${getQuizBackgroundClass(quizSelected?.title)}`}>
        <img src={quizSelected?.icon} alt={quizSelected?.title} />
        </div>
        <p
          className={`font-bold text-2xl ${
            darkMode ? "text-white" : "text-dark-theme"
          }`}
        >
          {quizSelected?.title}
        </p>
      </div>

      <div className="flex gap-2">
        <img src={iconSun} alt="Icon Sun" />
        <input
          type="checkbox"
          checked={darkMode}
          onChange={handleChangeDarkMode}
        />
        <img src={iconMoon} alt="Icon Moon" />
      </div>
    </header>
  );
}