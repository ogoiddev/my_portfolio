import Skills from "../Skills";
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
        
        <aside >
        <h3 >Connect with me:</h3>
          <a href="https://linkedin.com/in/ogoiddev" target="blank">
            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="ogoiddev" height="50" width="60" />
          </a>
          <a href="https://stackoverflow.com/users/20027746" target="blank">
            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg" alt="20027746" height="50" width="60" />
          </a>
          <a href="https://github.com/ogoiddev" target="blank">
            <img src="/GitHub-Mark-Light-120px-plus.png" alt="github profile" height="50" />
          </a>
        </aside>
      </article>
      
      <div className="skills">
        <Skills/>
        
      </div>
    </AboutContainer>
  );
}
