<?php
// var_dump('teste');
// if( $api == "voluntario" && $method == "GET" && $acao == "lista")
// require_once "../SQL/conn.php";
if ($api == 'voluntario') {
    
    if ($method == "GET") {
        include_once "get.php";
        // echo ($parametro);
        chamaGet($acao, $parametro);
    }

    if ($method == "POST" && !isset($_POST['_method'])) {
        include_once "post.php";
        var_dump('metodo post');
    }
    
    if ($method == "POST" && isset($_POST['_method']) && $_POST['_method'] == "DELETE") {
        include_once "deletar.php";
        var_dump('metodo delete');
    }

    if ($method == "POST" && isset($_POST['_method']) && $_POST['_method'] == "PUT") {
        include_once "altera.php";
        var_dump('metodo put');
    }

    

}