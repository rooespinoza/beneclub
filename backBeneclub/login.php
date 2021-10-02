<?php
include_once "cors.php";
$usuario = json_decode(file_get_contents("php://input"));
$password = json_decode(file_get_contents("php://input"));
include_once "funciones.php";
$resultado = login($usuario,$password);
echo json_encode($resultado);
