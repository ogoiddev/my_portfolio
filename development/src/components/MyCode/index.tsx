import ArrowLinkUp from "../ArrowLinkUp";
import Skills from "../Skills";
import { MyCodeContainer } from "./styles";


export default function MyCode() {
  return (
    <MyCodeContainer id='code'>


      <div className="arrow-code-position">
        <a href='#projects'>
          <ArrowLinkUp/>
        </a>
      </div>

      <div className="codes">
        <img src="/code_context.png" alt="context code" />
        <img src="/code_carousel_css.png" alt="carousel css code" />
      </div>
      <Skills/>

    </MyCodeContainer>
  );
}
