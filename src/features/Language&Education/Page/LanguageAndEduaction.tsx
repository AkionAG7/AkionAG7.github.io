import LanguageCard from "../Components/LanguageCard";
import { LanguageInfo } from "../Assets/LanguageInfo";
import { EducationInfo } from "../Assets/EducationInfo";
import EducationCard from "../Components/EducationCard";

function LanguageAndEduaction() {
  return (
    <section
      id="Education"
      className="bg-white dark:bg-darkBG flex flex-col gap-10 items-center w-full"
    >
      <h1 className="text-7xl font-bold ">Idiomas y Educación</h1>
      <p className="text-3xl">
        Mi información académica en el habito profecional
      </p>

      <article className="flex gap-10 bg-white dark:bg-darkBG w-full p-10 ">
        <div className="w-1/2 bg-lightCArd dark:bg-darkCard p-4 shadow-inner shadow-black rounded-xl">
          <h1 className="text-4xl font-bold">Idiomas</h1>
          {LanguageInfo.map((idioma) => (
            <LanguageCard
              key={idioma.Language}
              Language={idioma.Language}
              Grade={idioma.Grade}
            />
          ))}
        </div>

        <div className="w-1/2 bg-lightCArd dark:bg-darkCard p-4 shadow-inner shadow-black rounded-xl">
          <h1 className="text-4xl font-bold">Eduacion</h1>
          {EducationInfo.map((educacion) => (
            <EducationCard
              key={educacion.Titulo}
              Titulo={educacion.Titulo}
              Institucion={educacion.Institucion}
            />
          ))}
        </div>
      </article>
    </section>
  );
}

export default LanguageAndEduaction;
