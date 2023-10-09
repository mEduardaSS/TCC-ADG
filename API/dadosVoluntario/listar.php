<?php
require "../SQL/BDdados.php";
$sql_select = "SELECT * FROM solicitacaovoluntario order by id asc";
$stmt = $conn->query($sql_select);

// Query executa direto a cláusula do SQL.

$solicitacaovoluntario = $stmt->fetchAll(PDO::FETCH_OBJ);         

    foreach($solicitacaovoluntario as $solicitacaovoluntario){
        ?>
            <?=$solicitacaovoluntario->id?>
            <?=$solicitacaovoluntario->nome?>
            <a href="editar.php?id=<?=$solicitacaovoluntario->id?>"></a>
            <a href="excluir.php?id=<?=$solicitacaovoluntario->id?>"></a>
 <?php
    }
    ?>