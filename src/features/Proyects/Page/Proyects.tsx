import ProyectList from "../Assets/ProyectList";
import ProyectCard from "../Components/ProyectCard";

function Proyects() {
  return (
    <main className="flex w-full items-center flex-col gap-10 dark:text-whit dark:bg-darkBG h-full">
      <h1 className="text-7xl font-bold max-sm:text-3xl text-center">Portafolio de proyectos</h1>
      <article className="w-full flex flex-col  gap-10 pb-10 px-32 max-lg:px-10 max-sm:px-5">
        <>
          {ProyectList.map((proyect, index) => (
            <ProyectCard
              key={index}
              Title={proyect.Title}
              Description={proyect.Description}
              Imagen={proyect.Imagen}
              Deploy={proyect.Deploy}
              Tecnologies={proyect.Tecnologies}
            />
          ))}
        </>
      </article>
    </main>
  );
}

export default Proyects;
