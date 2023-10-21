<?php

function chamaGet($acao, $parametro){
    $dbdrive = 'mysql';
 $dbhost = 'localhost';
 $dbname = 'AbrigoGatos';
 $dbuser = 'root';
 $dbpass = '';

$conn = new PDO($dbdrive.':hostname='.$dbhost.';dbname='.$dbname,$dbuser,$dbpass);


if ($acao == '' && $parametro == '') { echo json_encode(['ERRO' => 'Caminho não encontrado!']); exit; }

if ($acao == 'lista' && $parametro == '') {
    $db = $conn::connect();
    $result = $db->prepare("SELECT * FROM solicitacaovoluntario ORDER BY nome");
    $result->execute();  
    $obj = $result->fetchAll(PDO::FETCH_ASSOC);

    if ($obj) {
        echo json_encode(["dados" => $obj]);
    } else {
        echo json_encode(["dados" => 'Não existem dados para retornar']);
    }
}

if ($acao == 'lista' && $parametro != '') {
    $db = $conn->query("SELECT * FROM solicitacaovoluntario WHERE id={$parametro}");
    // $result = $db->prepare("SELECT * FROM solicitacaovoluntario WHERE id={$parametro}");
    // $result->execute();
    // $obj = $result->fetchObject();
    $result = $db->fetchAll(PDO::FETCH_OBJ);
    echo (json_encode($result));
//     if ($obj) {
//         echo json_encode(["dados" => $obj]);
//     } else {
//         echo json_encode(["dados" => 'Não existem dados para retornar']);
//     }
 }
}