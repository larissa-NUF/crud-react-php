import styles from './Modal.module.css';
import React, { useState} from 'react';
import {Button, Modal as Md} from 'react-bootstrap';

function Modal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true)};

    return (
        <>
        <div className={props.principal ? "text-end" : ""}>
            <Button type="submit" variant="primary" onClick={ handleShow }
                className={props.principal ? "btn btn-danger" : `btn btn-secondary mx-1 ${styles.buttonEmpresa}`}>
                    {props.botao}
            </Button>
        </div>

        <Md show={show} onHide={handleClose}>
            <Md.Header>
            <Md.Title>{props.titulo}</Md.Title>
            </Md.Header>
            <form onSubmit = {props.submit}>
                <Md.Body>{props.children}</Md.Body>
                <Md.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button type="submit" variant="primary" onClick={handleClose} className="btn btn-danger">
                    {props.btnSalvar}
                </Button>
                </Md.Footer>
            </form>
        </Md>
        </>
    );
}
export default Modal;