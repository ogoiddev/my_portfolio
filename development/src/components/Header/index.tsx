import { Moon, SunDim } from 'phosphor-react';
import { HeaderContainer } from './styles';


import dark from '../../styles/theme/dark';
import light from '../../styles/theme/light';
import { UserThemeContext } from '../../context/UserThemeContext';
import { useContext } from 'react';
import Navbar from '../Navbar';
import DropMenu from '../DropMenu';

export default function Header() {
  const { theme, setTheme } = useContext(UserThemeContext);
  
  return (
      <HeaderContainer>
        <div className='theme' onClick={ () => setTheme(!theme) } >
          { theme
            ? <SunDim size={32} weight="fill" color={ light.COLORS.BLUE_LIGHT } /> 
            : <Moon size={32} weight="fill" color={ light.COLORS.TEXT_ACCENT } /> }
        </div>


        <div className='nav-side'> 
          <DropMenu/>
          <Navbar/>
          <img src="/favicon_do_panta.png" alt="Meu currículo" />
        </div>
      </HeaderContainer>
  );
}
