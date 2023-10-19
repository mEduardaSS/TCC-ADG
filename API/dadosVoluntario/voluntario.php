<?php
// var_dump('teste');
if ($api == 'voluntario') {
    
    if ($method == "GET") {
        include_once "get.php";
        var_dump('metodo get');
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