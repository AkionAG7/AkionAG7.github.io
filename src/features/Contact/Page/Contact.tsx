import { useDarkMode } from "../../Context/DarkModeContext";

function Contact() {
  const { darkMode } = useDarkMode();
  return (
    <section
      id="Contact"
      className="flex flex-col gap-6 w-full items-center pb-20"
    >
      <h1 className="text-7xl font-bold max-sm:text-4xl">Contacto</h1>
      <h2 className="text-4xl max-sm:text-base text-center">
        ¿Interesado? Contáctame para trabajar juntos
      </h2>

      <div className="px-10 max-lg:h-full w-full">
        <article className="flex-col max-lg:h-full max-lg:pt-4 max-lg:pb-4 flex items-center justify-center max-sm:p-0 bg-lightCArd dark:bg-darkCard w-full h-80 max-sm:h-full rounded-lg shadow-inner shadow-black gap-10">
          <div className="flex  max-sm:gap-10 gap-36 max-lg:gap-16 max-sm:pt-10">
            <button
              onClick={() => window.open("https://github.com/AkionAG7")}
              className="w-48 h-48 max-sm:w-16 max-sm:h-16 max-lg:w-32 max-lg:h-32 rounded-lg shadow-inner flex items-center justify-center 
              bg-lightCArd dark:bg-darkCard shadow-black p-2"
            >
              <img
                className="w-40 h-40 max-sm:w-10 max-sm:h-10 max-lg:w-24 max-lg:h-24 "
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
              className="w-48 h-48 max-sm:w-16 max-sm:h-16 max-lg:w-32 max-lg:h-32 rounded-lg flex items-center justify-center shadow-inner
              bg-lightCArd dark:bg-darkCard shadow-black p-2"
            >
              <img
                className="w-40 h-40 max-sm:w-10 max-sm:h-10 max-lg:w-28 max-lg:h-28"
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
                  "https://wa.me/50683541298?text=Hola,%20me%20interesaría%20trabajar%20contigo"
                )
              }
              className="w-48 h-48 max-sm:w-16 max-sm:h-16 max-lg:w-32 max-lg:h-32 rounded-lg shadow-inner flex items-center justify-center
              bg-lightCArd dark:bg-darkCard shadow-black p-2"
            >
              <img
                className="w-40 h-40 max-sm:w-10 max-sm:h-10 max-lg:w-28 max-lg:h-28"
                src={
                  darkMode
                    ? "https://cdn-icons-png.flaticon.com/128/10090/10090303.png"
                    : "https://cdn-icons-png.flaticon.com/128/11121/11121097.png"
                }
                alt="WhatsappLogo"
              />
            </button>
          </div>

          <p className="text-4xl max-sm:text-base text-center max-sm:py-6 max-lg:text-2xl">
            O enviame un correo:{" "}
            <strong
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=achengjimenezprimaria@gmail.com",
                  "_blank"
                )
              }
              className="cursor-pointer hover:text-blue-300 underline"
            >
              achengjimenezprimaria@gmail.com
            </strong>
          </p>
        </article>
      </div>
    </section>
  );
}

export default Contact;
