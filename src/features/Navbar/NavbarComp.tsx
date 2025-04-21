import { useLocation, useNavigate } from "react-router-dom";
import { useDarkMode } from "../Context/DarkModeContext";
import { useState } from "react";
function NavbarComp() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isPortafolio = location.pathname === "/";
  const isProyects = location.pathname === "/Proyectos";
  const handleNavigationProyects = () => {
    navigate("/Proyectos");
  };

  const handleNavigationPortafolio = () => {
    navigate("/");
  };

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <section
        className="w-full h-20 shadow-md rounded-b-lg dark:bg-darkBG bg-white shadow-black dark:shadow-darkCard flex justify-between pl-6 pr-6 items-center
    fixed top-0 z-10 text-black dark:text-white max-lg:hidden"
      >
        <div className="flex  gap-8">
          {isProyects && (
            <button onClick={handleNavigationPortafolio}>Portafolio</button>
          )}
          {isPortafolio && (
            <>
              <a href="#Introduction">Inicio</a>
              <a href="#Education">Educación</a>
              <a href="#Tecnologies">Técnologias</a>
              <a href="#Experience">Experiencia</a>
              <a href="#Contact">Contactame</a>
              <button onClick={handleNavigationProyects}>
                Portafolio de proyectos
              </button>
              <a href="../../../public/CV_Akion_Cheng_Jimenez_English.pdf" download="CV_Akion.pdf">
                Descagar CV
              </a>
            </>
          )}
        </div>

        <div className="flex  gap-8">
          <button
            onClick={() => window.open("https://github.com/AkionAG7")}
            className="w-12 h-12 rounded-full shadow-inner dark:bg-darkCard shadow-black p-2"
          >
            <img
              className="w-full h-full"
              src={
                darkMode
                  ? "https://cdn-icons-png.flaticon.com/128/10090/10090320.png"
                  : "https://cdn-icons-png.flaticon.com/128/4926/4926625.png"
              }
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
              src={
                darkMode
                  ? "https://cdn-icons-png.flaticon.com/128/10090/10090314.png"
                  : "https://cdn-icons-png.flaticon.com/128/61/61109.png"
              }
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
              src={
                darkMode
                  ? "https://cdn-icons-png.flaticon.com/128/6456/6456199.png"
                  : "https://cdn-icons-png.flaticon.com/128/3946/3946181.png"
              }
              alt="EmailLogo"
            />
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-12 dark:bg-darkCard h-12 rounded-full shadow-md p-2"
          >
            <img
              className="w-full h-full "
              src={
                darkMode
                  ? "https://cdn-icons-png.flaticon.com/128/3590/3590251.png"
                  : "https://cdn-icons-png.flaticon.com/128/2698/2698240.png"
              }
              alt="DiaBoton"
            />
          </button>
        </div>
      </section>

      {/* Version para telefnos */}

      <section className="lg:hidden max-lg:block">
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 "
            onClick={closeSidebar}
          />
        )}

        <div
          className={`fixed top-0 left-0 w-64 h-full bg-white dark:bg-darkBG text-black dark:text-white shadow-lg z-30 transform transition-transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6 flex flex-col items-start gap-4 text-lg">
            <button onClick={closeSidebar} className="self-end text-xl">
              ✖
            </button>
            {isProyects && (
              <button onClick={handleNavigationPortafolio}>Portafolio</button>
            )}
            {isPortafolio && (
              <>
                <button onClick={handleNavigationProyects}>
                  Portafolio de proyectos
                </button>
                <a href="../../../public/CV_Akion_Cheng_Jimenez_English.pdf" download="CV_Akion.pdf">
                  Descagar CV
                </a>
              </>
            )}
          </div>
        </div>

        <section
          className="w-full max-sm:w-full h-20 shadow-md rounded-b-lg dark:bg-darkBG bg-white shadow-black dark:shadow-darkCard flex justify-between px-6 items-center
        fixed top-0 z-10 text-black dark:text-white lg:hidden"
        >
          <button onClick={() => setSidebarOpen(true)}>
            <img
              className="w-8 h-8"
              src="https://cdn-icons-png.flaticon.com/128/1828/1828859.png"
              alt="menu"
            />
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-full dark:bg-darkCard shadow-md p-2"
          >
            <img
              className="w-full h-full"
              src={
                darkMode
                  ? "https://cdn-icons-png.flaticon.com/128/3590/3590251.png"
                  : "https://cdn-icons-png.flaticon.com/128/2698/2698240.png"
              }
              alt="Tema"
            />
          </button>
        </section>
      </section>
    </>
  );
}

export default NavbarComp;
