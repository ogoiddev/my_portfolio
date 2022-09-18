import { AboutContainer } from "./styles";

export default function About() {
  return (
    <AboutContainer>
      <article>
        <h1>Diogo Martini Pantaleão</h1>
        <h2>{'WEB <Developer />'}</h2>
        <span>
          Um profissional transparente, honesto, justo e comprometido. 
          Sempre a disposição para solucionar problemas.
          Adoro tocar violão e apreciar comidas e bebidas especiais.

        </span>

      </article>
      
      <img src="/SITE-EM-CONSTRUCAO.gif" alt="site em construção" />
      {/* <img src="" alt="Foto Perfil de Diogo" /> */}
    </AboutContainer>
  );
}
