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
// $dados = json_decode(file_get_contents("php://input"));

// echo json_encode($dados);
// exit;

if(isset($_FILES['imgGato']) && $_FILES['imgGato']['error'] === UPLOAD_ERR_OK){
// atribuindo dados da imgGato

$uploadDirectory = 'upload/';

// Gere um nome único para a imagem, por exemplo, usando timestamp
$timestamp = time();
$fileName = $timestamp . '_' . $_FILES['imgGato']['name'];
$filePath = $uploadDirectory . $fileName;

// Move o arquivo de imagem para o diretório de upload
if (move_uploaded_file($_FILES['imgGato']['tmp_name'], $filePath)) {



try {
    $gato_nome = htmlspecialchars(trim($_POST['nome']));
    $gato_cor = htmlspecialchars(trim($_POST['cor']));
    $gato_sexo = htmlspecialchars(trim($_POST['sexo']));
    $gato_idade = htmlspecialchars(trim($_POST['idade']));
    $gato_descricao = htmlspecialchars(trim($_POST['descricao']));
    $gato_raca = htmlspecialchars(trim($_POST['raca']));
    $adotado = 0;

    $sql = "INSERT INTO `Gato` (
    imgGato,
    nome,
    cor,
    racaGato,
    idadeGato, 
    descricao,
    sexo,
    adotado
    )
    VALUES (
    :imgGato,
    :nome,
    :cor,
    :racaGato,
    :idadeGato, 
    :descricao,
    :sexo,
    :adotado 
    )";

    $stmt = $connection->prepare($sql);

    $stmt->bindValue(':imgGato', $filePath, PDO::PARAM_STR);
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
            'message' => 'Data inserida com sucesso',
            'imgGato' => $filePath,
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

}
}


?>