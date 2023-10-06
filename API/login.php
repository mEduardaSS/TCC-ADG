<?php
// api.php

// Habilitar CORS (Cross-Origin Resource Sharing) para permitir solicitações do Ionic/Angular
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Configurações do banco de dados
$host = "localhost"; // Host do banco de dados
$usuarioBd = "root"; // Nome de usuário do banco de dados
$senhaBd = ""; // Senha do banco de dados
$banco = "abrigogatos"; // Nome do banco de dados

// Inicializa as variáveis

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $data = file_get_contents('php://input');
    $data = json_decode($data, true);
    // Captura os dados do formulário
    $emailAdmin =$data["email"];
    $senhaAdmin =$data["senha"];
        // Conectando ao banco de dados
        $conexao = new PDO('mysql:host=localhost;dbname=abrigogatos', $usuarioBd, $senhaBd);

        // // Verificando a conexão
        // if ($conexao->connect_error) {
        //     die("Erro na conexão: " . $conexao->connect_error);
        // }
        // Consulta SQL
        $query = "SELECT * FROM `admin` WHERE emailAdmin = :emailAdmin AND senhaAdmin = :senhaAdmin";
        // Executando a consulta
        $stmt = $conexao->prepare($query);
        $stmt->bindValue(':emailAdmin', $emailAdmin);
        $stmt->bindValue(':senhaAdmin', $senhaAdmin);

        $stmt->execute();
    // password_hash()
    if ($stmt && $stmt->rowCount() == 1) {
        http_response_code(200);
        echo json_encode(array("mensagem" => "Login bem-sucedido"));
    } else {
        http_response_code(401);
        echo json_encode(array("mensagem" => "Email ou senha incorretos"));
    }
} else {
    http_response_code(400);
    
}
?>
