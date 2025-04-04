import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Introduction() {
  const navigate = useNavigate();
  const [hovered, setHoverd] = useState(false);
  return (
    <section
      id="Introduction"
      className="w-full flex flex-row items-center dark:bg-darkBG bg-white pt-44"
    >
      <article className="w-1/2 flex flex-col gap-4 pl-10">
        <h1 className="font-bold text-7xl">Akión Cheng Jiménez</h1>
        <h2 className="text-5xl font-bold">Ingeniero en sistemas</h2>
        <p className=" text-3xl">
          Soy un estudiante de ingeniera en sistemas full stack de la UNA, con
          ansias de poner en practica todos mis conocimientos adquiridos y
          mejorar dia a dia.
        </p>
        <div className="flex gap-6 pt-10 items-center">
          <button
            onClick={() => navigate("/Proyectos")}
            className="shadow-inner dark:bg-darkCard bg-lightCArd shadow-black w-44 h-14 p-4 rounded-xl"
          >
            Ver proyectos
          </button>
          <a
            href="#Contact"
            className="shadow-inner dark:bg-darkCard bg-lightCArd flex justify-center shadow-black w-44 h-14 p-4 rounded-xl"
          >
            Contacto
          </a>
        </div>
      </article>

      <div className="w-1/2 flex justify-end pr-10 items-center ">
        <img
          className="w-[30rem] h-[30rem] rounded-full shadow-black shadow-2xl"
          src={
            hovered
              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1UcBJbr814Itdp-nRfsN3ocVcLWwJG5idw&s"
              : "https://i.pinimg.com/736x/53/f4/f8/53f4f85e0e8d5599b20399b3eb6cac77.jpg"
          }
          alt="PerfilImage"
          onMouseEnter={() => setHoverd(true)}
          onMouseLeave={() => setHoverd(false)}
        />
      </div>
    </section>
  );
}

export default Introduction;
