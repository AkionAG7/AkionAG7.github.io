import { EducationInterface } from "../Assets/EducationInterface";

function EducationCard({ Titulo, Institucion }: EducationInterface) {
  return (
    <article className="w-full flex flex-col justify-between pb-4 bg-white">
      <p className="text-3xl">{Titulo}</p>
      <p className="text-xl">{Institucion}</p>
    </article>
  );
}

export default EducationCard;
