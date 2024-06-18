import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Inicio from "./pages/inicio";
import Registro from "./pages/registro";
import Nosotros from "./pages/nosotros.js";
import Header from "./componentes/header.js";

//Retuas de navegabilidad
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <ToastContainer/>
        <Routes>
          <Route exact path   ="/" Component          ={Inicio}/>	  
          <Route path         ="/add" Component       ={Registro}/>	    
          <Route path         ="update/:id" Component ={Registro}/>
          <Route path         ="/about" Component     ={Nosotros}/>	  
        </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;