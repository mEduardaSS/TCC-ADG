<?php
header("Access-Control-Allow-Origin: *");  //colocar url permitidas
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

// Configurações do banco de dados
$host = "localhost"; // Host do banco de dados
$usuario = "root"; // Nome de usuário do banco de dados
$senha = ""; // Senha do banco de dados
$banco = "abrigogatos"; // Nome do banco de dados


if ($acao == '' && $parametro == '') { echo json_encode(['ERRO' => 'Caminho não encontrado!']); exit; }

if ($acao == 'adicionar' && $parametro == '') {
    $dados = file_get_contents('php://input');  // Dados passados por POST
    $dados = json_decode($dados);
    $sql = "INSERT INTO solicitacaovoluntario (";
    $contador = 1;
    $tamanho = 0;
    foreach (($dados) as $indice=>$valor) {
        $tamanho++;
    }
    foreach (($dados) as $indice=>$valor) {
        if ($tamanho > $contador) {
            $sql .= "{$indice}, ";
        } else {
            $sql .= "{$indice}";
        }
        $contador++;
    }
    $sql .= ") VALUES (";
    $contador = 1;
    foreach (($dados) as $indice=>$valor) {
        if ($tamanho> $contador) {
            $sql .= "'{$valor}',";
        } else {
            $sql .= "'{$valor}'";
        }
        $contador++;
    }
    $sql .= ")";
    
    $conexao = new mysqli($host, $usuario, $senha, $banco);
    
    $resultado = $conexao->query($sql);
    echo json_encode('ok');
}