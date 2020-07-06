<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Methods: PUT, GET, POST");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  //Conexión sql con la base de datos
  $conexion = new mysqli("localhost",
  "root",
  "",
  "boatravel");

  //Directorio donde se guardarán las imagenes.
  $path = '../assets/';

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
  if(isset($_POST['idHotel'])){
    $sqlVal = $_FILES['file']['name'];
    $idHotel = $_POST['idHotel'];
    $nameHotel = $_POST['nameHotel'];
    $locationHotel = $_POST['locationHotel'];
    $telHotel = $_POST['telHotel'];
    $tel2 = $_POST['tel2'];
    $descHotel = $_POST['descHotel'];
    $addresHotel = $_POST['addressHotel'];
    $fkCompany = $_POST['fkCompany'];

    mysqli_query($conexion, "INSERT INTO hotel (id_hotel, nombre_hotel, ubicacion_hotel, telefono1_hotel, telefono2_hotel, descripcion_hotel, foto_hotel, direccion_hotel, id_empresa_H_FK)
                                VALUES ('$idHotel', '$nameHotel', '$locationHotel', '$telHotel', '$tel2', '$descHotel', '$sqlVal', '$addresHotel', '$fkCompany')");
  } else{
        echo json_encode(
        array('status' => false, 'msg' => 'No file uploaded.')
        );
        exit;
  }

?>
