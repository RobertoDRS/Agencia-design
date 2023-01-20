import React from "react";
import './style.css';


export default function Banner(props){
    return(
        <section className="secao-banner">

            <div className={ props.darkMode ? "banner-div-img banner-dark-mode": "banner-div-img banner-light-mode" } ></div>

            <div className="banner-div-texto">
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>
                <span>e design digital</span>
            </div>
            
        </section>
    );
}