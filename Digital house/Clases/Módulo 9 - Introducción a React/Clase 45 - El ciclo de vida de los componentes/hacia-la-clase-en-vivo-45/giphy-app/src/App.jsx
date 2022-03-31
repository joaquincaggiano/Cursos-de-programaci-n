import React, { Component } from "react";
import Gif from "./components/Gif";
import NavBar from "./components/NavBar";
import GifRandom from "./components/GifRandom";
import "./css/app.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gif: "", //recibe un array de objetos gifs
      randomGif: {}, //recibe un gif en formato objeto
      randomReady: false, //Se usa para verificar cuando mostrar el gif random. Es set en mostrarRandomGif
    };
  }
  //Funcion para llamar a la API, recibe la url y un callback que setea el state
  apiCall(url, handle) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => handle(data))
      .catch((e) => {
        console.log(e);
      });
  }
  //Llama a la funcion apiCall y le da los parametros
  traerGifNuevo() {
    this.apiCall(
      "https://api.giphy.com/v1/gifs/trending?api_key=EQhHUSi12J1vIQQ7qyIE72l5K5wkvf9V",
      this.mostrarGif
    );
  }
  //Es el handler, el callback que genera el setState
  mostrarGif = (data) => {
    this.setState({ gif: data.data });
  };
  //Montaje del componente, llama al método que ejecuta la apiCall
  componentDidMount() {
    this.traerGifNuevo();
  }
  componentDidUpdate() {}
  //Funcion que se ejecuta al presionar el boton de RandomGif
  mostrarRandomGif = () => {
    this.apiCall(
      "https://api.giphy.com/v1/gifs/random?api_key=F33mpVK2IB05XXqzCIQUxVLlrKiX8MB9&tag=&rating=g",
      (data) => {
        this.setState({
          randomGif: {
            url: data.data.images.downsized.url,
            title: data.data.title
          },
          randomReady: true
        });
      }
    );
    // let traerGifs = this.state.gif; //trae el array de gifs
    // let n = Math.floor(Math.random() * traerGifs.length); //genera un numero random de 0 al array.length
    // this.setState({ randomGif: traerGifs[n] }); //setea un objeto
    // this.setState({ randomReady: true }); //setea el state en true
  };
  render() {
    return (
      <>
        {/* NAVBAR - Si existe el array de gifs, renders el navbar. 
      Se pasa el método mostrarRandomGif para ejecutar en onClick del component*/}
        {this.state.gif.length && (
          <NavBar mostrarRandomGif={this.mostrarRandomGif} />
        )}
        <div className="container">
          <div className="row text-center">
            {/* RANDOM GIF - Si el state randomReady es true, renders el randomGif */}
            {this.state.randomReady && (
              <GifRandom randomGif={this.state.randomGif} />
            )}
            {/* Renders del componente GIF */}
            <Gif gif={this.state.gif} />
          </div>
        </div>
      </>
    );
  }
}
export default App;
