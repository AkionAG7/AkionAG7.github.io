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
        <button>GItHUB</button>
        <button>Linkding</button>
        <button>Emial</button>
      </div>
    </section>
  );
}

export default NavbarComp;
