import { AboutContainer } from "./styles";

export default function About() {
  return (
    <AboutContainer>
      <article>
        <h1>Diogo Martini Pantaleão</h1>
        <h2>{'WEB <Developer/>'}</h2>
        <span>
          Desenvolvimento focado no objetivo e na necessidade do cliente,
          com um código claro, seguro e de fácil manutenção.
          O sucesso resulta de um código constantemente monitorado com qualidade.
        </span>

      </article>
      
      <div className="gif">
        <img className="esteira" src="/001.gif" alt="site em construção" />
        
      </div>
      {/* <img src="" alt="Foto Perfil de Diogo" /> */}
    </AboutContainer>
  );
}
