import React from "react";
import './style.css';

export default function Card(props){
    return(
        <div className={props.darkMode ? "card card-dark-mode": "card card-light-mode"}>
            <p className={props.darkMode ? "card-p-dark-mode": "card-p-light-mode"}>{props.data}</p>
            <h3 className={ props.darkMode ? "card-h3-dark-mode": "card-h3-light-mode"}>{props.titulo}</h3>
            <p className={props.darkMode ? "card-p-dark-mode": "card-p-light-mode"}>{props.empresa}</p>
            <p className={props.darkMode ? "card-p-dark-mode": "card-p-light-mode"}>{props.paragrafo}</p>
        </div>
    );
}
