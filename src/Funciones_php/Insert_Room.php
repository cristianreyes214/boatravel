<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  $conexion = new mysqli("localhost","root","","boatravel"); // CREA LA CONEXION

  //Directorio donde se guardarán las imagenes.
  $path = '../assets/Hotel/Rooms/';

  //Función para Extraer dirección de la imagen y para ubicar la imagen
  if (isset($_FILES['file'])) {
    $originalName = $_FILES['file']['name'];
    $ext = '.'.pathinfo($originalName, PATHINFO_EXTENSION);
  // $generatedName = md5($_FILES['file']['tmp_name']).$ext;
    $filePath = $path.$originalName;

      if (move_uploaded_file($_FILES['file']['tmp_name'], $filePath)) {
          $sqlVal = "('".$originalName."')";
          echo json_encode(array(
                'status' => true,
                'generatedName' => $originalName
          ));
      } else{
          echo json_encode(array(
              'status' => false,
              'generatedName' => $originalName
          ));
      }
  }

  //Función para insertar el hotel a SQL.
  if(isset($_POST['nameRoom'])){
    $sqlVal = $_FILES['file']['name'];
    $nameRoom = $_POST['nameRoom'];
    $capacidad_habitacion = $_POST['capacityRoom'];
    $checkout = $_POST['Checkout'];
    $fecha_inicio_habitacion = $_POST['dateStartRoom'];
    $fecha_fin_habitacion = $_POST['dateEndRoom'];
    $checkin = $_POST['Checkin'];
    $array_disponibilidad = $_POST['arrayRoom'];
    $descripcion_habitacion = $_POST['drescriptionRoom'];
    $precio_habitacion = $_POST['priceRoom'];
    $estado_habitacion = $_POST['StateRoom'];
    $nit_hotel_H_FK = $_POST['hotelReference'];

    mysqli_query($conexion, "INSERT INTO habitacion (nombre_habitacion, capacidad_habitacion, checkout, fecha_inicio_habitacion, fecha_fin_habitacion, checkin, foto_habitacion, array_disponibilidad, descripcion_habitacion, precio_habitacion, estado_habitacion, nit_hotel_H_FK)
                                VALUES ('$nameRoom', '$capacidad_habitacion', '$checkout', '$fecha_inicio_habitacion', '$fecha_fin_habitacion', '$checkin', '$sqlVal', '$array_disponibilidad', '$descripcion_habitacion', '$precio_habitacion', '$estado_habitacion', '$nit_hotel_H_FK')");
  } else{
        echo json_encode(
        array('status' => false, 'msg' => 'Fallo')
        );
        exit;
  }

?>
