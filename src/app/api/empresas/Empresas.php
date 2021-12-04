<?php
    function GetAll($con)
    {
        $sql = "select * from tb_empresas";
        $result = $con->prepare($sql);
        $result->execute();

        while ($row = $result->fetch(PDO::FETCH_ASSOC)){
            extract($row);

            $lista["records"][$Id] = [
                'id' => $Id,
                'nome' => $nome,
                'email' => $email,
                'CNPJ' => $CNPJ,
                'telefone' => $telefone,
            ];
       }
       //200 ok
       http_response_code(200);
       echo json_encode($lista);
    }

    function GetById($con){
        $id = filter_input(INPUT_GET, "id", FILTER_SANITIZE_NUMBER_INT);
        $sql = "select * from tb_empresas where Id=:id limit 1";
        $empresa = $con->prepare($sql);
        $empresa->bindParam(':id', $id, PDO::PARAM_INT);
        $empresa->execute();

        while ($row = $empresa->fetch(PDO::FETCH_ASSOC)){
            extract($row);

            $lista["records"][$Id] = [
                'id' => $Id,
                'nome' => $nome,
                'email' => $email,
                'CNPJ' => $CNPJ,
                'telefone' => $telefone,
            ];
       }
       //200 ok
       http_response_code(200);
       echo json_encode($lista);
    }

    function Cadastrar($con){
        $response_json = file_get_contents("php://input");
        $dados = json_decode($response_json, true);

        
        if ($dados){
            $sql = "insert into tb_empresas (nome, CNPJ, telefone, email) values 
            (:nome, :CNPJ, :telefone, :email)";
            $empresa = $con->prepare($sql);
            $empresa->bindParam(':nome', $dados['empresa']['nome']);
            $empresa->bindParam(':CNPJ', $dados['empresa']['CNPJ']);
            $empresa->bindParam(':telefone', $dados['empresa']['telefone']);
            $empresa->bindParam(':email', $dados['empresa']['email']);
            $empresa->execute();

            $response = [
                "erro" => false,
                "messagem" => "Produto cadastrado"
            ];
        }else{
            $response = [
                "erro" => true,
                "messagem" => "Produto não cadastrado"
            ];
        }
        http_response_code(200);
        echo json_encode($dados);
    }
    function Excluir($con){
        $id = filter_input(INPUT_GET, "id", FILTER_SANITIZE_NUMBER_INT);
        $response = "";
        $sql = "delete from tb_empresas where id=:id ";
        $empresa = $con->prepare($sql);
        $empresa->bindParam(':id', $id, PDO::PARAM_INT);

        if($empresa->execute()){
            $response = [
                "erro" => false,
                "messagem" => "Produto excluido"
            ];
        }else{
            $response = [
                "erro" => true,
                "messagem" => "Produto não excluido"
            ];
        }

     
        
      
        http_response_code(200);
        echo json_encode($response);
    }
    function Editar ($con){
        $response_json = file_get_contents("php://input");
        $dados = json_decode($response_json,true);

        if ($dados){
            $sql = "update tb_empresas set nome=:nome, telefone=:telefone, CNPJ=:CNPJ, email=:email where Id=:id";
            $empresa = $con->prepare($sql);

            $empresa->bindParam(':nome', $dados['nome']);
            $empresa->bindParam(':telefone', $dados['telefone']);
            $empresa->bindParam(':CNPJ', $dados['CNPJ']);
            $empresa->bindParam(':email', $dados['email']);
            $empresa->bindParam(':id', $dados['id']);

            $empresa->execute();
            if($empresa->rowCount()){
                $response = [
                    "erro" => false,
                    "messagem" => "Acessou"
                ];
            }else{
                $response = [
                    "erro" => true,
                    "messagem" => "Tente novamente mais tarde!"
                ];
        
            }
            
    
            
        }else{
            $response = [
                "erro" => true,
                "messagem" => "Tente novamente mais tarde!"
            ];
    
        }
        
        
        http_response_code(200);
        echo json_encode($response);
    }
?>