import './App.css';
import Rodape from './componentes/Rodape';
import Banner from './componentes/SecaoBanner';
import ExperienciaTrabalho from './componentes/SecaoExperienciaTrabalho';
import Topo from './componentes/Topo';
import React, {useState} from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const alterarTema = () =>{
    return (setDarkMode(!darkMode));
  }

  return (
    <div>
      <Topo alterarTema={alterarTema} darkMode={darkMode}/>
      <Banner darkMode={darkMode}/>
      <ExperienciaTrabalho darkMode={darkMode}/>
      <Rodape darkMode={darkMode}/>
    </div>
  );
}

export default App;
