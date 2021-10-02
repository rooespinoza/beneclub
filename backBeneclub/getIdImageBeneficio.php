<?php
include_once "cors.php";
include_once "funciones.php";
$count = getIdImageBeneficio();
echo json_encode($count);
