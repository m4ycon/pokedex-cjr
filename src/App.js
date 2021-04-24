import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import NotFound from './pages/NotFound';

import { AuthProvider } from './components/AuthProvider'
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Menu />
        <Switch>
          <Route path="/" component={Home} exact />

          <Route path="/perfil" component={Perfil} />

          <Route component={NotFound} />

        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
