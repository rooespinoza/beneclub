<?php
include_once "cors.php";
include_once "funciones.php";
$count = getIdImageCategoria();
echo json_encode($count);
