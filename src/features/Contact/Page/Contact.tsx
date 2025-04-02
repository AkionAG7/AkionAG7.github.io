function Contact() {
  return (
    <section
      id="Contact"
      className="flex flex-col gap-6 w-full items-center pb-20"
    >
      <h1 className="text-7xl font-bold">Contacto</h1>
      <h2 className="text-4xl">¿Interesado? Contáctame para trabajar juntos</h2>

      <div className="px-10 w-full">
        <article className="flex-col flex items-center justify-center bg-lightCArd dark:bg-darkCard w-full h-80 rounded-lg shadow-inner shadow-black gap-10">
          <div className="flex gap-36">
            <button
              onClick={() => window.open("https://github.com/AkionAG7")}
              className="w-48 h-48 rounded-lg shadow-inner flex items-center justify-center 
              bg-lightCArd dark:bg-darkCard shadow-black p-2"
            >
              <img
                className="w-40 h-40"
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
              className="w-48 h-48 rounded-lg flex items-center justify-center shadow-inner
              bg-lightCArd dark:bg-darkCard shadow-black p-2"
            >
              <img
                className="w-40 h-40"
                src="https://cdn-icons-png.flaticon.com/128/61/61109.png"
                alt="LinkeDinLogo"
              />
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://wa.me/50683541298?text=Hola,%20me%20interesaría%20trabajar%20contigo"
                )
              }
              className="w-48 h-48 rounded-lg shadow-inner flex items-center justify-center
              bg-lightCArd dark:bg-darkCard shadow-black p-2"
            >
              <img
                className="w-40 h-40"
                src="https://cdn-icons-png.flaticon.com/128/11121/11121097.png"
                alt="WhatsappLogo"
              />
            </button>
          </div>

          <p className="text-4xl">
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
