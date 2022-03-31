function GifRandom(props) {
    console.log(props.randomGif)
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100" style={{ border: "red 3px solid" }}>
        {/*Un borde rojo para diferenciarlo */}
        <img
          className="card-img-top"
          src={props.randomGif.url}
        />
        <div className="card-body">
          <h4 className="card-title">{props.randomGif.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default GifRandom;
