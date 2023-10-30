<?php
include '../corss.php';
include '../conexao.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
    die();
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET'){
    http_response_code(405);
    echo json_encode([
        'success' => 0,
        'message' => 'Falha na requisição!. Somente o método POST é permitido',
    ]);
    exit;
}

try{
    $sql = "SELECT * FROM `SolicitacaoVoluntario` WHERE aprovado = 1";

    $stmt = $connection->prepare($sql);
    $stmt->execute();

    if($stmt->rowCount() > 0){
        $voluntarios = [];

        $voluntarios = $stmt->fetchAll(PDO::FETCH_ASSOC);

            echo json_encode([
                'success' => 1,
                'message' => $voluntarios,
            ]);
            exit;

        }else{
    
        echo json_encode([
            'success' => 0,
            'message' => 'Há algum problema na exibição de dados'
        ]);
    }
}   catch (PDOException $e) {
        http_response_code(500);
        echo json_encode([
            'success' => 0,
            'message' => $e->getMessage()
        ]);
        exit;
    }
?>