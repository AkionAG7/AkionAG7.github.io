
import Contact from "../features/Contact/Page/Contact";
import Experience from "../features/Experience/Page/Experience";
import Introduction from "../features/Introduction/Introduction";
import LanguageAndEduaction from "../features/Language&Education/Page/LanguageAndEduaction";

import Technologies from "../features/Technologies/Page/Technologies";


function Portafolio() {
  return (
    <main className="bg-white dark:bg-darkBG dark:text-white flex flex-col max-sm:gap-20 max-lg:w-full max-sm:w-full gap-44 items-center w-full">
     
      <Introduction />
      <LanguageAndEduaction />
      <Technologies />
      <Experience />
      <Contact  />
    </main>
  );
}

export default Portafolio;
