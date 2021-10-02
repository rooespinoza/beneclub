<?php
include_once "funciones.php";
$ok = ejecutarSQL();
echo json_encode($ok);

