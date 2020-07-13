<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
   // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = new mysqli("localhost","root","","boatravel"); // CREA LA CONEXION
  
  // REALIZA LA QUERY A LA DB
  mysqli_query($conexion, "UPDATE hotel SET  matricula_hotel  ='$params->idHotel', nombre_hotel	='$params->nameHotel', ubicacion_hotel= '$params->locationHotel', telefono1_hotel='$params->telHotel', telefono2_hotel='$params->tel2', descripcion_hotel='$params->descHotel', direccion_hotel='$params->addressHotel' WHERE matricula_hotel ='$params->idHotel';");    
  
  class Result {}

  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'SE REGISTRO EXITOSAMENTE EL USUARIO';

  header('Content-Type: application/json');

  echo json_encode($response); // MUESTRA EL JSON GENERADO
?>