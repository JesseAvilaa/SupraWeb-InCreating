import React from 'react';

import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';

import './styles.css';

export default function FormDev() {
    return (
    

    <div className="form-dev-container">
      <div className="content">
        
        <section>

        <img src={logoImg} alt="Rede Supra"/>

          <h1>Bem vindo a seleção de novos membros para a equipe de Desenvolvimento!</h1>
          <p>Com a abertura da rede e consequentemente, o aumento de projetos sendo desenvolvidos simultaneamente, 
            estamos abrindo vagas para desenvolvedores <strong>Java </strong>  e <strong>Web </strong>que estejam interessados em trabalhar conosco. 
            Essas posições são financeiramente  <strong>remuneradas</strong> e estamos em busca de pessoas sérias que querem ter a chance de desenvolver qualquer tipo de projeto apresentado.
          </p>

          <p style={{color: "red", fontWeights: "bold", fontSize: "30px", paddingTop: "30px", height: "105px"}}>Requisitos mínimos !</p>

          <ul>
            
            <li>16 anos de idade</li>
            <li>Inglês intermediário</li>
            <li>Conhecimento em desenvolvimento de Plugins ou de Websites</li>
            <li>Conhecimento avançado de bancos de dados SQL (MySQL preferencialmente)</li>
            <li>Conhecimento intermediário de banco de dados não-relacionais (MongoDB preferencialmente)</li>
            <li>Conhecimento intermediário na administração de servidores com sistema operacional Linux</li>
            <li>Estar sempre aberto a críticas (muitas) ao seu trabalho</li>

          </ul>

          <h2 style={{paddingTop: "87px", height: "217px"}}>Você se identificou com a maioria dos requisitos acima? Então envie sua aplicação através do nosso email: bláblaáblá@supra.com.br</h2>

          <ul>
            
            <li>Nome completo</li>
            <li>Idade</li>
            <li>Cargo (Desenvolvedor Web, Plugins)</li>
            <li>Nick utilizado em nosso servidor</li>
            <li>Discord</li>
            <li>Para qual o seu tipo de desenvolvimento você se sentiu mais confiável</li>
            <li>Projeto de base para a sua avaliação do cargo escolhido, publicado no GitHub,Caso não tenha nenhum, crie um projeto simples e publique para que possamos fazer uma breve avaliação. Isso também nos ajuda a filtrar melhor as aplicações.</li>

          </ul>

          <a style={{ paddingTop: '97px'}} className="back-link" href= '/' >

            <FiLogIn  size={25} color="#e02041" />
            Clique aqui para voltar para pagina inicial.
          </a>

        </section>
      </div>
    </div>
  )
}