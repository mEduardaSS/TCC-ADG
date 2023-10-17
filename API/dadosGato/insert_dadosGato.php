<?php
include '../corss.php';
include '../conexao.php';

$dados = json_decode(file_get_contents("php://input"));

try {
    $gato_nome = htmlspecialchars(trim($dados->nome));
    $gato_cor = htmlspecialchars(trim($dados->cor));
    $gato_sexo = htmlspecialchars(trim($dados->sexo));
    $gato_idade = htmlspecialchars(trim($dados->idade));
    $gato_descricao = htmlspecialchars(trim($dados->descricao));
    $gato_raca = htmlspecialchars(trim($dados->raca));
    $adotado = 0;

    $sql = "INSERT INTO `Gato` (
    nome,
    cor,
    racaGato,
    idadeGato, 
    descricao,
    sexo,
    adotado
    )
    VALUES (
    :nome,
    :cor,
    :racaGato,
    :idadeGato, 
    :descricao,
    :sexo,
    :adotado 
    )";

    $stmt = $connection->prepare($sql);

    $stmt->bindValue(':nome', $gato_nome, PDO::PARAM_STR);
    $stmt->bindValue(':cor', $gato_cor, PDO::PARAM_STR);
    $stmt->bindValue(':racaGato', $gato_raca, PDO::PARAM_STR);
    $stmt->bindValue(':idadeGato', $gato_idade, PDO::PARAM_STR);
    $stmt->bindValue(':descricao', $gato_descricao, PDO::PARAM_STR);
    $stmt->bindValue(':sexo', $gato_sexo, PDO::PARAM_STR);
    $stmt->bindValue(':adotado', $adotado, PDO::PARAM_STR);


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