import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FotoGraduacion from "../../assets/FotoGraduacion.jpg";
import Graduacion from "../../assets/Graduacion.png";
function Introduction() {
  const navigate = useNavigate();
  const [hovered, setHoverd] = useState(false);
  return (
    <section
      id="Introduction"
      className="w-full flex max-sm:flex-col-reverse flex-row items-center dark:bg-darkBG bg-white pt-44"
    >
      <article className="w-1/2 flex flex-col max-sm:w-full max-sm:text-center max-sm:px-4  gap-4 pl-10">
        <h1 className="font-bold text-7xl max-sm:text-3xl max-lg:text-4xl">
          Akión Cheng Jiménez
        </h1>
        <h2 className="text-5xl font-bold max-sm:text-3xl max-lg:text-4xl">
          Ingeniero en sistemas
        </h2>
        <p className=" text-3xl max-sm:text-2xl max-lg:text-2xl">
          Soy un estudiante de ingeniera en sistemas full stack de la UNA, con
          ansias de poner en practica todos mis conocimientos adquiridos y
          mejorar dia a dia.
        </p>
        <div className="flex gap-6 pt-10 items-center max-sm:justify-center ">
          <button
            onClick={() => navigate("/Proyectos")}
            className="shadow-inner dark:bg-darkCard bg-lightCArd shadow-black w-44 h-14 max-sm:w-32
            max-sm:text-sm p-4  rounded-xl"
          >
            Ver proyectos
          </button>
          <a
            href="#Contact"
            className="shadow-inner dark:bg-darkCard bg-lightCArd flex justify-center shadow-black w-44 h-14 p-4
             max-sm:w-32 max-sm:text-sm rounded-xl"
          >
            Contacto
          </a>
        </div>
      </article>

      <div className="w-1/2 max-sm:w-full flex justify-end pr-10 items-center max-sm:justify-center max-sm:pr-0 max-sm:pb-10 ">
        <img
          className="w-[30rem] h-[30rem] max-sm:w-[20rem] max-sm:h-[20rem] rounded-full shadow-black shadow-2xl"
          src={hovered ? Graduacion : FotoGraduacion}
          alt="PerfilImage"
          onMouseEnter={() => setHoverd(true)}
          onMouseLeave={() => setHoverd(false)}
        />
      </div>
    </section>
  );
}

export default Introduction;
