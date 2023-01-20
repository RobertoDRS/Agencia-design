import React from "react";
import './style.css';
import logo from '../../assets/logo.png';
import lua from '../../assets/moon.png';
import sol from '../../assets/sun.png';

export default function Topo(props){

    return(
        <header class={ props.darkMode ? "topo-dark-mode": "topo-light-mode" }>
            <img class="logo" src={logo} alt="Logo"/>

            <button onClick={props.alterarTema} className={ props.darkMode ? "btn-dark-mode": "btn-light-mode" }> 
                <img src={props.darkMode ? sol : lua} alt="Lua" />
             </button>
        </header>
    );
}