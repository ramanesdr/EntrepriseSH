import { Route, Routes } from "react-router-dom";
 import Acceuil from "./component/pages/Acceuil";
 import Apropos from "./component/pages/apropos";
 import Services from "./component/pages/services";
 import Contact from "./component/pages/contact"
import Nav from './component/elements/nav'
import AOS from "aos";
import 'aos/dist/aos.css';
import Footer from "./component/elements/Footer";

import './App.css';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init();
  }, []); 

  return (
    <div className="App">
       <Nav />
        <Routes>
          <Route path={"/"} element={<Acceuil />} />
          <Route path={"/apropos"} element={<Apropos />} />
          <Route path={"/services"} element={<Services />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
