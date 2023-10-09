<?php
$db = conn::connect();
$result = $conn->prepare("SELECT * FROM solicitacaovoluntario");
$result->execute();
$obj = $result->fetchAll(PDO::FETCH_ASSOC);

if ($obj) {
    echo json_encode(["dados" => $obj]);
} else {
    echo json_encode(["dados" => 'Não existem dados para retornar']);
}
?>