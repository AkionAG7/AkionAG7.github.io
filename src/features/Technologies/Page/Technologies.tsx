import { useEffect, useState } from "react";
import Tecnologies from "../Assets/Tecnologies";
import TecnoCard from "../Components/TecnoCard";

function Technologies() {
  const [Index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 640) {
        setItemsPerPage(4); // Mostrar 4 en pantallas pequeñas
      } else {
        setItemsPerPage(6); // Mostrar 6 en pantallas más grandes
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const next = () => {
    if (Index + itemsPerPage < Tecnologies.length) {
      setIndex(Index + itemsPerPage);
    }
  };

  const prev = () => {
    if (Index - itemsPerPage >= 0) {
      setIndex(Index - itemsPerPage);
    }
  };

  return (
    <section
      id="Tecnologies"
      className="bg-white dark:bg-darkBG w-full flex flex-col items-center gap-6 "
    >
      <h1 className="text-7xl font-bold max-sm:text-4xl">Tecnologías</h1>
      <p className="text-2xl max-sm:text-base">
        Algunas tecnologias que domino
      </p>

      <article className="w-full flex ">
        <div className="flex justify-center bg-white dark:bg-darkBG w-full gap-5 max-sm:px-2 px-12">
          <button className="max-sm:w-16 max-lg:w-32">
            <img
              className="hover:cursor-pointer p-4 rounded-full shadow-lg shadow-black"
              onClick={prev}
              src="https://cdn-icons-png.flaticon.com/128/271/271220.png"
              alt="prev"
            />
          </button>

          <div
            className="bg-lightCArd shadow-inner dark:bg-darkCard shadow-black rounded-lg w-full
          "
          >
            <div className=" grid grid-cols-3 max-sm:grid-cols-2 max-sm:gap-4 gap-20 p-10 max-lg:gap-4  ">
              {Tecnologies.slice(Index, Index + itemsPerPage).map((tecno) => (
                <TecnoCard
                  key={tecno.Name}
                  Name={tecno.Name}
                  Icon={tecno.Icon}
                />
              ))}
            </div>
          </div>

          <button className="max-sm:w-16 max-lg:w-32">
            <img
              className="hover:cursor-pointer bg-darkFirstCard p-4 rounded-full shadow-lg shadow-black"
              onClick={next}
              src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
              alt="next"
            />
          </button>
        </div>
      </article>
    </section>
  );
}

export default Technologies;
