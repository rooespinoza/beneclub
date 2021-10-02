<?php

include_once "cors.php";
include_once "funciones.php";
if(!empty($_GET['id'])){
    //Credenciales de conexion
    $Host = 'localhost';
    $Username = obtenerVariableDelEntorno("MYSQL_USER");
    $Password = obtenerVariableDelEntorno("MYSQL_PASSWORD");
    $dbName = obtenerVariableDelEntorno("MYSQL_DATABASE_NAME");
    
    //Crear conexion mysql
    $db = new mysqli($Host, $Username, $Password, $dbName);
    
    //revisar conexion
    if($db->connect_error){
       die("Connection failed: " . $db->connect_error);
    }
    
    //Extraer imagen de la BD mediante GET
    $result = $db->query("SELECT imagenes FROM u959049150_bdbeneclub.images_beneficio WHERE id = {$_GET['id']}");
    if($result->num_rows > 0){
        $imgDatos = $result->fetch_assoc();
        
        //Mostrar Imagen
        header("Content-type: image/jpg"); 
        echo $imgDatos['imagenes']; 
    }else{
        echo 'Imagen no existe...';
    }
}
?>