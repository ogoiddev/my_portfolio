import { HomeContainer } from './HomeStyles';
import Header from '../components/Header/index';
import About from '../components/About';

export function Home() {
  return (
    <HomeContainer>
      <Header/>
      <About/>
    </HomeContainer> 
  );
}
