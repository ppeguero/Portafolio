import CondicionAtmosferica from "./components/CondicionAtmosfericas";
import Login from "./pages/Login";
import Acesso from "./pages/Acceso";
import './index.css';

import { useRoutes, BrowserRouter as Router } from "react-router-dom";

// router 
const AppRouter = () => {
  let routes = useRoutes([
    { path: '/', element: <CondicionAtmosferica/> },
    { path: '/formulario', element: <Login/>},
    { path: 'acceso', element: <Acesso/> }
  ]);

  return routes;
}

function AppContent(){
  return(
    <div>
      <AppRouter />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
