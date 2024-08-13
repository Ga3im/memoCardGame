import { createContext, useState } from "react";

export const EasyModeContext = createContext(null);

export const EasyModeProvider = ({ children }) => {
  const [easy, setEasy] = useState(false);
  let [superGame, setSuperGame] = useState(1);
  let [alahomora, setAlahomora] = useState(2);
  return <EasyModeContext.Provider value={{ easy, setEasy, superGame, alahomora, setAlahomora, setSuperGame }}>{children}</EasyModeContext.Provider>;
};

