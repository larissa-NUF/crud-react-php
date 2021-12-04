import styles from './Empresa.module.css';
import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import Modal from '../../components/Modal';

function EmpresaCadastrar(props) {

    const excluir = async (id) => {
        
        await fetch("http://localhost/empresa/src/app/api/index.php?funcao=delete&id=" + id)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
        }).catch(() => {
            console.log("Erro: Arquivo não excluido! Tente novamente mais tarde.")
        })
    };

    return (
        <div className="text-end">
            <Modal titulo="Excluir Empresa" botao={<BsFillTrashFill />} submit={() => excluir(props.id)} btnSalvar="Sim" principal={false}>
                Deseja realmente excluir?
            </Modal> 
        </div>
    );
}
export default EmpresaCadastrar;