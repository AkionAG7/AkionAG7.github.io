import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// Tipo del contexto
type DarkModeContextType = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

// Creamos el contexto con valor inicial undefined (lo forzamos a usar dentro del provider)
const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

// Props para el proveedor
type DarkModeProviderProps = {
  children: ReactNode;
};

// Provider del contexto
export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Hook personalizado para consumir el contexto
export const useDarkMode = (): DarkModeContextType => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
