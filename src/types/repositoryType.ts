    export interface Question {
    question: string;
    options: string[];
    answer: string;
  }
  
  export interface Quiz {
    title: string;
    icon: string;
    questions: Question[];
  }
  
  export interface Repository {
    quizzes: Quiz[];
  }
  
  export default Repository;
  