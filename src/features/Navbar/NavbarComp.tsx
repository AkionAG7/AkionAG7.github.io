import { useEffect, useState } from "react";

function NavbarComp() {
  const [darkMode, serDarkMoode] = useState(
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
    <section
      className="w-full h-20 shadow-md rounded-lg dark:bg-darkBG bg-white shadow-black dark:shadow-darkCard flex justify-between pl-6 pr-6 items-center
    fixed top-0 z-10 "
    >
      <div className="flex  gap-8">
        <h1>Portafolio</h1>
        <a href="#Introduction">Inicio</a>
        <a href="#Education">Educación</a>
        <a href="#Tecnologies">Técnologias</a>
        <a href="#Experience">Experiencia</a>
        <a href="#Contact">Contactame</a>
        <button>Portafolio de proyectos</button>
        <button>Descagar CV</button>
      </div>

      <div className="flex  gap-8">
        <button
          onClick={() => window.open("https://github.com/AkionAG7")}
          className="w-12 h-12 rounded-full shadow-inner dark:bg-darkCard shadow-black p-2"
        >
          <img
            className="w-full h-full"
            src="https://cdn-icons-png.flaticon.com/128/4926/4926625.png"
            alt="GitHubLogo"
          />
        </button>

        <button
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/akion-cheng-jimenez-b3453334a/"
            )
          }
          className="w-12 h-12 rounded-full shadow-inner dark:bg-darkCard shadow-black p-2"
        >
          <img
            className="w-full h-full"
            src="https://cdn-icons-png.flaticon.com/128/61/61109.png"
            alt="LinkeDinLogo"
          />
        </button>

        <button
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=achengjimenezprimaria@gmail.com",
              "_blank"
            )
          }
          className="w-12 h-12 rounded-full shadow-inner shadow-black dark:bg-darkCard p-2"
        >
          <img
            className="w-full h-full"
            src="https://cdn-icons-png.flaticon.com/128/3946/3946181.png"
            alt="EmailLogo"
          />
        </button>

        <button
          onClick={() => serDarkMoode(!darkMode)}
          className="w-12 dark:bg-darkCard h-12 rounded-full shadow-md p-2"
        >
          <img
            className="w-full h-full "
            src="https://cdn-icons-png.flaticon.com/128/2392/2392508.png"
            alt="DiaBoton"
          />
        </button>
      </div>
    </section>
  );
}

export default NavbarComp;
