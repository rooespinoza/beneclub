<?php
include_once "cors.php";
include_once "funciones.php";
$count = getCountContacto();
echo json_encode($count);
