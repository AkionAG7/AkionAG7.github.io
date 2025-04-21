function Experience() {
  return (
    <section
      id="Experience"
      className="flex flex-col gap-6 w-full items-center"
    >
      <h1 className="text-7xl font-bold max-sm:text-4xl">
        Experiencia laboral
      </h1>
      <h2 className="text-4xl max-sm:text-base">
        Proyectos en el ambito laboral
      </h2>

      <div className="w-full px-10">
        <article className="flex flex-col gap-4 rounded-lg h-full shadow-inner shadow-black p-4 dark:bg-darkCard bg-lightCArd w-full">
          <h1 className="text-4xl max-sm:text-2xl font-bold">
            Full stack developer
          </h1>
          <h2 className="text-2xl max-sm:text-xl">
            Institución: Biblioteca Pública Municipal de Nicoya
          </h2>
          <p className="text-2xl max-sm:text-xl">
            Descripción: Desarrollo de un sistema de gestion de inventario,
            préstamo de activos,voluntariado, historial y estadisticas
          </p>
          <span className="text-2xl max-sm:text-xl">
            Tiempo laborado: 2024-2025
          </span>
          <p className="text-2xl max-sm:text-xl">Tecnologías: </p>
          <div className="flex gap-5 text-2xl max-sm:text-xl max-sm:grid max-sm:grid-cols-2">
            <span>React</span>
            <span>NestJs</span>
            <span>TailWind</span>
            <span>MySQL</span>
            <span>FlowBite</span>
            <span>Docker</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Experience;
