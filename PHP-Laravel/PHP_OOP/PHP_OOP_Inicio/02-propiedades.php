<?php include 'includes/header.php';

class MenuRestaurant {   
    public $nombre = "";
    public $precio = 0;
}

$bebida = new MenuRestaurant();
$bebida->nombre = "Jugo de naranja"; //sintaxis de asignar un valor
$bebida->precio = 30;

echo $bebida->nombre."<br/>"; //sintaxis para mostrar un valor
var_dump($bebida);
// Jugo de naranja
// object(MenuRestaurant)#1 (2) {
//     ["nombre"]=>
//     string(15) "Jugo de naranja"
//     ["precio"]=>
//     int(30)
//   }

$postre = new MenuRestaurant();
$postre->nombre = "Helado";
$postre->precio = 100;
var_dump($postre);