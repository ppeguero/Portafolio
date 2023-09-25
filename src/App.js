import CondicionAtmosferica from "./components/CondicionAtmosfericas";
import './index.css';

import { useRoutes, BrowserRouter as Router } from "react-router-dom";

// router 
const AppRouter = () => {
  let routes = useRoutes([
    { path: '/', element: <CondicionAtmosferica/> }
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
