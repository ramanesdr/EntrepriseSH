import { Route, Routes } from "react-router-dom";
 import Acceuil from "./component/pages/Acceuil";
 import Apropos from "./component/pages/apropos";
 import Services from "./component/pages/services";
 import Contact from "./component/pages/contact"


import './App.css';

function App() {
  return (
    <div className="App">
       
        <Routes>
          <Route path={"/"} element={<Acceuil />} />
          <Route path={"/apropos"} element={<Apropos />} />
          <Route path={"/services"} element={<Services />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
