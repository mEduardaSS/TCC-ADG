<?php

    $host = "localhost"; // Host do banco de dados
    $usuario = "root"; // Nome de usuário do banco de dados
    $senha = ""; // Senha do banco de dados
    $banco = "abrigogatos"; // Nome do banco de dados
        
    
    if ($acao == '' && $parametro == '') { echo json_encode(['ERRO' => 'Caminho não encontrado!']); exit; }
    
    if ($acao == 'get' && $parametro == '') {
        $conexao = new mysqli($host, $usuario, $senha, $banco);
        $query = "SELECT * FROM solicitacaovoluntario ORDER BY nomeVoluntario";
        $resultado = $conexao->query($query);
    
    
if ($resultado) {
    $dados = array(); // Crie um array para armazenar os dados

    while ($row = $resultado->fetch_assoc()) {
        $dados[] = $row; // Adicione cada linha do resultado ao array $dados
    }

    // Converta o array em JSON
    $json = json_encode($dados);

    // Verifique se a conversão foi bem-sucedida
    if ($json !== false) {
        echo $json; // Imprima o JSON
    } else {
        echo json_last_error_msg(); // Trate erros, se houver algum
    }

    $resultado->close(); // Feche o resultado
} else {
        echo json_encode(["dados" => 'Não existem dados para retornar']);
    }
}

if ($acao == 'lista' && $parametro != '') {
    $db = $conn->query("SELECT * FROM solicitacaovoluntario WHERE id={$parametro}");
    $result = $db->fetchAll(PDO::FETCH_OBJ);
    echo (json_encode($result));
        }