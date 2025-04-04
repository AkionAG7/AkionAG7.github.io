import { ProyectInterface } from "../Assets/ProyectInterface";

function ProyectCard({
  Title,
  Description,
  Imagen,
  Deploy,
  Tecnologies,
}: ProyectInterface) {
  return (
    <article className="w-full ">
      <figure className="w-full h-[21rem] p-2 shadow-inner shadow-black bg-lightCArd dark:bg-darkCard flex gap-4">
        <div className="w-1/2 flex  items-center">
          <img className="w-full h-80" src={Imagen} alt="" />
        </div>
        <figcaption className="flex flex-col justify-between items-start py-5">
          <p className="flex flex-col gap-5">
            <h1 className="text-3xl"> {Title}</h1>
            <p className="text-xl"> Descripcion: {Description}</p>
            <p className="text-xl"> tecnologias : {Tecnologies}</p>
          </p>

          <button
            onClick={() => window.open(Deploy)}
            className=" text-4xl  shadow-inner  shadow-black w-64 h-14 rounded-2xl"
          >
            ver proyecto
          </button>
        </figcaption>
      </figure>
    </article>
  );
}

export default ProyectCard;
