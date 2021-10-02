<?php
include_once "cors.php";
$beneficio = json_decode(file_get_contents("php://input"));
include_once "funciones.php";
$resultado = insertBeneficio($beneficio);
echo json_encode($resultado);
