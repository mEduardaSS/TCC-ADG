<?php
	declare(strict_types=1);

    // Define os cabeçalhos para permitir acesso de qualquer origem (*)
    header("Access-Control-Allow-Origin: *");
    // Permite que os métodos HTTP GET, POST, PUT e DELETE sejam usados a partir de origens diferentes
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    // Define os cabeçalhos permitidos para serem incluídos na solicitação
    header("Access-Control-Allow-Headers: Content-Type");

// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// header("Access-Control-Allow-Headers: Content-Type, Authorization");

// if ($_SERVER["REQUEST_METHOD"] === 'POST') {
//     if (isset($_FILES['foto']) && $_FILES['foto']['error'] === UPLOAD_ERR_OK) {
//         // Dados do gato
//         $data = json_decode($_POST['dadosGato']);
//         $name = $data->name; //seria os dados do gato, nao sei se ja tem essa parte ou se precisa dele no seu
//         $preco = $data->preco;
//         $descricao = $data->descricao;

//        $uploadDirectory = 'upload/';

//             // Gere um nome único para a imagem, por exemplo, usando timestamp
//             $timestamp = time();
//             $fileName = $timestamp . '_' . $_FILES['foto']['name'];
//             $filePath = $uploadDirectory . $fileName;

//             // Move o arquivo de imagem para o diretório de upload
//             if (move_uploaded_file($_FILES['foto']['tmp_name'], $filePath)) {
                
// 	      // Agora você pode inserir o produto no banco de dados com o caminho da imagem ////// aqui seria os dados do gato
//                     $sqlInsert = "INSERT INTO gato (preco, name, descricao, foto_produto, id_categoria) VALUES (:preco, :name, :descricao, :foto_produto, :id_categoria)";
//                     $inserirProduto = $conn->prepare($sqlInsert);
//                     $inserirProduto->bindParam(':preco', $preco);
//                     $inserirProduto->bindParam(':name', $name);
//                     $inserirProduto->bindParam(':descricao', $descricao);
//                     $inserirProduto->bindParam(':foto_produto', $filePath); //////aqui ta inserindo no campo foto o caminho da imagem
//                     $inserirProduto->bindParam(':id_categoria', $id_categoria);

//                     if ($inserirProduto->execute()) {
//                         $response = [
//                             'mensagem' => 'Gato cadastrado com sucesso!',
//                             'foto_produto' => $filePath, // Caminho da imagem inserido no banco de dados
//                         ];
//                     } else {
//                         // Rolleback em caso de falha
//                         $conn->rollBack();

//                         $response = [
//                             'mensagem' => 'Falha ao cadastrar o gato',
//                         ];
                
//     }

//     header('Content-Type: application/json');
//     echo json_encode($response);
// }
// 

?>