function NavbarComp() {
  return (
    <section
      className="w-full h-20 shadow-md rounded-lg bg-white shadow-black flex justify-between pl-6 pr-6 items-center
    fixed top-0 z-10"
    >
      <div className="flex  gap-8">
        <h1>Portafolio</h1>
        <button>Inicio</button>
        <button>Educación</button>
        <button>Técnologias</button>
        <button>Experiencia</button>
        <button>Portafolio de proyectos</button>
        <button>Descagar CV</button>
      </div>

      <div className="flex  gap-8">
        <button className="w-12 h-12 rounded-full shadow-inner shadow-black p-2">
          <img
            className="w-full h-full"
            src="https://cdn-icons-png.flaticon.com/128/4926/4926625.png"
            alt="GitHubLogo"
          />
        </button>

        <button className="w-12 h-12 rounded-full shadow-inner shadow-black p-2">
          <img
            className="w-full h-full"
            src="https://cdn-icons-png.flaticon.com/128/61/61109.png"
            alt="LinkeDinLogo"
          />
        </button>

        <button className="w-12 h-12 rounded-full shadow-inner shadow-black p-2">
          <img
            className="w-full h-full"
            src="https://cdn-icons-png.flaticon.com/128/3946/3946181.png"
            alt="EmailLogo"
          />
        </button>

        <button className="w-12 h-12 rounded-full shadow-md p-2">
          <img
            className="w-full h-full"
            src="https://cdn-icons-png.flaticon.com/128/2392/2392508.png"
            alt="DiaBoton"
          />
        </button>
      </div>
    </section>
  );
}

export default NavbarComp;
