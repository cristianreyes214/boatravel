<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE

  $conexion = new mysqli("localhost","root","","boatravel"); // CREA LA CONEXION
  
  // REALIZA LA QUERY A LA DB
  mysqli_query($conexion, "INSERT INTO habitacion(id_habitacion , capacidad_habitacion, checkout, fecha_inicio_habitacion, fecha_fin_habitacion, checkin, array_disponibilidad, descripcion_habitacion, precio_habitacion, estado_habitacion, nit_hotel_H_FK ) VALUES
                  ('$params->idRoom','$params->capacityRoom', '$params->Checkout', '$params->dateStartRoom', '$params->dateEndRoom', '$params->Checkin', '$params->arrayRoom','$params->drescriptionRoom', '$params->priceRoom', '$params->StateRoom', '$params->hotelReference');");    
  
 
?>