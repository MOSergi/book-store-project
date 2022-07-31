import { NavLink } from "react-router-dom";
//estilos
import "../styles/Navbar.css"; 
//iconos
import { FaHome, FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Navbar (){

    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <nav id="menu">
            <ul>
                <h2 id="shopName">MOSergi Books</h2>
                <div id={showMenu ? "menuDivisionsMb" : "menuDivisions"}>
                    <div className="submenusections">
                        <li><NavLink className={({isActive})=>isActive ? "linkActive" : "links"} to="/"><FaHome /> Home</NavLink></li>
                        <li><NavLink className={({isActive})=>isActive ? "linkActive" : "links"} to="/Recomendados">Recomendados</NavLink></li>
                    </div>
                    <div className="submenusections">
                        <li><NavLink className={({isActive})=>isActive ? "linkActive" : "links"} to="/Registro">Registro</NavLink></li>
                        <li><NavLink className={({isActive})=>isActive ? "linkActive" : "links"} to="/Login">Inicio Sesión</NavLink></li>
                    </div>
                </div>
                <h2 className="BurgerMenu" onClick={()=> showMenu ? setShowMenu(false) : setShowMenu(true)}><FaBars /></h2>
            </ul>
        </nav>
    );
}