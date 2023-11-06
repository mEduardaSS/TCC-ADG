<?php
include '../corss.php';
include '../conexao.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
    die();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST'){
    http_response_code(405);
    echo json_encode([
        'success' => 0,
        'message' => 'Falha na requisição!. Somente o método POST é permitido',
    ]);
    exit;
}

$dados = json_decode(file_get_contents("php://input"));

try {
    $voluntario_nome = htmlspecialchars(trim($dados->nome));
    $voluntario_telefone = htmlspecialchars(trim($dados->telefone));
    $voluntario_email = htmlspecialchars(trim($dados->email));
    $voluntario_dataNasc = htmlspecialchars(trim($dados->data_nascimento));
    $voluntario_Dis = htmlspecialchars(trim($dados->disponibilidade));
    $dataPreenchimento = date ('Y-m-d');
    $aprovado = 0;

    $sql = "INSERT INTO `SolicitacaoVoluntario` (
    telefoneVoluntario,
    nomeVoluntario,
    emailVoluntario,
    dataNascVoluntario,
    disponibilidade,
    dataPreenchimento,
    aprovado
    )
    VALUES (
    :telefoneVoluntario,
    :nomeVoluntario,
    :emailVoluntario,
    :dataNascVoluntario,
    :disponibilidade,
    :dataPreenchimento,
    :aprovado
    )";

    $stmt = $connection->prepare($sql);

    $stmt->bindValue(':nomeVoluntario', $voluntario_nome, PDO::PARAM_STR);
    $stmt->bindValue(':emailVoluntario', $voluntario_email, PDO::PARAM_STR);
    $stmt->bindValue(':telefoneVoluntario', $voluntario_telefone, PDO::PARAM_STR);
    $stmt->bindValue(':dataNascVoluntario', $voluntario_dataNasc, PDO::PARAM_STR);
    $stmt->bindValue(':disponibilidade', $voluntario_Dis, PDO::PARAM_STR);
    $stmt->bindValue(':dataPreenchimento', $dataPreenchimento, PDO::PARAM_STR);
    $stmt->bindValue(':aprovado', $aprovado, PDO::PARAM_STR);


    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode([
            'success' => 1,
            'message' => 'Formulário enviado com sucesso!'
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