import Contact from "./features/Contact/Page/Contact";
import Experience from "./features/Experience/Page/Experience";
import Introduction from "./features/Introduction/Introduction";
import LanguageAndEduaction from "./features/Language&Education/Page/LanguageAndEduaction";
import NavbarComp from "./features/Navbar/NavbarComp";
import Technologies from "./features/Technologies/Page/Technologies";

function App() {
  return (
    <main className="bg-white dark:bg-darkBG dark:text-white flex flex-col gap-44 items-center w-full">
      <NavbarComp />
      <Introduction />
      <LanguageAndEduaction />
      <Technologies />
      <Experience />
      <Contact />
    </main>
  );
}

export default App;
