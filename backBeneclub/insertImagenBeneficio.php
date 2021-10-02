<?php

include_once "cors.php";
include_once "funciones.php";

    $revisar = getimagesize($_FILES["file"]["tmp_name"]);
    if($revisar !== false){
        $image = $_FILES['file']['tmp_name'];
        $imgContenido = addslashes(file_get_contents($image));
        
        //Credenciales Mysql
        $Host = 'localhost';
        $Username = obtenerVariableDelEntorno("MYSQL_USER");
        $Password = obtenerVariableDelEntorno("MYSQL_PASSWORD");
        $dbName = obtenerVariableDelEntorno("MYSQL_DATABASE_NAME");
        
        //Crear conexion con la abse de datos
        $db = new mysqli($Host, $Username, $Password, $dbName);
        
        // Cerciorar la conexion
        if($db->connect_error){
            die("Connection failed: " . $db->connect_error);
        }
        
        //Insertar imagen en la base de datos
        $insertar = $db->query("INSERT into u959049150_bdbeneclub.images_beneficio (imagenes, creado) VALUES ('$imgContenido', now())");
        
        echo $insertar;
        // COndicional para verificar la subida del fichero
        if($insertar){
            $consulta = "SELECT id FROM u959049150_bdbeneclub.images_beneficio ORDER by id DESC LIMIT 1;";

            if ($resultado = mysqli_query($db, $consulta)) {

            
            $row = mysqli_fetch_array($resultado);
            return json_encode( $row);
            
            }
        

        }else{
            echo "Ha fallado la subida, reintente nuevamente.";
        } 
        // Sie el usuario no selecciona ninguna imagen
    }else{
        echo "Por favor seleccione imagen a subir.";
    }
?>
