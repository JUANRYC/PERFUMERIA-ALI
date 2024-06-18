import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import "./header.css"

const Header = () => {
	
	const [activeTab, setActiveTab] = useState("Inicio"); //Elemento activo cuando se cargue la pagina
	const location = useLocation(); //Definimos constante de localizacion
	useEffect(() =>{
		if(location.pathname === "/"){
			setActiveTab("Inicio")
		} else if(location.pathname === "/add"){
			setActiveTab("Registro")
		} else if(location.pathname === "/about"){
			setActiveTab("Nosotros")
		}
	}, [location])
 return(
		<div className="header">
			<p className="logo">Usuario Administrador</p>
			
			<div className="header-right">
				<Link to="/">
				<p className={`${activeTab === "Inicio" ? "active" : " "}`} onClick ={()=> setActiveTab("Inicio")}>Inicio</p>
				</Link>

				<Link to="/add">
				<p className={`${activeTab === "Registro" ? "active" : " "}`} onClick ={()=> setActiveTab("Registro")}>Registro</p>
				</Link>

				<Link to="/about">
				<p className={`${activeTab === "Nosotros" ? "active" : " "}`} onClick ={()=> setActiveTab("Nosotros")}>Nosotros</p>
				</Link>
				
			</div>
			<div>
				<img src="LOGO.png" alt="Logo Perfumería Ali"></img>
			</div>
        </div>
	)
}
export default Header