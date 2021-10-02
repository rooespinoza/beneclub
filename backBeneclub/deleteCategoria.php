<?php
include_once "cors.php";
if (!isset($_GET["idCategoria"])) {
    echo json_encode(null);
    exit;
}
$id = $_GET["idCategoria"];
include_once "funciones.php";
$ok = deleteCategoria($id);
echo json_encode($ok);

