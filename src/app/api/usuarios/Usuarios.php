<?php
    function GetByEmail($con)
    {
        $sql = "select * from tb_usuarios";
        $result = $con->prepare($sql);
        $result->execute();

        while ($row = $result->fetch(PDO::FETCH_ASSOC)){
            extract($row);

            $lista["records"][$Id] = [
                'id' => $Id,
                'nome' => $nome,
                'email' => $email,
                'senha' => $senha,
            ];
       }
       //200 ok
       http_response_code(200);
       echo json_encode($lista);
    }
?>