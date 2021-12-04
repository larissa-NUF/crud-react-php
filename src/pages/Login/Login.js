import styles from './Login.module.css';

function Login() {
    
    return (
     <div className={`${styles.background}`}>
        <div className={styles.loginForm}>
            <i className="bi bi-lock-fill"></i>
            <h2 className="mb-4 text-center">Login</h2>
            <form>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control mb-3" id="email" aria-describedby="emailHelp" placeholder="Digite seu email"/>
                </div>
                <div className="form-group">
                    <label for="senha">Senha</label>
                    <input type="password" className="form-control mb-4" id="senha" placeholder="Digite sua senha"/>
                </div>
                <div className="text-center">
                    <button type="submit" className={`${styles.botao} mt-1`}>Logar</button>
                </div>

            </form>
        </div>
     </div>
      
    );
  }
  
  export default Login;