<?php
header("Access-Control-Allow-Origin: *");
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

    try {
        // Conectando ao banco de dados usando PDO
        $pdo = new PDO("mysql:host=$host;dbname=$banco", $usuario, $senha);
        
        // Configurando o PDO para lançar exceções em caso de erro
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        // Consulta SQL preparada
        $query = "SELECT * FROM `admin` WHERE emailAdmin = :email AND senhaAdmin = :senha";
        $stmt = $pdo->prepare($query);
        $stmt->bindValue(':email', $email);
        $stmt->bindValue(':senha', $pass);
        
        // Executando a consulta
        $stmt->execute();
        
        // Verificando se a consulta encontrou um registro correspondente
        if ($stmt->rowCount() > 0) {
            $mensagem = true;
        } else {
            $mensagem = false;
        }
    } catch (PDOException $e) {
        // Tratamento de erros
        die("Erro na conexão: " . $e->getMessage());
    }
    
    // Fechando a conexão com o banco de dados (não é estritamente necessário com PDO)
    $pdo = null;
    
    echo json_encode($mensagem);
}
?>