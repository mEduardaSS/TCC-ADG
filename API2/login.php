<?php
header("Access-Control-Allow-Origin: *");  //colocar url permitidas
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");


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
    $dados = file_get_contents('php://input');  // Dados passados por POST
    $dados = json_decode($dados);
    // Captura os dados do formulário
    $email = $dados->email;
    $pass = $dados->senha;

    // Conectando ao banco de dados
    $conexao = new mysqli($host, $usuario, $senha, $banco);
    // Verificando a conexão
    if ($conexao->connect_error) {
        die("Erro na conexão: " . $conexao->connect_error);
    }
    
    // Consulta SQL
    $query = "SELECT * FROM `admin` WHERE emailAdmin = '$email' AND senhaAdmin = '$pass'";
    
    // Executando a consulta
    $resultado = $conexao->query($query);
    
    // Verificando se a consulta encontrou um registro correspondente
    if ($resultado && $resultado->num_rows > 0) {
        $mensagem = true;
    } else {
        $mensagem = false;
    }

    // Fechando a conexão com o banco de dados
    $conexao->close();
    echo json_encode($mensagem);
}
?>

