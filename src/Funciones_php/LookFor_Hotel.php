<?php 
    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    
    $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
   
    $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
    $conexion = new mysqli("localhost","root","","boatravel"); // CREA LA CONEXION
    
    // REALIZA LA QUERY A LA DB
    $sql =  "SELECT * FROM hotel WHERE hotel.ubicacion_hotel = '$params->place';";
      $result = $conexion->query($sql);
      $myArr = array();
      if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
      $myArr[] = $row;
      }
      } else {
      echo "0 results";
      }
      $myJSON = json_encode($myArr);
      echo $myJSON;
  
  // REALIZA LA QUERY A LA DB
 
  
 
?>