<?php
include '../conexao.php';
include '../corss.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
    die();
}

if ($_SERVER['REQUEST_METHOD'] !== 'PUT'){
    http_response_code(405);
    echo json_encode([
        'success' => 0,
        'message' => 'Falha na requisição!. Somente o método PUT é permitido',
    ]);
    exit;
}

$data = json_decode(file_get_contents("php://input"));

$id = $data;

try{
    $put = "SELECT * FROM `SolicitacaoVoluntario` WHERE idVoluntario=:idVoluntario";
    $stmt = $connection->prepare($put);
    $stmt->bindValue(':idVoluntario', $id, PDO::PARAM_INT);
    $stmt->execute();

    if ($stmt->rowCount() > 0){

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $aprovado = 1;

        $update_tutor = "UPDATE `SolicitacaoVoluntario` SET aprovado = :aprovado
        WHERE idVoluntario = :idVoluntario";

        $update_stmt = $connection->prepare($update_tutor);

        $update_stmt->bindValue(':aprovado', $aprovado, PDO::PARAM_STR);

        $update_stmt->bindValue(':idVoluntario', $id, PDO::PARAM_INT);

        if ($update_stmt->execute()) {
            http_response_code(201);
            echo json_encode([
                'success' => 1,
                'message' => 'Dado alterado com sucesso'
            ]);
            exit;
        }
    
        echo json_encode([
            'success' => 0,
            'message' => 'Há algum problema na alteração de dados'
        ]);
        exit;
    
    } 
    }catch (PDOException $e) {
        http_response_code(500);
        echo json_encode([
            'success' => 0,
            'message' => $e->getMessage()
        ]);
        exit;
    }

?>