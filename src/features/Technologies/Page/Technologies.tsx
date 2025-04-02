import { useState } from "react";
import Tecnologies from "../Assets/Tecnologies";
import TecnoCard from "../Components/TecnoCard";

function Technologies() {
  const [Index, setIndex] = useState(0);
  const itemsPerPage = 6;

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
    <section className="bg-white w-full flex flex-col items-center gap-6 ">
      <h1 className="text-7xl font-bold">Tecnologías</h1>
      <p className="text-2xl">Algunas tecnologias que domino</p>

      <article className="w-full flex ">
        

        <div className="flex justify-center bg-white w-full gap-5 px-12">
          <button>
            <img
              className="hover:cursor-pointer p-4 rounded-full shadow-lg shadow-black"
              onClick={prev}
              src="https://cdn-icons-png.flaticon.com/128/271/271220.png"
              alt="prev"
            />
          </button>

          <div className="bg-white shadow-inner shadow-black rounded-lg  w-full">
            <div className=" grid grid-cols-3 gap-20 p-10">
              {Tecnologies.slice(Index, Index + itemsPerPage).map((tecno) => (
                <TecnoCard
                  key={tecno.Name}
                  Name={tecno.Name}
                  Icon={tecno.Icon}
                />
              ))}
            </div>
          </div>
          <button>
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
