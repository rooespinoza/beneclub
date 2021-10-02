<?php
include_once "cors.php";
include_once "funciones.php";
$categorias = getCategoriasActivas();
echo json_encode($categorias);
