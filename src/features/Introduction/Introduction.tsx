function Introduction() {
  return (
    <section className="w-full flex flex-row items-center bg-white pt-44">
      <article className="w-1/2 flex flex-col gap-4 pl-10">
        <h1 className="font-bold text-7xl">Akión Cheng Jiménez</h1>
        <h2 className="text-5xl font-bold">Ingeniero en sistemas</h2>
        <p className=" text-3xl">
          Soy un estudiante de ingeniera en sistemas full stack de la UNA, con
          ansias de poner en practica todos mis conocimientos adquiridos y
          mejorar dia a dia.
        </p>
        <div className="flex gap-6 items-center">
          <button className="shadow-inner shadow-black h-14 p-4 rounded-xl">
            Ver proyectos
          </button>
          <button className="shadow-inner shadow-black h-14 p-4 rounded-xl">
            Contacto
          </button>
        </div>
      </article>

      <div className="w-1/2 flex justify-end pr-10 items-center ">
        <img
          className="w-[30rem] h-[30rem] rounded-full shadow-black shadow-2xl"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1UcBJbr814Itdp-nRfsN3ocVcLWwJG5idw&s"
          alt=""
        />
      </div>
    </section>
  );
}

export default Introduction;
