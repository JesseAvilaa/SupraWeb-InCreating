import React from 'react';

import { FaDiscord , FaTwitter , FaChalkboardTeacher} from "react-icons/fa";

import './styles.css';
import logoImg from '../../assets/logo.png';

export default function Main() {

  return (

    <div className="new-main-container">
      <div className="content">
        
        <section>
          <img src={logoImg} alt="Rede Supra"/>

          <h1>Bem vindo ao site!</h1>
          <p>Olá, nosso site se encontra em criação para mais informações entre em nosso discord.</p>

          <a className="back-link" href= '/dev'>

            <FaChalkboardTeacher size={35} color="#7159c1" />
            Clique aqui fazer o formulário para desenvolvedor!
          </a>

          <a className="back-link" href= 'https://discord.gg/3nJbtuy'>

            <FaDiscord size={35} color="#7159c1" />
            Clique aqui para entrar em nosso discord!
          </a>

          <a className="back-link" href= 'https://www.twitter.com/redesupra'>

            <FaTwitter size={35} color="#7159c1" />
            Clique aqui para entrar em nosso twitter!

          </a>

        </section>
      </div>
    </div>
  )
}