import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  
  width: fit-content;
  height: 80%;
  
  
  a {
    display: flex;
    align-items: center;
    color: ${props => props.theme.COLORS.GRAY_LIGHT };
    height: 45px;
    padding: 0 16px;

    appearance: none;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;

    position: relative;
    
    :after {
      content: '';
      width: 0;
      height: 1px;
      display: block;
      background: ${props => props.theme.COLORS.BLUE_LIGHT};
      transition: 400ms;
      position: absolute;
      bottom: 0;
      transition: 0.3s ease-out;

    }
    :hover {
      color: ${props => props.theme.COLORS.BLUE_LIGHT}
    }

    :hover:after {
      width: 90%;
    }

    :active {
      transform: translate(1px, 1px);
      border-radius: 4px;
      background: ${props => props.theme.COLORS.BLUE_LIGHT}10;
    }


  }
`