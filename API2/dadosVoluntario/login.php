<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

if ($acao == '' && $parametro == '') { echo json_encode(['ERRO' => 'Caminho não encontrado!']); exit; }

if ($acao == 'login' && $parametro == '') {
    // Configurações do banco de dados
    $host = "localhost"; // Host do banco de dados
    $usuario = "root"; // Nome de usuário do banco de dados
    $senha = ""; // Senha do banco de dados
    $banco = "abrigogatos"; // Nome do banco de dados

    $mensagem='';

    // Conectando ao banco de dados
    $conexao = new mysqli($host, $usuario, $senha, $banco);

    // Verificando a conexão
    if ($conexao->connect_error) {
        die("Erro na conexão: " . $conexao->connect_error);
    }

    // Consulta SQL
    $query = "SELECT * FROM `admin` WHERE emailAdmin = '$dados->email' AND senhaAdmin = '$dados->senha'";

    // Executando a consulta
    $resultado = $conexao->query($query);

    // Verificando se a consulta encontrou um registro correspondente
    if ($resultado && $resultado->num_rows > 0) {
        $mensagem = true;
    } else {
        $mensagem = false;
    }

    // Fechando a conexão com o banco de dados
    $conexao->close();
    echo(json_encode($mensagem));
}