<?php

if ($acao == '' && $parametro == '') { echo json_encode(['ERRO' => 'Caminho não encontrado!']); exit; }

if ($acao == 'delete' && $parametro == '') { echo json_encode(['ERRO' => "É necessário informar um cliente."]); exit; }

if ($acao == 'delete' && $parametro != '') {

    $db = DB::connect();
    $result = $db->prepare("DELETE FROM solicitacaovoluntario WHERE id={$parametro}");
    $exec = $result->execute();

    if ($exec) {
        echo json_encode(["dados" => 'Dados foram excluidos com sucesso.']);
    } else {
        echo json_encode(["dados" => 'Houve algum erro ao excluir os dados.']);
    }
}