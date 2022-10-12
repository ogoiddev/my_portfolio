import ArrowLinkUp from "../ArrowLinkUp";
import Skills from "../Skills";
import { FooterPage, MyCodeContainer } from "./styles";
import { Carousel } from '../Carousel';

const SLIDE_COUNT = 10;
const slides = Array.from(Array(SLIDE_COUNT).keys());


export default function MyCode() {
  return (
    <MyCodeContainer id='code'>
      <Carousel class='carousel' slides={slides}/>

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

      <FooterPage>
        <div className="content"/>
      </FooterPage>
    </MyCodeContainer>
  );
}
