import { ThemeProvider } from 'styled-components';

import dark from './styles/theme/dark';
import light from './styles/theme/light';

import { MouseEvent, useContext, useState } from 'react';
import GlobalStyle from '../src/styles/global';
import { Cursor } from './AppStyles';
import { UserThemeContext } from './context/UserThemeContext';
import { Home } from './pages/Home';


export default function App() {
  const { theme } = useContext(UserThemeContext);

  const [locate, setLocate] = useState({x: 0, y: 0})

  const handleMoveMouse = (event: MouseEvent) => {
    event.preventDefault();
    setLocate({x: event.pageX, y: event.pageY})
  };

  return (
    <ThemeProvider theme={ theme ?  dark : light }>
      
        <div onMouseMove={(e) => handleMoveMouse(e)}>
        <Cursor locate={locate}/>

          <Home/>

          <GlobalStyle/>

        </div>
      
    </ThemeProvider>
  )
}