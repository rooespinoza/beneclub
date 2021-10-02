<?php
include_once "cors.php";
$categoria = json_decode(file_get_contents("php://input"));
include_once "funciones.php";
$resultado = insertCategoria($categoria);
echo json_encode($resultado);
