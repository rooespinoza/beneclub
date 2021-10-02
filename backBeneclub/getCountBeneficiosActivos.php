<?php
include_once "cors.php";
include_once "funciones.php";
$count = getCountBeneficiosActivos();
echo json_encode($count);
