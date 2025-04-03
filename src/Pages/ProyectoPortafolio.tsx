import { useEffect, useState } from "react";

function ProyectoPortafolio() {
  const [darkMode, setDarkMoode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <main className="bg-white dark:bg-darkBG dark:text-white flex flex-col gap-44 items-center w-full">
        
    </main>
  );
}

export default ProyectoPortafolio;
