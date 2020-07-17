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

 /* //Función para Extraer dirección de la imagen y para ubicar la imagen
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
*/
  //Función para insertar el hotel a SQL.
  if(isset($_POST['idProveedor'])){
    $cedula_proveedor = $_POST['idProveedor'];
    $nombre_proveedor_perfil = $_POST['nameProvider'];
    $contrasena_proveedor_perfil = $_POST['passProvider'];
    $nombre1_proveedor = $_POST['firstNameProvider'];
    $nombre2_proveedor = $_POST['secondNameProvider'];
    $apellido1_proveedor = $_POST['firstSurname'];
    $apellido2_proveedor = $_POST['secondSurnameProvider'];
    $telefono1_proveedor = $_POST['telProvider'];
    $telefono2_proveedor = $_POST['tel2'];
    $fecha_nacimiento_proveedor = $_POST['dateProvider'];
    $correo_electronico_proveedor = $_POST['emailProvider'];

    mysqli_query($conexion, "INSERT INTO perfil_proveedor (cedula_proveedor , nombre_proveedor_perfil, contrasena_proveedor_perfil, nombre1_proveedor, nombre2_proveedor, apellido1_proveedor, apellido2_proveedor, telefono1_proveedor, telefono2_proveedor, fecha_nacimiento_proveedor, correo_electronico_proveedor)
                                VALUES ('$cedula_proveedor', '$nombre_proveedor_perfil', '$contrasena_proveedor_perfil', '$nombre1_proveedor', '$nombre2_proveedor', '$apellido1_proveedor', '$apellido2_proveedor', '$telefono1_proveedor', '$telefono2_proveedor', '$fecha_nacimiento_proveedor', '$correo_electronico_proveedor')");
  } else{
        echo json_encode(
        array('status' => false, 'msg' => 'No file uploaded.')
        );
        exit;
  }

?>
