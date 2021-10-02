<?php
include_once "cors.php";
include_once "funciones.php";
$count = getCountBeneficios();
echo json_encode($count);
