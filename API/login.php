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
$usuario = "root"; // Nome de usuário do banco de dados
$senha = ""; // Senha do banco de dados
$banco = "abrigogatos"; // Nome do banco de dados

// Inicializa as variáveis
$email = "";
$pass = "";
$mensagem = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura os dados do formulário
    $email = $_POST["emai"];
    $pass = $_POST["senha"];
        // Conectando ao banco de dados
        $conexao = new mysqli($host, $usuario, $pass, $banco);

        // Verificando a conexão
        if ($conexao->connect_error) {
            die("Erro na conexão: " . $conexao->connect_error);
        }
        // Consulta SQL
        $query = "SELECT * FROM `admin` WHERE emailAdmin = '$email' AND senhaAdmin = '$pass'";
        // Executando a consulta
        $resultado = $conexao->query($query);
    
// Exemplo de endpoint de autenticação
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["email"]) && isset($_POST["senha"])) {
    $email = $_POST["email"];
    $senha = $_POST["senha"];
    // ...

    if (/* Verifique a autenticação com sucesso */) {
        http_response_code(200);
        echo json_encode(array("mensagem" => "Login bem-sucedido"));
    } else {
        http_response_code(401);
        echo json_encode(array("mensagem" => "Email ou senha incorretos"));
    }
} else {
    http_response_code(400);
    echo json_encode(array("mensagem" => "Requisição inválida"));
}

?>
