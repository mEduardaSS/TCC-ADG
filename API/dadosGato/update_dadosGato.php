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

try {
    $id = $_POST['idGato'];

    $selectGato = "SELECT * FROM `Gato` WHERE idGato = :idGato";
    $stmt = $connection->prepare($selectGato);
    $stmt->bindValue(':idGato', $id, PDO::PARAM_INT);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        $imgGatoAtual = $row['imgGato'];

        $nome = htmlspecialchars(trim($_POST['nome']));
        $cor = htmlspecialchars(trim($_POST['cor']));
        $sexo = htmlspecialchars(trim($_POST['sexo']));
        $idade = htmlspecialchars(trim($_POST['idade']));
        $descricao = htmlspecialchars(trim($_POST['descricao']));
        $raca = htmlspecialchars(trim($_POST['raca']));
        $adotado = 0;

        $update_gato = "UPDATE `Gato` SET imgGato = :imgGato, nome = :nome, cor = :cor, racaGato = :racaGato, idadeGato = :idadeGato, descricao = :descricao, sexo = :sexo, adotado = :adotado WHERE idGato = :idGato";
        $update_stmt = $connection->prepare($update_gato);

        // Verifique se um arquivo foi enviado
        if (isset($_FILES['imgGato']) && $_FILES['imgGato']['error'] === UPLOAD_ERR_OK) {
            $uploadDirectory = 'upload/';
            $timestamp = time();
            $fileName = $timestamp . '_' . $_FILES['imgGato']['name'];
            $filePath = $uploadDirectory . $fileName;

            // Mova o arquivo de imagem para o diretório de upload
            if (move_uploaded_file($_FILES['imgGato']['tmp_name'], $filePath)) {
                $update_stmt->bindValue(':imgGato', $filePath, PDO::PARAM_STR);
            } else {
                $update_stmt->bindValue(':imgGato', $imgGatoAtual, PDO::PARAM_STR);
            }
        } else {
            $update_stmt->bindValue(':imgGato', $imgGatoAtual, PDO::PARAM_STR);
        }

        $update_stmt->bindValue(':nome', $nome, PDO::PARAM_STR);
        $update_stmt->bindValue(':cor', $cor, PDO::PARAM_STR);
        $update_stmt->bindValue(':racaGato', $raca, PDO::PARAM_STR);
        $update_stmt->bindValue(':idadeGato', $idade, PDO::PARAM_STR);
        $update_stmt->bindValue(':descricao', $descricao, PDO::PARAM_STR);
        $update_stmt->bindValue(':sexo', $sexo, PDO::PARAM_STR);
        $update_stmt->bindValue(':adotado', $adotado, PDO::PARAM_STR);
        $update_stmt->bindValue(':idGato', $id, PDO::PARAM_INT);

        if ($update_stmt->execute()) {
            http_response_code(200); // Alterado para 200 OK
            echo json_encode([
                'success' => 1,
                'message' => 'Dados alterados com sucesso',
                'imgGato' => $filePath,
            ]);
        } else {
            http_response_code(500);
            echo json_encode([
                'success' => 0,
                'message' => 'Houve um problema na alteração de dados'
            ]);
        }
    } else {
        http_response_code(404); // Recurso não encontrado
        echo json_encode([
            'success' => 0,
            'message' => 'Gato não encontrado com o ID fornecido'
        ]);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => 0,
        'message' => $e->getMessage()
    ]);
}
?>
