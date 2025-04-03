import ProyectCard from "../Components/ProyectCard";

function Proyects() {
  return (
    <section className="flex w-full items-center flex-col gap-10 dark:text-white ">
      <h1 className="text-7xl font-bold">Portafolio de proyectos</h1>
      <article className="w-full px-32">
      <ProyectCard />
      </article>
    </section>
  );
}

export default Proyects;
