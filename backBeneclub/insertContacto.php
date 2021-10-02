<?php
include_once "cors.php";
$contacto = json_decode(file_get_contents("php://input"));
include_once "funciones.php";
$resultado = insertContacto($contacto);
echo json_encode($resultado);
