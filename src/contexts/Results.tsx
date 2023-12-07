import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MyContextProps {
  showResults: boolean;
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MyContextProviderProps {
  children: ReactNode;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

export const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [showResults, setShowResults] = useState<boolean>(false);

  const contextValue = {
    showResults,
    setShowResults,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error('useSeuContexto deve ser usado dentro de um SeuContextoProvider');
  }

  return context;
};
