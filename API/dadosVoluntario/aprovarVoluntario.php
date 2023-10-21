<?php
header("Access-Control-Allow-Origin: *");  //colocar url permitidas
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");


$host = "localhost"; // Host do banco de dados
$usuario = "root"; // Nome de usuário do banco de dados
$senha = ""; // Senha do banco de dados
$banco = "abrigogatos"; // Nome do banco de dados

if ($acao == '' && $parametro == '') {
    echo json_encode(['ERRO' => 'Caminho não encontrado!']); exit; }
    if ($acao == 'aprovarVoluntario' && $parametro !== '') {
        $sql= "UPDATE solicitacaovoluntario SET aprovado = 1 WHERE idVoluntario= $parametro";
        // Conectando ao banco de dados
        $conexao = new mysqli($host, $usuario, $senha, $banco);
        $conexao->query($sql);
        echo json_encode("okay");
        
    }







?>