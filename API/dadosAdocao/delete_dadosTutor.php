<?php
include '../corss.php';
include '../conexao.php';

$data = json_decode(file_get_contents("php://input"));
var_dump($data);
$id = $_GET['id'];
var_dump($id);


if (!isset($id)) {
    echo json_encode(['success' => 0, 'message' => 'Please provide the post ID.']);
    exit;
}

try {

    $fetch_post = "SELECT * FROM `SolicitacaoAdocao` WHERE idAdocao=:id";
    $fetch_stmt = $connection->prepare($fetch_post);
    $fetch_stmt->bindValue(':id', $id, PDO::PARAM_INT);
    $fetch_stmt->execute();

    if ($fetch_stmt->rowCount() > 0) {

        $delete_post = "DELETE FROM `SolicitacaoAdocao` WHERE idAdocao=:id";
        $delete_post_stmt = $connection->prepare($delete_post);
        $delete_post_stmt->bindValue(':id', $id, PDO::PARAM_INT);

        if ($delete_post_stmt->execute()) {

            echo json_encode([
                'success' => 1,
                'message' => 'Record Deleted successfully'
            ]);
            exit;
        }

        echo json_encode([
            'success' => 0,
            'message' => 'Could not delete. Something went wrong.'
        ]);
        exit;

    } else {
        echo json_encode(['success' => 0, 'message' => 'Invalid ID. No posts found by the ID.']);
        exit;
    }

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => 0,
        'message' => $e->getMessage()
    ]);
    exit;
}
?>