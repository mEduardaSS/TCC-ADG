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

$id = $data->idGato;

try{
    $put = "SELECT * FROM `Gato` WHERE idGato=:idGato";
    $stmt = $connection->prepare($put);
    $stmt->bindValue(':idGato', $id, PDO::PARAM_INT);
    $stmt->execute();

    if ($stmt->rowCount() > 0){


        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $imgGato = 'imagem';
        $nome = htmlspecialchars(trim($data->nome));
        $cor = htmlspecialchars(trim($data->cor));
        $racaGato = htmlspecialchars(trim($data->raca));
        $idadeGato = htmlspecialchars(trim($data->idade));
        $descricao = htmlspecialchars(trim($data->descricao));
        $sexo = htmlspecialchars(trim($data->sexo));
        $adotado = 0;

        $update_serv = "UPDATE `Gato` SET imgGato = :imgGato, nome = :nome, cor = :cor, racaGato = :racaGato, idadeGato = :idadeGato, descricao = :descricao, sexo = :sexo, adotado = :adotado
        WHERE idGato = :idGato";

        $update_stmt = $connection->prepare($update_serv);

        $update_stmt->bindValue(':imgGato', $imgGato, PDO::PARAM_STR);
        $update_stmt->bindValue(':nome', $nome, PDO::PARAM_STR);
        $update_stmt->bindValue(':cor', $cor, PDO::PARAM_STR);
        $update_stmt->bindValue(':racaGato', $racaGato, PDO::PARAM_STR);
        $update_stmt->bindValue(':idadeGato', $idadeGato, PDO::PARAM_STR);
        $update_stmt->bindValue(':descricao', $descricao, PDO::PARAM_STR);
        $update_stmt->bindValue(':sexo', $sexo, PDO::PARAM_STR);
        $update_stmt->bindValue(':adotado', $adotado, PDO::PARAM_STR);

        $update_stmt->bindValue(':idGato', $id, PDO::PARAM_INT);

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