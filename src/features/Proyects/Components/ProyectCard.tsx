import { ProyectInterface } from "../Assets/ProyectInterface";

function ProyectCard({
  Title,
  Description,
  Imagen,
  Deploy,
  Tecnologies,
}: ProyectInterface) {
  return (
    <article className="w-full  ">
      <figure className="w-full max-sm:flex-col max-sm:h-full h-min-[30rem] lg:h-[30rem] max-md:h-full p-2 shadow-inner shadow-black bg-lightCArd dark:bg-darkCard flex gap-4">
        <div className="w-1/2 max-sm:w-full flex max-sm:flex-col  items-center">
          <img className="w-full h-full max-sm:h-44" src={Imagen} alt="" />
        </div>
        <figcaption className="flex flex-col w-1/2 justify-between items-start max-md:w-full  max-sm:gap-8 py-5">
          <p className="flex flex-col gap-5">
            <h1 className="text-3xl"> {Title}</h1>
            <p className="text-xl"> Descripcion: {Description}</p>
            <p className="text-xl"> tecnologias : {"   "} {
              Tecnologies.map((tech, index) => (
                <span className="mr-4"> {tech}</span>
              ))}</p>
          </p>

          <button
            onClick={() => window.open(Deploy)}
            className=" text-4xl max-sm:text-xl shadow-inner   shadow-black max-sm:w-32 w-64 h-14 rounded-2xl"
          >
            ver proyecto
          </button>
        </figcaption>
      </figure>
    </article>
  );
}

export default ProyectCard;
