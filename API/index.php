<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

date_default_timezone_set("America/Sao_Paulo");

if (isset($_GET['path'])) {
    $path = explode("/", $_GET['path']);
} else {
    echo "Caminho não existe1"; exit;
    // $senhaBd = password_hash('asdasdasd', PASSWORD_DEFAULT); // Senha que vai pegar o user no BD, a mesma já sera encriptada
    // $senhaViaAPI = 'asdasd'; // Senha que vai vir pela página (Client)

    // echo "<h2>$senhaBd</h2>";
    // echo "<h2>".password_verify($senhaViaAPI, $senhaBD)."</h2>"; // Verifica a senha com o Hash;
}


// if (isset($path[0])) { $api = $path[0]; } else { echo "Caminho não existe2"; exit; }
// if (isset($path[1])) { $acao = $path[1]; } else { $acao = ''; }
// if (isset($path[2])) { $parametro = $path[2]; } else { $parametro = ''; }


// $method = $_SERVER['REQUEST_METHOD'];

// include_once "SQL/BD.dados.php";  //incluindo o banco
// include_once "dadosVoluntario/voluntario.php"; //incluindo o aqrquivo


?>