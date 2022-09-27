import { ThemeProvider } from 'styled-components';

import dark from './styles/theme/dark';
import light from './styles/theme/light';

import { MouseEvent, useContext, useState } from 'react';
import GlobalStyle from '../src/styles/global';
import { AppContainer, Cursor } from './AppStyles';
import { UserThemeContext } from './context/UserThemeContext';

import Footer from './components/Footer';
import Projects from './components/Projects';
import { Hall } from './components/Hall';
import MyCode from './components/MyCode';
import Header from './components/Header';


export default function App() {
  const { theme } = useContext(UserThemeContext);

  const [locate, setLocate] = useState({x: 0, y: 0})

  const handleMoveMouse = (event: MouseEvent) => {
    event.preventDefault();
    setLocate({x: event.clientX, y: event.clientY})
  };

  return (
    <ThemeProvider theme={ theme ?  dark : light }>
      
        <AppContainer onMouseMove={(e) => handleMoveMouse(e)}>
        <Cursor locate={locate}/>
          <Header/>
          <Hall/>

          <GlobalStyle/>

          <Projects/>
          <MyCode/>
          
          <Footer/>

        </AppContainer>
      
    </ThemeProvider>
  )
}