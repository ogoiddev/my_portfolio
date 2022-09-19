import About from "../About";
import ArrowLinkDown from "../ArrowLinkDown";
import Header from "../Header";
import { HomeContainer } from "./styles";


export function Hall() {
  return (
    <HomeContainer id='hall'>
      <Header/>
      <About/>
      
      <div className="arrow-hall-position">
        <a href='#projects'>
          <ArrowLinkDown/>
        </a>
      </div>
    </HomeContainer> 
  );
}
