import { TecnoInterface } from "../Assets/TecnoInterface";

function TecnoCard({ Name, Icon }: TecnoInterface) {
  return (
    <article className="flex flex-col items-center gap-4 ">
      <figure className="flex flex-col items-center gap-2">
        <div className="bg-darkBg shadow-md shadow-black p-4 rounded-full ">
          <img className=" w-24 h-24 rounded-2xl max-sm:w-10 max-sm:h-10 p-1" src={Icon} alt={Name} />
        </div>

        <figcaption className="text-darkText">
          <p className="text-xl max-sm:text-base">{Name}</p>
        </figcaption>
      </figure>
    </article>
  );
}

export default TecnoCard;
