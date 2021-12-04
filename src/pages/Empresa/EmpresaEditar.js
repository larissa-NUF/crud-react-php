import styles from './Empresa.module.css';
import React, { useState, useEffect } from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import Modal from '../../components/Modal';

function EmpresaEditar(props) {
    const [id] = useState(props.dados.id);
    const [nome, setNome] = useState("");
    const [CNPJ, setCNPJ] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
   
    const putEmpresas = () => {
        setNome(props.dados.nome);
        setCNPJ(props.dados.CNPJ);
        setEmail(props.dados.email);
        setTelefone(props.dados.telefone);
    }  

    const editar = async e => {
        console.log(nome);
        await fetch("http://localhost/empresa/src/app/api/index.php?funcao=put",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id, nome, CNPJ, email, telefone})
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
        })
    }
    useEffect(() => {
        putEmpresas();
    },[])

    return (
        <div className="text-start">
            <Modal titulo="Editar Empresa" botao={<BsFillPencilFill/>} submit={editar} btnSalvar="Salvar" principal={false}>
                <div className="mb-3">
                    <label for="nome" className="form-label">Nome</label>
                    <input name="nome" type="text" className="form-control" placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)} value={nome}/>
                </div>
                <div className="mb-3">
                    <label for="CNPJ" className="form-label">CNPJ</label>
                    <input name="CNPJ" type="text" className="form-control" placeholder="Digite seu CNPJ" onChange={(e) => setCNPJ(e.target.value)} value={CNPJ}/>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input name="email" type="email" className="form-control" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div className="mb-3">
                    <label for="telefone" className="form-label">Telefone</label>
                    <input name="telefone" type="text" className="form-control" placeholder="Digite seu telefone" onChange={(e) => setTelefone(e.target.value)} value={telefone}/>
                </div>
            </Modal> 
        </div>
    );
}
export default EmpresaEditar;