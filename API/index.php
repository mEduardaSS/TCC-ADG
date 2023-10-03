<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

date_default_timezone_set("America/Sao_Paulo");

if (isset($_GET['path'])) {
    $path = explode("/", $_GET['path']);
} else { 
    echo "Caminho não existe1"; exit;
}

echo "aaaa";

// if (isset($path[0])) { $api = $path[0]; } else { echo "Caminho não existe2"; exit; }
// if (isset($path[1])) { $acao = $path[1]; } else { $acao = ''; }
// if (isset($path[2])) { $parametro = $path[2]; } else { $parametro = ''; }


// $method = $_SERVER['REQUEST_METHOD'];

// include_once "SQL/BD.dados.php";  //incluindo o banco
// include_once "dadosVoluntario/voluntario.php"; //incluindo o aqrquivo


?>