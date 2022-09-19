import About from "../About";
import ArrowAnime from "../ArrowAnime";
import Header from "../Header";
import { HomeContainer } from "./styles";


export function Hall() {
  return (
    <HomeContainer id='hall'>
      <Header/>
      <About/>
      <ArrowAnime/>
    </HomeContainer> 
  );
}
