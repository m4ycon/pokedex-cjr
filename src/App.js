import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from "./pages/Home";
import Perfil from "./pages/Perfil";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />

        <Route path="/perfil" component={Perfil} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
