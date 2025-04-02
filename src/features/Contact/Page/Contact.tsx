function Contact() {
  return (
    <section className="flex flex-col gap-6 w-full items-center pb-20">
      <h1 className="text-7xl font-bold">Contacto</h1>
      <h2 className="text-4xl">¿Interesado? Contáctame para trabajar juntos</h2>

      <div className="px-10 w-full">
        <article className="flex-col flex items-center justify-center bg-white w-full h-80 rounded-lg shadow-inner shadow-black gap-10">
          <div className="flex gap-36">
            <button className="w-48 h-48 rounded-lg shadow-inner flex items-center justify-center  shadow-black p-2">
              <img
                className="w-40 h-40"
                src="https://cdn-icons-png.flaticon.com/128/4926/4926625.png"
                alt="GitHubLogo"
              />
            </button>

            <button className="w-48 h-48 rounded-lg flex items-center justify-center shadow-inner shadow-black p-2">
              <img
                className="w-40 h-40"
                src="https://cdn-icons-png.flaticon.com/128/61/61109.png"
                alt="LinkeDinLogo"
              />
            </button>

            <button className="w-48 h-48 rounded-lg shadow-inner flex items-center justify-center  shadow-black p-2">
              <img
                className="w-40 h-40"
                src="https://cdn-icons-png.flaticon.com/128/11121/11121097.png"
                alt="WhatsappLogo"
              />
            </button>
          </div>

          <p className="text-4xl">
            O enviame un correo:{" "}
            <strong>achengjimenezprimaria@gmail.com</strong>
          </p>
        </article>
      </div>
    </section>
  );
}

export default Contact;
