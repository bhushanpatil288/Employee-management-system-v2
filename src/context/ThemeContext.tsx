import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({children}) =>{
  const [isDark, setIsDark] = useState(false);
  useEffect(()=>{
     const root = document.documentElement
     isDark ? root.classList.add("dark") : root.classList.remove("dark");
  },[isDark])
  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      {children}
    </ThemeContext.Provider>
  )
} 

export const useTheme = () => useContext(ThemeContext);