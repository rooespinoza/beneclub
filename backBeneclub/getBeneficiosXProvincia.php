<?php
include_once "cors.php";
if (!isset($_GET["provincia"])) {
    echo json_encode(null);
    exit;
}
$provincia = $_GET["provincia"];
include_once "funciones.php";
$beneficios = getBeneficiosXProvincia($provincia);
echo json_encode($beneficios);

