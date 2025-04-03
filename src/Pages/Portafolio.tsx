import { useEffect, useState } from "react";
import Contact from "../features/Contact/Page/Contact";
import Experience from "../features/Experience/Page/Experience";
import Introduction from "../features/Introduction/Introduction";
import LanguageAndEduaction from "../features/Language&Education/Page/LanguageAndEduaction";
import NavbarComp from "../features/Navbar/NavbarComp";
import Technologies from "../features/Technologies/Page/Technologies";

function Portafolio() {
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
      <NavbarComp darkMode={darkMode} setDarkMode={setDarkMoode} />
      <Introduction />
      <LanguageAndEduaction />
      <Technologies />
      <Experience />
      <Contact darkMode={darkMode} />
    </main>
  );
}

export default Portafolio;
