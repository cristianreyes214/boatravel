<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR

  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE

  $conexion = new mysqli("localhost",
    "root",
    "",
    "boatravel");

  // REALIZA LA QUERY A LA DB
  mysqli_query($conexion, "DELETE FROM habitacion WHERE id_habitacion = $params;");

?>
