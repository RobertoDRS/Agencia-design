import React from "react";
import './style.css';
import Card from '../Card';

export default function ExperienciaTrabalho(props){
    return(
        <section className={ props.darkMode ? "secao-experiencia-trabalho SET-dark-mode": "secao-experiencia-trabalho SET-light-mode"}>
            <div className="primeira-div-SET">

                <h2 className={ props.darkMode ? "SET-h2-dark-mode": "SET-h2-light-mode"}>Experiências De Trabalho</h2>

                <p className={ props.darkMode ? "SET-p-dark-mode primeiro-paragrafo-SET": "SET-p-light-mode primeiro-paragrafo-SET"}>
                    Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                    Sites e Marketing Digital, nos empenhamos diariamente para entregar
                    resultados que tragam impacto aos nossos clientes.
                </p>

            </div>
            <div className="segunda-div-SET">
                <Card darkMode={props.darkMode} data='JUNHO 2012 - 2016' titulo="Web Designer" empresa="Pied Piper StartUp." 
                paragrafo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"/>

                <Card darkMode={props.darkMode} data="AGOSTO 2016 - 2019" titulo="Product Designer" empresa="E Corp." 
                paragrafo="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"/>

                <Card darkMode={props.darkMode} data="FEVEREIRO 2019 - 2021" titulo="Digital Consulting" empresa="Arasaka Inc." 
                paragrafo="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"/>

            </div>
        </section>
    );
}