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
  if(isset($_POST['idCompany'])){
    $nit_empresa = $_POST['idCompany'];
    $nombre_empresa = $_POST['nameCompany'];
    $telefono1_empresa = $_POST['telCompany1'];
    $telefono2_empresa = $_POST['telCompany2'];
    $correo_empresa = $_POST['emailCompany'];
    $id_proveedor_E_FK = $_POST['idProveedor'];

    mysqli_query($conexion, "INSERT INTO empresa (nit_empresa , nombre_empresa, telefono1_empresa, telefono2_empresa, correo_empresa, id_proveedor_E_FK)
                                VALUES ('$nit_empresa', '$nombre_empresa', '$telefono1_empresa', '$telefono2_empresa', '$correo_empresa', '$id_proveedor_E_FK')");
  } else{
        echo json_encode(
        array('status' => false, 'msg' => 'No file uploaded.')
        );
        exit;
  }

?>
