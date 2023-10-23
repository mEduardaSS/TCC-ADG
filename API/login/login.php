<?php
include '../corss.php';
include '../conexao.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $dados = json_decode(file_get_contents('php://input'));

    $email = $dados->email;
    $pass = $dados->senha;

    try {

        $stmt = $connection->prepare("SELECT * FROM `admin` WHERE emailAdmin = :email AND senhaAdmin = :senha");
        $stmt->execute(array(':email' => $email, ':senha' => $pass));

        if ($stmt->rowCount() > 0) {
            $mensagem = true;
        } else {
            $mensagem = false;
        }

        echo json_encode($mensagem);
    } catch(PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}
?>
