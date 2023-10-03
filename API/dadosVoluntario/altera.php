<?php
// a
if ($acao == '' && $parametro == '') { echo json_encode(['ERRO' => 'Caminho não encontrado!']); exit; }


if ($acao == 'update' && $parametro == '') { echo json_encode(['ERRO' => "É necessário informar um cliente."]); exit; }

if ($acao == 'update' && $parametro != '') {

    array_shift($_POST);

    $sql = "UPDATE solicitacaovoluntario SET ";

    $contador = 1;
    foreach (array_keys($_POST) as $indice) {
        if (count($_POST) > $contador) {
            $sql .= "{$indice} = '{$_POST[$indice]}', ";
        } else {
            $sql .= "{$indice} = '{$_POST[$indice]}' ";
        }
        $contador++;
    }

    $sql .= "WHERE id={$parametro}";

    $db = DB::connect();
    $result = $db->prepare($sql);
    $exec = $result->execute();

    if ($exec) {
        echo json_encode(["dados" => 'Dados atualizados com sucesso.']);
    } else {
        echo json_encode(["dados" => 'Houve erro ao atualizar dados.']);
    }

}