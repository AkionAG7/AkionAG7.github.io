function ProyectCard() {
  return (
    <article className="w-full ">
      <figure className="w-full h-[21rem] p-2 shadow-inner shadow-black bg-lightCArd dark:bg-darkCard flex gap-4">
        <div className="w-1/2 flex  items-center">
          <img
            className="w-full h-80"
            src="https://media.licdn.com/dms/image/v2/C4D12AQG5t8UQMGLxCw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1524231107344?e=2147483647&v=beta&t=GZfotQxIWAPjw6klFJT8HB9Wx5Y6eeDLqTysbvipl04"
            alt=""
          />
        </div>
        <figcaption>
          <h1 className="text-3xl"> Titulo : tal tal tal tal</h1>
          <p className="text-xl"> Descripcion: asdadadasa</p>
          <p className="text-xl"> tecnologias</p>

          <button>ver proyecto</button>
        </figcaption>
      </figure>
    </article>
  );
}

export default ProyectCard;
