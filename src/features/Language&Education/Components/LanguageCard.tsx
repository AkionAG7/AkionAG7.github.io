import { LanguageInterface } from "../Assets/LanguageInterface";

function LanguageCard({ Language, Grade }: LanguageInterface) {
  return (
    <article className="w-full flex flex-row justify-between pb-4 dark:bg-darkCard bg-lightCArd">
      <p className="text-3xl">{Language}</p>
      <p className="text-xl">{Grade}</p>
    </article>
  );
}

export default LanguageCard;
