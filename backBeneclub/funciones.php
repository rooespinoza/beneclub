<?php

//Trae todas las categorias por pagina
function getCategorias($page){
    $bd = obtenerConexion();
    $aux = $page-1;
    $desde=$aux*9;  
    $sentencia = $bd->query("SELECT * FROM u959049150_bdbeneclub.beneclub_categorias where bajaCategoria = 0 LIMIT ".$desde.",9");
    return $sentencia->fetchAll();
}
//Trae la cantidad de registros en categorias
function getCountCategorias(){
    $bd = obtenerConexion();
    $sentencia = $bd->query("SELECT count(*) FROM beneclub_categorias;");
    return $sentencia->fetchObject();
}

  //Trae las categorias activas
  function getCategoriasActivas(){
    $bd = obtenerConexion();
    $sentencia = $bd->query("SELECT * FROM u959049150_bdbeneclub.beneclub_categorias where bajaCategoria=0;");
    return $sentencia->fetchAll();
}


  //Trae todos los beneficios, incluido los dados de baja, paginados
  function getBeneficios($page)
{
    $bd = obtenerConexion();
    $aux = $page-1;
    $desde=$aux*9;  
    $sentencia = $bd->query("SELECT * FROM u959049150_bdbeneclub.beneclub_beneficios 
    INNER JOIN u959049150_bdbeneclub.beneclub_categorias 
    ON u959049150_bdbeneclub.beneclub_beneficios.idCategoria =  u959049150_bdbeneclub.beneclub_categorias.idCategoria LIMIT ".$desde.",9");
    return $sentencia->fetchAll();
}

  //Trae la cantidad de registros en beneficios
  function getCountBeneficios(){
    $bd = obtenerConexion();
    $sentencia = $bd->query("SELECT count(*) FROM u959049150_bdbeneclub.beneclub_beneficios;");
    return $sentencia->fetchObject();
}


     //Trae todos los beneficios activos
     function getBeneficiosActivosxPagina($page)
     {
         $bd = obtenerConexion();
         $aux = $page-1;
         $desde=$aux*9;  
         $sentencia = $bd->query("SELECT * FROM u959049150_bdbeneclub.beneclub_beneficios 
         INNER JOIN u959049150_bdbeneclub.beneclub_categorias 
         ON u959049150_bdbeneclub.beneclub_beneficios.idCategoria =  u959049150_bdbeneclub.beneclub_categorias.idCategoria where baja = 0 LIMIT ".$desde.",9");
         return $sentencia->fetchAll();
     }

//Trae la cantidad de registros en beneficiosActivos
function getCountBeneficiosActivos(){
    $bd = obtenerConexion();
    $sentencia = $bd->query("SELECT count(*) FROM u959049150_bdbeneclub.beneclub_beneficios where baja = 0;");
    return $sentencia->fetchObject();
}

//Trae los beneficios de una categoria
function getBeneficiosXCategorias($id)
{
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("SELECT * FROM u959049150_bdbeneclub.beneclub_beneficios WHERE idCategoria = ?");
    $sentencia->execute([$id]);
    return $sentencia->fetchObject();
}

//Trae los beneficios de una provincia
function getBeneficiosXProvincia($id)
{
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("SELECT * FROM u959049150_bdbeneclub.beneclub_beneficios WHERE provincia = ?");
    $sentencia->execute([$id]);
    return $sentencia->fetchObject();
}

//Login de usuario
function login($usuario)
{
    $bd = obtenerConexion();
    $sql = "SELECT * FROM u959049150_bdbeneclub.beneclub_user WHERE `user` = '$usuario->user' AND `password` = '$usuario->password'";
    $sentencia = $bd->query($sql);
    if($sentencia->fetchAll() != []){
        return true;
    }else{
        return false;
    }
} 

//Da de baja un beneficio
function deleteBeneficio($id)
{
    $bd = obtenerConexion();
    $sentencia = $bd->query("UPDATE u959049150_bdbeneclub.beneclub_beneficios SET baja = 1 WHERE id = $id");
    return $sentencia->fetchObject();
}

//Da de baja una categoria
function deleteCategoria($idCategoria){  
    $bd = obtenerConexion();
    $sentencia = $bd->query("UPDATE u959049150_bdbeneclub.beneclub_categorias SET bajaCategoria = 1 WHERE idCategoria = $idCategoria");
    return $sentencia->fetchObject();
}

   //Vuelve a activar un beneficio
function altaBeneficio($id)
{
    $bd = obtenerConexion();
    $sentencia = $bd->query("UPDATE u959049150_bdbeneclub.beneclub_beneficios SET baja = 0 WHERE id = $id");
    return $sentencia->fetchObject();
}

 //Vuelve a activar una categoria
function altaCategoria($idCategoria){  
    $bd = obtenerConexion();
    $sentencia = $bd->query("UPDATE u959049150_bdbeneclub.beneclub_categorias SET bajaCategoria = 0 WHERE idCategoria = $idCategoria");
    return $sentencia->fetchObject();
}

//Agregar una nueva categoria
function insertCategoria($categoria)
{
    
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("INSERT INTO u959049150_bdbeneclub.beneclub_categorias(`nameCategoria`,`bajaCategoria`,`idImageCategoria`) VALUES (?,0,?)");
    return $sentencia->execute([$categoria->nameCategoria, $categoria->idImage]);
    
}
//guarda una imagen en el servidor
//guardarImagenCategoria


//Agrega un beneficio
function insertBeneficio($beneficio)
{
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("INSERT INTO u959049150_bdbeneclub.beneclub_beneficios(`name`,`descripcion`,`descuento`,`mapa`,`provincia`,`idCategoria`,`idImage`,`baja`) VALUES (?,?,?,?,?,?,?,0)");
    return $sentencia->execute([$beneficio->name, $beneficio->descripcion,$beneficio->descuento,$beneficio->mapa,$beneficio->provincia,$beneficio->categoria,$beneficio->image]);
}
//guarda una imagen en el servidor
//guardarImagenBeneficio


function getBeneficioxId($id)
{
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("SELECT * FROM u959049150_bdbeneclub.beneclub_beneficios WHERE id = ?");
    return $sentencia->fetchObject();
}


function getIdImageBeneficio()
{
    $bd = obtenerConexion();
    $sentencia = $bd->query("SELECT id FROM u959049150_bdbeneclub.images_beneficio ORDER by id DESC LIMIT 1;");
    return $sentencia->fetchAll();
}



function getIdImageCategoria()
{
    $bd = obtenerConexion();
    $sentencia = $bd->query("SELECT id FROM u959049150_bdbeneclub.images_categoria ORDER by id DESC LIMIT 1;");
    return $sentencia->fetchAll();
}


function insertContacto($contacto)
{    
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("INSERT INTO u959049150_bdbeneclub.beneclub_contacto(`nombre`,`telefono`,`email`,`baja`,`nombreComercio`) VALUES (?,?,?,0,?)");
    return $sentencia->execute([$contacto->nombre, $contacto->telefono, $contacto->email, $contacto->nombreComercio]);
    
}
function getContactos($page)
{
    $bd = obtenerConexion();
    $aux = $page-1;
    $desde=$aux*9;  
    $sentencia = $bd->query("SELECT * FROM u959049150_bdbeneclub.beneclub_contacto WHERE baja = 0 LIMIT ".$desde.",9");
    return $sentencia->fetchAll();
}

function deleteContacto($idContacto){  
    $bd = obtenerConexion();
    $sentencia = $bd->query("UPDATE u959049150_bdbeneclub.beneclub_contacto SET baja = 1 WHERE id = $idContacto");
    return $sentencia->fetchObject();
}


function getCountContacto(){
    $bd = obtenerConexion();
    $sentencia = $bd->query("SELECT count(*) FROM u959049150_bdbeneclub.beneclub_contacto where baja = 0;");
    return $sentencia->fetchObject();
}
function obtenerVariableDelEntorno($key)
{
    if (defined("_ENV_CACHE")) {
        $vars = _ENV_CACHE;
    } else {
        $file = ".env";
        if (!file_exists($file)) {
            throw new Exception("El archivo de las variables de entorno ($file) no existe. Favor de crearlo");
        }
        $vars = parse_ini_file($file);
        define("_ENV_CACHE", $vars);
    }
    if (isset($vars[$key])) {
        return $vars[$key];
    } else {
        throw new Exception("La clave especificada (" . $key . ") no existe en el archivo de las variables de entorno");
    }
}
function ejecutarSQL()
{
    $bd = obtenerConexion();
    $bd->query("CREATE TABLE IF NOT EXISTS `u959049150_bdbeneclub`.`beneclub_user` (
        `id` BIGINT(10) NOT NULL AUTO_INCREMENT,
        `user` VARCHAR(100) NOT NULL,
        `password` VARCHAR(100) NULL,  
        PRIMARY KEY (`id`));");
    
    $bd->query("INSERT into `beneclub_user`(`user`, `password`) values
    ('admin','adminBeneclub123');");

    $bd->query("CREATE table IF NOT EXISTS `u959049150_bdbeneclub`.`beneclub_categorias`(
        `idCategoria` BIGINT(10) NOT NULL AUTO_INCREMENT,
        `bajaCategoria` TINYINT(1) not null default 0,
        `imageCategoria` varchar(255),
        `nameCategoria` varchar(255),
        PRIMARY KEY (`idCategoria`));");

$bd->query("CREATE table IF NOT EXISTS `u959049150_bdbeneclub`.`beneclub_beneficios`(
	`id` BIGINT(10) NOT NULL AUTO_INCREMENT,
    `baja` TINYINT(1) not null default 0,
    `image` varchar(255),
    `name` varchar(255),
    `descripcion` varchar(255),
    `descuento` varchar(255),
   `mapa` varchar(255),
    `provincia` varchar(255),
    `idCategoria` BIGINT(10) NOT NULL,
    PRIMARY KEY (`id`),
     CONSTRAINT `idCategoria`
    FOREIGN KEY (`idCategoria`)
    REFERENCES `u959049150_bdbeneclub`.`beneclub_categorias` (`idCategoria`));");
}

function obtenerConexion()
{
    $password = obtenerVariableDelEntorno("MYSQL_PASSWORD");
    $user = obtenerVariableDelEntorno("MYSQL_USER");
    $dbName = obtenerVariableDelEntorno("MYSQL_DATABASE_NAME");
    $database = new PDO('mysql:host=localhost;dbname=' . $dbName, $user, $password);
    $database->query("set names utf8;");
    $database->setAttribute(PDO::ATTR_EMULATE_PREPARES, FALSE);
    $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $database->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
    return $database;
}
