import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import { AuthProvider } from './components/AuthProvider'
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
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
