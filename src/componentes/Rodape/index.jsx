import React from "react";
import './style.css';
import logo from '../../assets/logo.png';
import logoFacebook from '../../assets/facebook.png';
import logoTwitter from '../../assets/twitter.png';
import logoLinkedin from '../../assets/linkedin.png';
import logoDribble from '../../assets/dribble.png';
import logoBehance from '../../assets/behance.png';
import logoGooglePlus from '../../assets/google-plus.png';

export default function Rodape(props){
    return(
        <footer className={ props.darkMode ? "footer-dark-mode": "footer-light-mode"}>
            <img src={logo} alt="Logo" />
            <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                ferramentas e tecnologias personalizadas.
            </p>

            <div className="div-icones">
                <img src={logoFacebook} alt="logo Facebook" />
                <img src={logoTwitter} alt="logo Twitter" />
                <img src={logoLinkedin} alt="logo Linkedin" />
                <img src={logoDribble} alt="logo Dribble" />
                <img src={logoBehance} alt="logo Behance" />
                <img src={logoGooglePlus} alt="logo Google Plus" />
                
            </div>
            <div className={ props.darkMode ? "copyright footer-copyright-dark-mode": "copyright footer-copyright-light-mode"}>
             <p>Copyright 2023 © <span>Roberto da Rocha</span></p>
            </div>
        
        </footer>
    );
}