<?php include 'includes/header.php';

    class MenuRestaurant {
        public $nombre = 'Nombre del Producto';
        public $precio = 0;

        public function getNombre() {
            return $this->nombre;
        }

        public function getPrecio() {
            return $this->precio;
        }
    }

$bebida = new MenuRestaurant();
$bebida->nombre = "Jugo de naranja";
$bebida->precio = 30;
echo $bebida->getNombre();//Jugo de naranja
echo "<br>";
echo $bebida->getprecio();// 100