import MainBoxes from "./MainBoxes";
import LastMovieInDatabase from "./LastMovieInDatabase";
import GenresInDb from "./GenresInDb";

function ContentRowTop() {
  const genresList = [
    "Acción",
    "Animación",
    "Aventura",
    "Ciencia Ficción",
    "Comedia",
    "Documental",
    "Drama",
    "Fantasia",
    "Infantiles",
    "Musical"
  ]
  return (
    // <!-- Content Row Top -->
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>

      <MainBoxes />

      <div className="row">
        <LastMovieInDatabase />
        <GenresInDb genresList={genresList} />
      </div>
    </div>
    /* <!--End Content Row Top--> */
  );
}

export default ContentRowTop;
