function Gif(props) {
  let contenido;

  if (props.gif == "") {
    contenido = <p>Cargando...</p>;
  } else {
    contenido = props.gif.map((oneGif, i) => {
      return (
        i<8 && (
        <div key={i} className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <img
              className="card-img-top"
              src={oneGif.images.downsized.url}
            />
            <div className="card-body">
              <h4 className="card-title">{oneGif.title}</h4>
            </div>
          </div>
        </div>
      ));
    });
  }

  console.log(contenido);
  return (
    <>
      {contenido}
    </>
  );
}

export default Gif;
