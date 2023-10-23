<?php
	declare(strict_types=1);

header("Access-Control-Allow-Origin: *");  //colocar url permitidas
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");


// Verificar se a solicitação é do tipo OPTIONS (solicitação de pré-voo)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // Responder com sucesso e os cabeçalhos CORS permitidos
    http_response_code(200);
    exit();
}
date_default_timezone_set("America/Sao_Paulo");

if (isset($_GET['path'])) {
    $path = explode("/", $_GET['path']);
} else { 
    echo "Caminho não existe1"; exit;
}
if (isset($path[0])) { $acao = $path[0]; } else { echo "Caminho não existe2"; exit; }
if (isset($path[1])) { $parametro = $path[1]; } else { $parametro = ''; }

echo (json_encode($acao));
exit;

// include_once "/SQL/conn.php";  //incluindo o banco
// echo json_encode("AAA");exit;
if($acao=="login"){
    include_once "login/login.php"; //incluindo o aqrquivo
} else if($acao=="listar"){
    include_once "dadosVoluntario/listar.php"; //incluindo o aqrquivo
} else if($acao=="adicionar"){
    include_once "dadosVoluntario/post.php"; //incluindo o aqrquivo
} else if($acao=="listarInteresseVoluntario"){
    include_once "dadosVoluntario/listarInteresseVoluntario.php"; //incluindo o aqrquivo
} else if($acao=="aprovarVoluntario"){
    include_once "dadosVoluntario/aprovarVoluntario.php"; //incluindo o aqrquivo
}
?>