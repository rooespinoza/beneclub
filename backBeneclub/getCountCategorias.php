<?php
include_once "cors.php";
include_once "funciones.php";
$count = getCountCategorias();
echo json_encode($count);
