<?php
include("util/Conexao.php");
include("usuarios/Usuarios.php");
include("empresas/Empresas.php");

$funcao = $_GET["funcao"];
//Cabeçalhos
if ($funcao == "get"){
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    GetAll($con);
}elseif($funcao == "post"){
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: *");
    //header("Access-Control-Allow-Methods: POST");
    
    Cadastrar($con);
    
}elseif($funcao == "delete"){
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    Excluir($con);
    
}elseif($funcao == "put"){
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: *");

    Editar($con);
    
}elseif($funcao == "getbyid"){
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    GetById($con);
    
}

?>