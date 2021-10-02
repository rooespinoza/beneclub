<?php
include_once "cors.php";
if (!isset($_GET["page"])) {
    echo json_encode(null);
    exit;
}
$page = $_GET["page"];
include_once "funciones.php";
$categorias = getCategorias($page);
echo json_encode($categorias);
