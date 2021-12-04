import styles from './Empresa.module.css';
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Modal from '../../components/Modal';

function EmpresaCadastrar(props) {
    const [empresa, setEmpresa] = useState({
        nome:'',
        CNPJ:'',
        email:'',
        telefone:''
    });
    const valorInput = e => {setEmpresa({...empresa, [e.target.name]: e.target.value})};

    const cadastrar = async e => {
        //e.preventDefault();
        
        await fetch("http://localhost/empresa/src/app/api/index.php?funcao=post",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({empresa})
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
        })
    };

    return (
        <div>
            <Modal titulo="Cadastrar Empresa" botao={<div><AiOutlinePlus /> Adicionar</div>} submit={cadastrar} btnSalvar="Salvar" principal={true}>
                <div className="mb-3">
                    <label for="nome" className="form-label">Nome</label>
                    <input name="nome" type="text" className="form-control" placeholder="Digite seu nome" onChange={valorInput}/>
                </div>
                <div className="mb-3">
                    <label for="CNPJ" className="form-label">CNPJ</label>
                    <input name="CNPJ" type="text" className="form-control" placeholder="Digite seu CNPJ" onChange={valorInput}/>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input name="email" type="email" className="form-control" placeholder="Digite seu email" onChange={valorInput}/>
                </div>
                <div className="mb-3">
                    <label for="telefone" className="form-label">Telefone</label>
                    <input name="telefone" type="text" className="form-control" placeholder="Digite seu telefone" onChange={valorInput}/>
                </div>
            </Modal> 
        </div>
    );
}
export default EmpresaCadastrar;