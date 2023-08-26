import { useState, createContext, useContext } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [planet, setPlanet] = useState('mercury');
  const [stepIndex, setStepIndex] = useState(1);

  return (
    <StateContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
        planet,
        setPlanet,
        stepIndex,
        setStepIndex,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
