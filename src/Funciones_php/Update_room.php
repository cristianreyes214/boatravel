<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE

  $conexion = new mysqli("localhost","root","","boatravel"); // CREA LA CONEXION
  
  // REALIZA LA QUERY A LA DB
  mysqli_query($conexion, "UPDATE habitacion SET  capacidad_habitacion ='$params->capacityRoom', checkout ='$params->Checkout', fecha_inicio_habitacion ='$params->dateStartRoom', fecha_fin_habitacion ='$params->dateEndRoom', checkin ='$params->Checkin', array_disponibilidad ='$params->arrayRoom',descripcion_habitacion ='$params->drescriptionRoom', precio_habitacion ='$params->priceRoom', estado_habitacion ='$params->StateRoom', nit_hotel_H_FK ='$params->hotelReference' WHERE `habitacion`.`id_habitacion` ='$params->idRoom';");    
  
 
?>