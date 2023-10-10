<?php

if ($acao == '' && $parametro == '') { echo json_encode(['ERRO' => 'Caminho não encontrado!']); exit; }

if ($acao == 'lista' && $parametro == '') {
    $db = DB::connect();
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
    $db = DB::connect();
    $result = $db->prepare("SELECT * FROM solicitacaovoluntario WHERE id={$parametro}");
    $result->execute();
    $obj = $result->fetchObject();

    if ($obj) {
        echo json_encode(["dados" => $obj]);
    } else {
        echo json_encode(["dados" => 'Não existem dados para retornar']);
    }
}