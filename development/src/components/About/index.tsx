import { AboutContainer, LinkA } from "./styles";
import { useContext } from 'react';
import { UserThemeContext } from "../../context/UserThemeContext";

export default function About() {
  const { theme } = useContext(UserThemeContext);
  
  return (
    <AboutContainer>

      <article>
        <aside >
          <h3 >Connect with me:</h3>
          <div>
            <LinkA id="Linkedin" href="https://linkedin.com/in/ogoiddev" target="blank">
              <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="ogoiddev" height="50" width="60" />
            </LinkA>
            <LinkA id="Stack Overflow" href="https://stackoverflow.com/users/20027746" target="blank">
              <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg" alt="20027746" height="50" width="60" />
            </LinkA>
            <LinkA id="GitHub" href="https://github.com/ogoiddev" target="blank" >
              <img src={ theme ? "./GitHub-Mark-Light-120px-plus.png" : "./github_black.png"} alt="github profile" height="50" />
            </LinkA>
            <LinkA id="Code Wars" href="https://www.codewars.com/users/ogoiddev" target="blank" >
              <img src="https://www.codewars.com/packs/assets/logo.61192cf7.svg" alt="code war profile" height="50" />
            </LinkA>
          </div>
        </aside>


        <h1>Diogo Martini Pantaleão</h1>
        <h2>{'WEB <Developer/>'}</h2>
        <span>
          Desenvolvimento focado no objetivo e na necessidade do cliente,
          com um código claro, seguro e de fácil manutenção.
          O sucesso resulta de um código constantemente monitorado com qualidade.
        </span>
      </article>
    </AboutContainer>
  );
}
