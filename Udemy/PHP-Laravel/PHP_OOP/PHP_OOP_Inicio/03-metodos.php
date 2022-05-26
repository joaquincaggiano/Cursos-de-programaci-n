<?php include 'includes/header.php';

class MenuRestaurant {
    public $nombre = 'Nombre del Producto';
    public $precio = 0;

    public function obtenerProductoyNombre () {
        echo "El producto ".$this->nombre." tiene un precio de ".$this->precio;
    }
}


// Instanciar una clase
$bebida = new MenuRestaurant();
$bebida->nombre = "Jugo de naranja";
$bebida->precio = 100;
$bebida->obtenerProductoyNombre();

echo "<br/>";

$postre = new MenuRestaurant();
$postre->nombre = "Tiramisú";
$postre->precio = 500;
$postre->obtenerProductoyNombre();
