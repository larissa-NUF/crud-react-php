import styles from './Empresa.module.css';
import EmpresaHome from './EmpresaHome';
import EmpresaCadastrar from './EmpresaCadastrar';


function Empresa() {

    return (
        <div className="mt-5 mx-5">
            <div className="card">
                <div className="card-body">
                    <h3 className="mb-5">Consultar Empresas</h3>
                    <EmpresaCadastrar />
                    <EmpresaHome />
                </div>
            </div>
        </div>
      
    );
  }
  
  export default Empresa;