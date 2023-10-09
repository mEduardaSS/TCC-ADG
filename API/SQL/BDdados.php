<?php
class DB
{
    // criando a func connect para fazer a conexão com o banco de dados
    public static function connect()
    {
        $host = 'localhost';
        $user = 'root';
        $pass = '';
        $base = 'api';

        // criando o PDO do brunão
        return new PDO("mysql:host={$host};dbname={$base};charset=UTF8;", $user, $pass);
        // a partir daqui é só chamar o banco e no arquivo, identificar essa conexão
    }
}
?>