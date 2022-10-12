import ArrowLinkDown from '../ArrowLinkDown/index';
import ArrowLinkUp from '../ArrowLinkUp';
import { ProjectsContainer, ProjectsContent } from "./styles";

export default function Projects() {
  return (
    <ProjectsContainer id='projects'>
      <ProjectsContent>
        <p>
          Estou em projeto de carreira desde julho de 2021.
          Tenho o objetivo de me tornar um desenvolvedor web pleno e construir uma carreira sólida.

          Hoje posso te ajudar com desenvolvimento em JavaScript, TypeScript, NodeJs, React, C#, .NET, MySql, MongoDB e bibliotecas relacionadas.

          A programação pra mim é uma arte que nos motiva a explorar cada vez mais nossa capacidade de evolução.
          Penso em atuar não apenas por gostar da profissão, mas também para me aproximar a um propósito de vida de melhorar ou facilitar a vida das pessoas. 


          Mais abaixo você encontra links para alguns projetos que ja desenvolvi.
          Estarei apresentando mais e mais assim que estiver pronto. Obrigado pela visita!
        </p>

      </ProjectsContent>
          <div className="arrow-projects-position">
            <a href='#hall'>
              <ArrowLinkUp/>
            </a>
            <a href='#code'>
              <ArrowLinkDown/>
            </a>
          </div>
    </ProjectsContainer>
  );
}
