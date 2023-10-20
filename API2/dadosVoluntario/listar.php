<?php
 header("Access-Control-Allow-Origin: *");  //colocar url permitidas
 header("Access-Control-Allow-Methods: GET, POST");
 header("Access-Control-Allow-Headers: Content-Type");

 
 $host = "localhost"; // Host do banco de dados
 $usuario = "root"; // Nome de usuário do banco de dados
 $senha = ""; // Senha do banco de dados
 $banco = "abrigogatos"; // Nome do banco de dados

 // Conectando ao banco de dados
 $conexao = new mysqli($host, $usuario, $senha, $banco);
 
     if ($acao == '' && $parametro == '') { echo json_encode(['ERRO' => 'Caminho não encontrado!']); exit; }
     
     if ($acao == 'listar' && $parametro == '') {
        $query="SELECT * FROM solicitacaovoluntario WHERE aprovado = 1 ";
        $resultado = $conexao->query($query);

        if ($resultado) {
            $dados = array();
            while ($linha = $resultado->fetch_assoc()) {
                $dados[] = $linha;
            }
    
            // Converte os dados para JSON e imprime na saída
            echo json_encode($dados);
        } else {
            echo json_encode(['ERRO' => 'Erro na consulta SQL']);
        }
 }exit;
 


?>