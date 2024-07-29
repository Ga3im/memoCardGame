import { createContext, useState } from "react";

export const EasyModeContext = createContext(null);
export const LeaderBoardContext = createContext(null);

export const EasyModeProvider = ({ children }) => {
  const [easy, setEasy] = useState(false);
  return <EasyModeContext.Provider value={{ easy, setEasy }}>{children}</EasyModeContext.Provider>;
};

export const LeaderBoardProvider = ({children})=>{
  const [liders, setLiders] = useState([]);
  return <LeaderBoardContext.Provider value={{liders, setLiders}}>{children}</LeaderBoardContext.Provider>
}