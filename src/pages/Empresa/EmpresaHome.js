import styles from './Empresa.module.css';
import React, { useState, useEffect } from 'react';
import EmpresaExcluir from './EmpresaExcluir';
import EmpresaEditar from './EmpresaEditar';
import { Col, Row } from 'react-bootstrap';

function EmpresaHome() {

    const [data, setData] = useState([]);

    const getEmpresas = async () => {
        fetch("http://localhost/empresa/src/app/api/index.php?funcao=get")
        .then((response) => response.json())
        .then((responseJson) => (
            setData(responseJson.records)
        ));
    }  
    useEffect(() => {
        getEmpresas();
    },[])
 
    return (
     <div>
        <table className="tb-b table table-striped">
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">CNPJ</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telefone</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {Object.values(data).map(a =>
                    <tr key={a.id}>
                        <td>{a.nome}</td>
                        <td>{a.CNPJ}</td>
                        <td>{a.email}</td>
                        <td>{a.telefone}</td>
                        <td className={`text-center ${styles.tabela}`}>
                            <Row>
                                <Col><EmpresaExcluir id={a.id}/></Col>
                                <Col><EmpresaEditar dados={a}/></Col>
                            </Row>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
    );
  }
  
  export default EmpresaHome;