<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Methods: PUT, GET, POST");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  $mensage= "";
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE

  $conexion = new mysqli("localhost","root","","boatravel"); // CREA LA CONEXION
  
  // REALIZA LA QUERY A LA DB
  $sql = mysqli_query($conexion, "SELECT * FROM perfil_proveedor where nombre_proveedor_perfil = '$params->userProveedor'and contrasena_proveedor_perfil='$params->passwordProveedor'; ");

 $nr= mysqli_num_rows($sql);

 if($nr == 1){

  $mensage= "exito";

 }else{
  $mensage= "fracaso";
 }
 $myJSON = json_encode($mensage);
 echo $myJSON;

?>