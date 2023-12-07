export const getQuizBackgroundClass = (title: string | undefined) => {
    const classMap: Record<string, string> = {
      html: "bg-html",
      css: "bg-css",
      javascript: "bg-js",
      accessibility: "bg-accessibility",
    };
  
    return title && classMap[title.toLowerCase()];
  };
  