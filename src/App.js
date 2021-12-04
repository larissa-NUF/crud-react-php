import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import Login from './pages/Login/Login';
import Empresa from './pages/Empresa/Empresa';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/empresa">
            <Empresa />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
