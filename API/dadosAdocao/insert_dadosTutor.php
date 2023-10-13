<?php
include '../corss.php';
include '../conexao.php';

$dados = json_decode(file_get_contents("php://input"));

try {
    $tutor_nome = htmlspecialchars(trim($dados->nome));
    $tutor_telefone = htmlspecialchars(trim($dados->telefone));
    $tutor_endereco = htmlspecialchars(trim($dados->endereco));
    $tutor_dataNasc = htmlspecialchars(trim($dados->data_nascimento));
    $fk_IdGato = 0;

    $sql = "INSERT INTO `SolicitacaoAdocao` (
    telefoneAdocao,
    nomeAdocao,
    dataNascAdocao,
    fk_IdGato,
    endereco 
    )
    VALUES (
    :telefoneAdocao,
    :nomeAdocao,
    :dataNascAdocao,
    :fk_IdGato,
    :endereco 
    )";

    $stmt = $connection->prepare($sql);

    $stmt->bindValue(':nomeAdocao', $tutor_nome, PDO::PARAM_STR);
    $stmt->bindValue(':telefoneAdocao', $tutor_telefone, PDO::PARAM_STR);
    $stmt->bindValue(':dataNascAdocao', $tutor_dataNasc, PDO::PARAM_STR);
    $stmt->bindValue(':fk_IdGato', $fk_IdGato, PDO::PARAM_STR);
    $stmt->bindValue(':endereco', $tutor_endereco, PDO::PARAM_STR);


    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode([
            'success' => 1,
            'message' => 'Data inserida com sucesso'
        ]);
        exit;
    }

    echo json_encode([
        'success' => 0,
        'message' => 'Há algum problema na inserção de dados'
    ]);
    exit;

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => 0,
        'message' => $e->getMessage()
    ]);
    exit;
}





?>