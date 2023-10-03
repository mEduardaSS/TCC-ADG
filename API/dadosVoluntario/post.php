<?php
// Fazer uma variavel que guarda a descrição do sobre e onclick ela muda quando eu clico no botao(ou faz uma acao)
if ($acao == '' && $parametro == '') { echo json_encode(['ERRO' => 'Caminho não encontrado!']); exit; }

if ($acao == 'adiciona' && $parametro == '') {
    $sql = "INSERT INTO solicitacaovoluntario (";
    $contador = 1;
    foreach (array_keys($_POST) as $indice) {
        if (count($_POST) > $contador) {
            $sql .= "{$indice},";
        } else {
            $sql .= "{$indice}";
        }
        $contador++;
    }
    $sql .= ") VALUES (";
    $contador = 1;
    foreach (array_values($_POST) as $valor) {
        if (count($_POST) > $contador) {
            $sql .= "'{$valor}',";
        } else {
            $sql .= "'{$valor}'";
        }
        $contador++;
    }
    $sql .= ")";

    $db = DB::connect();
    $result = $db->prepare($sql);
    $exec = $result->execute();

    if ($exec) {
        echo json_encode(["dados" => 'Dados foram inseridos com sucesso.']);
    } else {
        echo json_encode(["dados" => 'Houve algum erro ao inseris os dados.']);
    }
    // v
}