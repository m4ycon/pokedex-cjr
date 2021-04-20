import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import { AuthProvider } from './components/AuthProvider'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthProvider>
          <Route path="/" component={Home} exact />

          <Route path="/perfil" component={Perfil} />
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
