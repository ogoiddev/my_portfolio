import About from "../About";
import ArrowLinkDown from "../ArrowLinkDown";
import { HomeContainer } from "./styles";


export function Hall() {
  return (
    <HomeContainer id='hall'>
      
      <About/>
      
      <div className="arrow-hall-position">
        <a href='#projects'>
          <ArrowLinkDown/>
        </a>
      </div>
    </HomeContainer> 
  );
}
